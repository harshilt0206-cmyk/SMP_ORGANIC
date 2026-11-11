import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, ArrowRight, CheckCircle2, Phone, Eye } from 'lucide-react';
import { mainProduct } from '../data/products';
import { contacts } from '../data/business';
import WhatsAppButton from './WhatsAppButton';

const FeaturedProduct = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = mainProduct.galleryImages[activeImageIndex] || mainProduct.galleryImages[0];

  return (
    <div className="card-base" style={{ padding: '0', overflow: 'hidden', border: '2px solid rgba(46, 125, 50, 0.25)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center' }}>
        
        {/* Left Product Image Section with Interactive Thumbnails */}
        <div style={{ padding: '1.5rem', backgroundColor: '#F3F0E6' }}>
          
          <div style={{
            position: 'relative',
            height: '380px',
            backgroundColor: '#1E3A2B',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            border: '1px solid var(--color-border)'
          }}>
            <img 
              src={currentImage.url} 
              alt={currentImage.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
            
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              backgroundColor: 'var(--color-primary-dark)',
              color: '#FFFFFF',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.8rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              ⭐ REAL PRODUCT PHOTO
            </div>

            <div style={{
              position: 'absolute',
              bottom: '0.75rem',
              right: '0.75rem',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px'
            }}>
              {currentImage.title}
            </div>
          </div>

          {/* Genuine Thumbnails */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {mainProduct.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: idx === activeImageIndex ? '2px solid var(--color-primary-light)' : '2px solid transparent',
                  padding: 0,
                  flexShrink: 0,
                  cursor: 'pointer',
                  backgroundColor: '#E5E7EB'
                }}
                title={img.title}
              >
                <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>

        </div>

        {/* Right Details */}
        <div style={{ padding: '2.5rem 2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-badge tag-badge-green">
              Bio Enriched Organic Manure
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 700 }}>
              {mainProduct.kannadaName}
            </span>
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            {mainProduct.name}
          </h2>

          {/* Pricing Block */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary-dark)', fontFamily: 'var(--font-heading)' }}>
              ₹{mainProduct.price}
            </span>
            <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-accent)' }}>
              {mainProduct.priceNote}
            </span>
            <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>
              / {mainProduct.packSize} Bag
            </span>
          </div>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.975rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            {mainProduct.description}
          </p>

          {/* Raw Materials Included */}
          <div style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-bg-main)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)' }}>
            <h4 style={{ fontSize: '0.875rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Enriched Natural Composition:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {mainProduct.composition.map((item, idx) => (
                <span key={idx} style={{
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-primary-dark)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '6px',
                  border: '1px solid var(--color-border)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <CheckCircle2 size={12} style={{ color: 'var(--color-primary-light)' }} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Delivery Note */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            <Truck size={18} style={{ color: 'var(--color-accent)', minWidth: '18px', marginTop: '2px' }} />
            <span>{mainProduct.deliveryDisclaimer}</span>
          </div>

          {/* Action Buttons: Call Avinash for orders, WhatsApp Chethan for enquiries */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            
            {/* Call for Orders linked to Avinash */}
            <a 
              href={contacts.orders.telLink} 
              className="btn btn-primary"
              title="Call Avinash for orders and delivery"
            >
              <Phone size={18} />
              <span>Call for Orders: {contacts.orders.name}</span>
            </a>

            {/* WhatsApp Enquiry linked to Chethan */}
            <WhatsAppButton 
              text="WhatsApp Chethan"
              message={`Hello Chethan, I am interested in purchasing SMP Organic Super Gold 40 kg manure bag (₹480 + delivery). Please share delivery charges for my farm.`}
              variant="whatsapp"
            />

            <Link to="/organic-manure" className="btn btn-outline">
              <span>View Product Details</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FeaturedProduct;
