import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sprout, Trees, HelpCircle, PhoneCall, CheckCircle, Phone, Truck } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedProduct from '../components/FeaturedProduct';
import ServiceCard from '../components/ServiceCard';
import ProcessTimeline from '../components/ProcessTimeline';
import VideoPlayer from '../components/VideoPlayer';
import StatsCard from '../components/StatsCard';
import ReviewCard from '../components/ReviewCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { customerReviews } from '../data/reviews';
import { businessInfo, contacts } from '../data/business';

const Home = () => {
  return (
    <div>
      {/* 1. Hero Banner with Real Photo and Verified Contact Details */}
      <Hero />

      {/* 2. What We Do (Services) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">WHAT WE DO</span>
            <h2 className="section-title">Organic Solutions & Guidance for Farmers</h2>
            <p className="section-subtitle">
              SMP Organic prepares enriched Super Gold organic manure, nurtures healthy plant saplings, and provides practical advice to farmers.
            </p>
          </div>

          <div className="grid-4">
            <ServiceCard 
              title="Super Gold Manure"
              description="Prepared using cow, hen, and sheep manure mixed with sugarcane pressmud and naturally composted for several months."
              linkTo="/organic-manure"
              iconName="Sprout"
              badgeText="40 kg Pack — ₹480"
            />
            <ServiceCard 
              title="Nursery Plants"
              description="Healthy Coconut saplings, Arecanut plants, and vegetable crops ready for farm transplantation."
              linkTo="/nursery"
              iconName="Trees"
              badgeText="Plant Nursery"
            />
            <ServiceCard 
              title="Agriculture Guidance"
              description="Practical advice on organic manure application, soil preparation, coconut, and arecanut cultivation."
              linkTo="/agriculture-advice"
              iconName="HelpCircle"
              badgeText="Chethan on WhatsApp"
            />
            <ServiceCard 
              title="Orders & Delivery"
              description="Order booking and tractor/truck delivery dispatch coordination directly with Avinash."
              linkTo="/contact"
              iconName="PhoneCall"
              badgeText="Avinash: 9964002548"
            />
          </div>
        </div>
      </section>

      {/* 3. Main Product Section (40 kg Super Gold Organic Manure) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-card-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FEATURED PRODUCT</span>
            <h2 className="section-title">Super Gold Bio Enriched Organic Manure</h2>
            <p className="section-subtitle">
              40 kg Pack Size @ ₹480 (+ delivery charges). Natural soil nourishment composted with enriched raw materials.
            </p>
          </div>

          <FeaturedProduct />
        </div>
      </section>

      {/* 4. Preparation Process Timeline */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">OUR PROCESS</span>
            <h2 className="section-title">How Our Organic Manure Is Prepared</h2>
            <p className="section-subtitle">
              A 7-step natural aerobic decomposition journey from raw material collection to final delivery.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 5. Process Video Player */}
      <section className="section-padding" style={{ backgroundColor: '#1A2A20' }}>
        <div className="container">
          <VideoPlayer />
        </div>
      </section>

      {/* 6. Community Statistics */}
      <section className="section-padding">
        <div className="container">
          <StatsCard />
        </div>
      </section>

      {/* 7. Customer Reviews Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-card-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">TESTIMONIALS</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Real experiences from our customers and community growers using SMP Organic products.
            </p>
            <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--color-primary-light)', fontWeight: 600 }}>
              ✓ Real experiences from our customers
            </div>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {customerReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call To Action Footer Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ fontSize: '2.25rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Ready to Enrich Your Farm Soil?
          </h2>
          <p style={{ color: '#E2E8F0', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Contact SMP Organic for 40 kg Super Gold manure orders, nursery plant availability, or farming guidance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            
            <a 
              href={contacts.orders.telLink} 
              className="btn btn-accent btn-lg"
              title="Call Avinash for orders and delivery"
            >
              <Truck size={20} />
              <span>Call for Orders: {contacts.orders.name}</span>
            </a>

            <WhatsAppButton 
              text="WhatsApp Chethan"
              message="Hello Chethan, I would like to enquire about ordering SMP Organic Super Gold manure (40 kg @ ₹480) and nursery plants."
              size="lg"
            />

            <Link to="/contact" className="btn btn-outline btn-lg" style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}>
              <span>View Verified Contacts</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
