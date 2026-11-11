from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import sqlite3
from database import get_db_connection, init_db

app = FastAPI(
    title="SMP Organic API",
    description="Full-Stack Python + SQLite DBMS REST API for SMP Organic React JS Web App",
    version="1.0.0"
)

# Enable CORS for React frontend (Vite default port 3000 / 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup_db():
    init_db()

# Pydantic Schemas
class EnquiryCreate(BaseModel):
    name: str
    phone: str
    location: str
    crop: Optional[str] = None
    service_type: str
    message: str

class PlantCreate(BaseModel):
    name: str
    category: str
    variety: Optional[str] = None
    availability: str
    price: Optional[float] = None
    description: str

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "SMP Organic Python Backend",
        "dbms": "SQLite3",
        "documentation": "/docs"
    }

# 1. Enquiries API
@app.post("/api/enquiries", status_code=201)
def create_enquiry(enquiry: EnquiryCreate):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """INSERT INTO enquiries (name, phone, location, crop, service_type, message) 
           VALUES (?, ?, ?, ?, ?, ?)""",
        (enquiry.name, enquiry.phone, enquiry.location, enquiry.crop, enquiry.service_type, enquiry.message)
    )
    conn.commit()
    enquiry_id = cursor.lastrowid
    conn.close()
    return {"message": "Enquiry stored successfully in SQLite database", "id": enquiry_id}

@app.get("/api/enquiries")
def get_enquiries():
    conn = get_db_connection()
    cursor = conn.cursor()
    rows = cursor.execute("SELECT * FROM enquiries ORDER BY created_at DESC").fetchall()
    conn.close()
    return [dict(row) for row in rows]

# 2. Nursery Plants Inventory API
@app.get("/api/plants")
def get_plants():
    conn = get_db_connection()
    cursor = conn.cursor()
    rows = cursor.execute("SELECT * FROM nursery_plants").fetchall()
    conn.close()
    return [dict(row) for row in rows]

@app.post("/api/plants", status_code=201)
def add_plant(plant: PlantCreate):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """INSERT INTO nursery_plants (name, category, variety, availability, price, description)
           VALUES (?, ?, ?, ?, ?, ?)""",
        (plant.name, plant.category, plant.variety, plant.availability, plant.price, plant.description)
    )
    conn.commit()
    plant_id = cursor.lastrowid
    conn.close()
    return {"message": "Plant added to database", "id": plant_id}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
