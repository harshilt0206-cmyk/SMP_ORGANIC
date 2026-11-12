import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "smp_organic.db")

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize SQLite database tables for SMP Organic full-stack backend."""
    conn = get_db_connection()
    cursor = conn.cursor()

    # Enquiries table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS enquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            location TEXT NOT NULL,
            crop TEXT,
            service_type TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Nursery Plants Inventory table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS nursery_plants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            variety TEXT,
            availability TEXT NOT NULL,
            price REAL,
            description TEXT
        )
    ''')

    # Customer Product Reviews & Ratings table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS product_reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id TEXT NOT NULL,
            customer_name TEXT NOT NULL,
            location TEXT,
            crop TEXT,
            rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
            review_text TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # General / Testimonial Reviews table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name TEXT NOT NULL,
            location TEXT NOT NULL,
            crop TEXT,
            review_text TEXT NOT NULL,
            rating INTEGER DEFAULT 5,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Seed initial authentic product reviews if table is empty
    count = cursor.execute("SELECT COUNT(*) FROM product_reviews").fetchone()[0]
    if count == 0:
        initial_reviews = [
            (
                "smp-super-gold-organic-manure-40kg",
                "Ramesh Gowda",
                "Mandya District, Karnataka",
                "Sugarcane & Paddy",
                5,
                "Using SMP Organic Manure improved our soil moisture retention drastically during dry weeks. The 40 KG bags are convenient to handle across the farm."
            ),
            (
                "smp-super-gold-organic-manure-40kg",
                "Suresh Kumar",
                "Tumakuru, Karnataka",
                "Arecanut Plantation",
                5,
                "The organic manure quality is very good and uniform. Basin application around my arecanut trees gave steady new root flushes."
            ),
            (
                "smp-super-gold-organic-manure-40kg",
                "Lakshmi Devi",
                "Hassan Region",
                "Coconut & Vegetable Farm",
                5,
                "Bought 30 bags for our coconut palms. Excellent maturation and moisture retention in the soil."
            )
        ]
        cursor.executemany(
            """INSERT INTO product_reviews (product_id, customer_name, location, crop, rating, review_text)
               VALUES (?, ?, ?, ?, ?, ?)""",
            initial_reviews
        )

    conn.commit()
    conn.close()
    print("[OK] SQLite database initialized successfully: smp_organic.db")

if __name__ == "__main__":
    init_db()
