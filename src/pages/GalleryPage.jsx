import React from 'react';
import { Image as ImageIcon, Phone, CheckCircle2 } from 'lucide-react';
import { contacts } from '../data/business';
import Gallery from '../components/Gallery';
import WhatsAppButton from '../components/WhatsAppButton';

const GalleryPage = () => {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-gold)' }}>
              GENUINE PHOTOGRAPHY
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Our Products, Nursery & Farming
          </h1>
          <p style={{ color: '#E2E8F0', fontSize: '1.05rem', maxWidth: '750px' }}>
            Authentic photographs of SMP Organic Super Gold manure bags, processing & dispatch stock, plantation applications, and farm work.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          
          {/* Reusable Gallery Component with Category Filters & Modal */}
          <Gallery />

          {/* Photo Note & Notice for Additional Photos */}
          <div style={{
            marginTop: '3.5rem',
            padding: '1.75rem',
            backgroundColor: 'var(--color-primary-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(46, 125, 50, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-heading)', marginBottom: '0.35rem' }}>
                Looking for Live Photos of Nursery Saplings?
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '650px' }}>
                Contact Chethan directly on WhatsApp to receive real-time photos and availability of Coconut saplings, Arecanut plants, and vegetable starters.
              </p>
            </div>

            <WhatsAppButton 
              text="Request Photos on WhatsApp"
              message="Hello Chethan, could you please share current live photos of nursery saplings and farm stock?"
              size="sm"
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
