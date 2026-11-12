from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List, Dict
import sqlite3
from database import get_db_connection, init_db

app = FastAPI(
    title="SMP Organic API",
    description="Full-Stack Python + SQLite DBMS REST API for SMP Organic React JS Web App",
    version="1.1.0"
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

# ============================================================================
# Pydantic Schemas
# ============================================================================

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

class ProductReviewCreate(BaseModel):
    product_id: str = "smp-super-gold-organic-manure-40kg"
    customer_name: str
    location: Optional[str] = ""
    crop: Optional[str] = ""
    rating: int = Field(..., ge=1, le=5, description="Rating from 1 to 5 stars")
    review_text: Optional[str] = ""

# ============================================================================
# Endpoints
# ============================================================================

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

# 3. Product Ratings & Reviews API
@app.get("/api/products/{product_id}/ratings")
def get_product_ratings(product_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    rows = cursor.execute(
        "SELECT * FROM product_reviews WHERE product_id = ? ORDER BY created_at DESC", 
        (product_id,)
    ).fetchall()
    conn.close()

    reviews_list = [dict(r) for r in rows]
    total_ratings = len(reviews_list)

    breakdown = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    total_stars = 0
    for r in reviews_list:
        score = int(r.get("rating", 5))
        if 1 <= score <= 5:
            breakdown[score] += 1
            total_stars += score

    average_rating = round(total_stars / total_ratings, 1) if total_ratings > 0 else 0.0

    return {
        "product_id": product_id,
        "average_rating": average_rating,
        "total_ratings": total_ratings,
        "breakdown": breakdown,
        "reviews": reviews_list
    }

@app.post("/api/products/{product_id}/ratings", status_code=201)
def submit_product_rating(product_id: str, review: ProductReviewCreate):
    if not (1 <= review.rating <= 5):
        raise HTTPException(status_code=400, detail="Rating must be between 1 and 5 stars.")
    
    clean_name = review.customer_name.strip()
    if not clean_name:
        raise HTTPException(status_code=400, detail="Customer name is required.")

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """INSERT INTO product_reviews (product_id, customer_name, location, crop, rating, review_text)
           VALUES (?, ?, ?, ?, ?, ?)""",
        (product_id, clean_name, review.location.strip() if review.location else "", 
         review.crop.strip() if review.crop else "", review.rating, 
         review.review_text.strip() if review.review_text else "")
    )
    conn.commit()
    new_id = cursor.lastrowid
    conn.close()

    return {
        "message": "Thank you! Your rating and review have been recorded.",
        "id": new_id
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
