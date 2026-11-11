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

    # Reviews table
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

    conn.commit()
    conn.close()
    print("[OK] SQLite database initialized successfully: smp_organic.db")

if __name__ == "__main__":
    init_db()
