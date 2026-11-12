# SMP Organic - Complete Real-World Agriculture Application

A modern, responsive React JS web application for **SMP Organic**, an agricultural business specializing in **Super Gold Bio Enriched Organic Manure** (40 kg @ ₹480 + delivery charges), nursery plants (Arecanut, Coconut, Vegetables), and practical farming advice.

This project is built as both an **official, production-ready business website** and a **5th-semester college project** demonstrating React JS concepts (Reusable Components, React Router v6, State, Props, Lists, Event Handling, Controlled Forms) alongside a **Python FastAPI & SQLite DBMS backend** with an interactive **5-Star Product Rating & Review System**.

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

## 🛠️ Step-by-Step Maintenance Guide (For Easy Updates)

### 1. How to Change the YouTube Video
The YouTube video player automatically handles **all YouTube URL formats** (standard `watch?v=...`, `youtu.be/...`, shorts, or embed URLs) and extracts the 11-character video ID automatically.

**Procedure to change the video:**
1. Open [`src/data/videos.js`](file:///c:/Users/harsh/OneDrive/Desktop/New%20folder/src/data/videos.js).
2. Look at the `videos` array:
   ```javascript
   export const videos = [
     {
       id: "manure-prep-video",
       title: "SMP Organic Manure Aerobic Composting Process",
       url: "https://www.youtube.com/watch?v=YOUR_YOUTUBE_ID", // <-- PASTE ANY YOUTUBE LINK HERE
       description: "See how cow, hen, and sheep manure along with sugarcane pressmud are blended...",
     }
   ];
   ```
3. Simply paste your new YouTube URL into `url: "..."`.
4. Save the file. The website will automatically extract the ID, generate the secure embed URL, and provide a direct fallback link without any iframe blocking errors.

---

### 2. How to Add New Photos or Change Existing Images
Images are organized into organized folders inside `public/images/`:
* `public/images/manure/`: Manure bags, packing unit, warehouse stacks, field applications.
* `public/images/nursery/`: Coconut saplings, Arecanut plants, vegetable starters.
* `public/images/farm/`: Field crops, plantation setting.
* `public/images/gallery/`: General farm photography.

**Procedure to add a new photo:**
1. Copy your `.jpg` or `.png` file into the appropriate folder (e.g. `public/images/gallery/my-new-photo.jpg`).
2. Open [`src/data/gallery.js`](file:///c:/Users/harsh/OneDrive/Desktop/New%20folder/src/data/gallery.js) and add an entry:
   ```javascript
   {
     id: "my-new-photo",
     title: "Field Visit Inspection",
     category: "Farm & Crops", // Choose: "Organic Manure", "Nursery & Saplings", or "Farm & Crops"
     image: "/images/gallery/my-new-photo.jpg",
     caption: "Our team inspecting soil moisture and crop growth."
   }
   ```
3. Save the file. The new photo will instantly show up in the Gallery with category filtering and Lightbox view!

---

### 3. How the Customer Rating & Review System Works
The website includes an interactive 5-Star Customer Rating & Review component on the Manure product page ([`src/components/RatingComponent.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/New%20folder/src/components/RatingComponent.jsx)):
* **Real-time Average & Breakdown**: Calculates the overall star rating and 5/4/3/2/1-star distribution bars.
* **Dual Persistence Mode**:
  1. **SQLite Database (FastAPI Backend)**: When the Python backend is running, reviews are sent via `POST /api/products/{product_id}/ratings` and stored in `smp_organic.db`.
  2. **Offline LocalStorage Fallback**: If the backend is offline or during client-only hosting (e.g., Vercel / GitHub Pages), the component seamlessly stores and loads customer reviews from the browser's `localStorage` so ratings and reviews **always work** without error!

---

### 4. How to Update Prices, Pack Size, or Social Media Numbers
All business information is stored centrally:
* **Pricing & Pack Size**: Edit [`src/data/products.js`](file:///c:/Users/harsh/OneDrive/Desktop/New%20folder/src/data/products.js) (`price: 480`, `packSize: "40 kg"`).
* **Phone Numbers**: Edit [`src/data/business.js`](file:///c:/Users/harsh/OneDrive/Desktop/New%20folder/src/data/business.js) (`contacts.main` and `contacts.orders`).
* **Community Numbers**: Edit [`src/data/business.js`](file:///c:/Users/harsh/OneDrive/Desktop/New%20folder/src/data/business.js) (`businessInfo.community.facebookMembers` and `instagramFollowers`).

---

## 📁 Clean & Maintainable Project Architecture

```text
smp_organic/
│
├── public/
│   ├── images/
│   │   ├── manure/           # Manure bags, packing & warehouse photos
│   │   ├── nursery/          # Coconut, arecanut, and seedling photos
│   │   ├── farm/             # Field crops and plantation photos
│   │   └── gallery/          # Categorized gallery photos
│   └── videos/               # Local video/poster assets
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Top navigation with active links & call button
│   │   ├── Footer.jsx        # Footer with verified contacts & community links
│   │   ├── Hero.jsx          # Genuine product bag in plantation hero banner
│   │   ├── VideoPlayer.jsx   # Smart YouTube embed player with fallback
│   │   ├── ProductCard.jsx   # Reusable product display card
│   │   ├── PlantCard.jsx     # Reusable nursery plant card
│   │   ├── RatingComponent.jsx # 5-star interactive rating & review system
│   │   ├── Gallery.jsx       # Reusable gallery with filters & modal
│   │   ├── GalleryModal.jsx  # Fullscreen image lightbox modal
│   │   ├── EnquiryForm.jsx   # Interactive contact enquiry form
│   │   ├── WhatsAppButton.jsx # Direct WhatsApp CTA with pre-filled message
│   │   ├── ProcessTimeline.jsx # 7-step manure composting timeline
│   │   ├── ServiceCard.jsx   # Overview card for What We Do
│   │   └── StatsCard.jsx     # Community stats & business highlights
│   │
│   ├── pages/
│   │   ├── Home.jsx          # Homepage
│   │   ├── ManurePage.jsx    # Organic manure product specs & ratings
│   │   ├── NurseryPage.jsx   # Nursery saplings & vegetable crops
│   │   ├── AdvicePage.jsx    # Agriculture guidance & WhatsApp enquiry
│   │   ├── AboutPage.jsx     # Business background & mission
│   │   ├── GalleryPage.jsx   # Photo gallery with category filters
│   │   └── ContactPage.jsx   # Verified contacts directory
│   │
│   ├── data/
│   │   ├── business.js       # Central contacts & business info
│   │   ├── products.js       # Main product details & pricing
│   │   ├── plants.js         # Nursery plants & vegetable crops
│   │   ├── gallery.js        # Gallery images and categories
│   │   ├── videos.js         # Video URLs with automatic YouTube ID extractor
│   │   └── reviews.js        # Seed customer testimonials
│   │
│   ├── App.jsx               # Router & page layout
│   ├── main.jsx              # Application mount point
│   └── index.css             # Natural color theme & responsive styling
│
├── backend/
│   ├── app.py                # FastAPI REST API (ratings, enquiries, orders)
│   ├── database.py           # SQLite database schema & seed script
│   └── smp_organic.db        # SQLite database file
│
├── package.json
└── README.md
```

---

## 🚀 How to Run the Application Locally

### 1. Run React JS Frontend
```bash
npm install
npm run dev
```
Open your browser at `http://localhost:5173` or `http://localhost:3000`.

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
Generates production-optimized bundle inside `dist/` with **0 errors**.
