# SMP Organic - Complete Real-World Agriculture Application

A modern, responsive React JS web application for **SMP Organic**, an agricultural business specializing in **Super Gold Bio Enriched Organic Manure** (40 kg @ ₹480 + delivery charges), nursery plants (Arecanut, Coconut, Vegetables), and practical farming advice.

This project is built as both an **official, production-ready business website** and a **5th-semester college project** demonstrating React JS concepts (Reusable Components, React Router v6, State, Props, Lists, Event Handling, Controlled Forms) alongside a **Python FastAPI & SQLite DBMS backend**.

---

## 📞 Verified Business Contacts

The application utilizes centralized shared contact configurations in `src/data/business.js`:

* **Main Contact & WhatsApp Enquiries**:
  * **Name**: Chethan
  * **Phone**: `+91 7892760379`
  * **Telephone Link**: `tel:+917892760379`
  * **WhatsApp Link**: `https://wa.me/917892760379`
  * **Role**: General farm enquiries, nursery plant availability, and agriculture advice.

* **Orders & Delivery Enquiries**:
  * **Name**: Avinash
  * **Phone**: `+91 9964002548`
  * **Telephone Link**: `tel:+919964002548`
  * **Role**: Booking manure orders, bulk orders, and location-based delivery dispatch.

---

## 📷 Complete Real Photography Integration (All 10 Photos)

All 10 genuine photographs provided by the business are organized in `public/images/`:

### A. Organic Manure & Plantation
1. **`smp-super-gold-manure-product.jpg`**: Genuine 40 kg Super Gold bag standing with a bowl of prepared compost in an arecanut plantation. Featured in **Hero** and **Main Product**.
2. **`smp-manure-packing-stock.jpg`**: Packed Super Gold manure bags at the processing & packaging unit.
3. **`smp-manure-bags-stock.jpg`**: Warehouse stack of bags displaying the official back specifications and quality label.
4. **`smp-manure-field-application.jpg`**: Tree basin circular ring application of organic manure around palm tree.
5. **`smp-plantation-hero.jpg`**: Scenic landscape view of arecanut & coconut plantation with product bag.

### B. Nursery Plants & Vegetable Crops
6. **`smp-coconut-saplings.jpg`**: Healthy coconut saplings with intact seed husk and root ball ready for field planting.
7. **`smp-arecanut-saplings.jpg`**: Thriving Arecanut seedlings nurtured in nursery grow bags in shade rows.
8. **`smp-tomato-crop.jpg`**: Field-grown tomato plants nourished with SMP Organic compost, showing heavy fruit clusters.
9. **`smp-capsicum-crop.jpg`**: Developing green bell peppers / capsicum on healthy field crop.
10. **`smp-vegetable-seedlings.jpg`**: Vegetable starter plug seedlings growing in nursery propagation trays.

---

## 🌟 Key Pages & Features

* **Home Page (`/`)**: Hero section featuring the uncropped genuine Super Gold bag photo in plantation, What We Do cards, Featured 40 kg Product showcase, 7-step manure prep timeline, video section, community statistics (2L+ FB, 40K+ IG), and customer reviews.
* **Organic Manure Page (`/organic-manure`)**: Detailed product breakdown, 40 kg pack @ ₹480 (+ delivery charges), raw material mixture (cow, hen, sheep manure, sugarcane pressmud), scientific soil health benefits, 7-step preparation timeline, and photo gallery with Lightbox modal.
* **Nursery & Crops Page (`/nursery`)**: Real photo catalogue of Coconut saplings, Arecanut plants, Tomato crop, Capsicum crop, and Vegetable plug seedlings with category filtering and direct WhatsApp availability buttons to Chethan.
* **Agriculture Advice Page (`/agriculture-advice`)**: Guidance cards and interactive query form routing pre-filled questions to Chethan on WhatsApp.
* **About SMP Organic (`/about`)**: Factual business information, plantation photo, transparent pricing, and verified contact cards.
* **Gallery Page (`/gallery`)**: Titled **"Our Products, Nursery & Farming"** featuring all 10 real photographs with interactive category filters and Lightbox modal.
* **Contact Us Page (`/contact`)**: Verified contact cards for Chethan and Avinash, delivery rates notice, and interactive enquiry form.

---

## 🚀 How to Run the Application Locally

### 1. Run React JS Frontend
```bash
npm install
npm run dev
```
Open your browser at `http://localhost:3000` or `http://localhost:5173`.

### 2. Run Python FastAPI Backend (Optional / DBMS Presentation)
```bash
python backend/database.py
python backend/app.py
```
Access interactive API documentation at: `http://127.0.0.1:8000/docs`.

### 3. Production Build
```bash
npm run build
```
Generates production-optimized bundle inside `dist/` with 0 errors.
