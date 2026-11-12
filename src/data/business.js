/**
 * ============================================================================
 * SMP ORGANIC - CENTRAL BUSINESS & VERIFIED CONTACT CONFIGURATION
 * ============================================================================
 * 
 * Verified Contacts:
 * 1. Main Contact (General & WhatsApp enquiries): Chethan (+91 7892760379)
 * 2. Orders & Delivery: Avinash (+91 9964002548)
 * 
 * Note for Maintenance:
 * - Update phone numbers, WhatsApp links, and address below.
 * - To change YouTube videos, edit `src/data/videos.js`.
 * - To update manure product details, edit `src/data/products.js`.
 * - To update nursery plants, edit `src/data/plants.js`.
 * - To update gallery photos, edit `src/data/gallery.js`.
 */

import { videos } from './videos';

export const contacts = {
  main: {
    name: "Chethan",
    role: "General Enquiries & WhatsApp",
    phone: "+91 7892760379",
    displayNumber: "+91 7892760379",
    telLink: "tel:+917892760379",
    whatsappNumber: "917892760379",
    whatsappLink: "https://wa.me/917892760379"
  },
  orders: {
    name: "Avinash",
    role: "Orders & Delivery Enquiries",
    phone: "+91 9964002548",
    displayNumber: "+91 9964002548",
    telLink: "tel:+919964002548"
  }
};

export const businessInfo = {
  // Business Identity
  name: "SMP Organic",
  productName: "SMP Organic Super Gold Bio Enriched Organic Manure",
  tagline: "Better Soil. Better Farming. Naturally.",
  subTagline: "Super Gold Bio Enriched Organic Manure, healthy nursery plants, and practical agriculture guidance for farmers and growers.",
  
  // Shared verified contact references
  contacts: contacts,
  phone: contacts.main.phone,
  whatsappNumber: contacts.main.whatsappNumber,
  ordersPhone: contacts.orders.phone,
  ordersName: contacts.orders.name,
  mainContactName: contacts.main.name,

  email: "contact@smporganic.com",
  address: "SMP Organic Agro Farm & Processing Unit, Regional Agriculture Belt, Karnataka, India",
  businessHours: "Monday - Saturday: 8:00 AM - 6:00 PM | Sunday: Closed",

  // Social Community Statistics (Editable configuration)
  socialStats: {
    facebookCommunity: "2 Lakh+",
    facebookCountNumber: 200000,
    agricultureFollowers: "40K+",
    followersCountNumber: 40000,
    happyFarmers: "1,500+",
  },

  // Social Media Links
  socialLinks: {
    facebook: "https://facebook.com/smporganic",
    instagram: "https://instagram.com/smporganic",
    whatsappGroup: contacts.main.whatsappLink,
    youtube: "https://youtube.com/@smporganic"
  },

  // Process Video Reference (Full configuration is in src/data/videos.js)
  processVideo: videos[0],

  // Raw Material Mixture Description
  rawMaterials: [
    { name: "Cow Manure", desc: "Rich in essential soil organic matter and beneficial micro-organisms." },
    { name: "Hen Manure", desc: "High organic nitrogen source for healthy vegetative foliage." },
    { name: "Sheep Manure", desc: "Balanced organic nutrient source that improves soil texture." },
    { name: "Sugarcane By-Products", desc: "Natural carbon-rich pressmud providing long-term humus formation." }
  ],

  // Soil Health Benefits (Scientifically accurate & reasonable claims only)
  manureBenefits: [
    "Enriches soil structure and increases organic matter content",
    "Improves soil water retention and aeration naturally",
    "Stimulates beneficial soil microbial activity for nutrient uptake",
    "Sustained nutrient release for steady crop root development",
    "Restores soil health depleted by continuous chemical farming"
  ]
};

export default businessInfo;
