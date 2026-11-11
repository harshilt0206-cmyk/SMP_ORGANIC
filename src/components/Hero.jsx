import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sprout, Phone, Sparkles, Truck } from 'lucide-react';
import { businessInfo, contacts } from '../data/business';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  return (
    <section 
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-primary-dark)',
        color: '#FFFFFF',
        paddingTop: '3.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(46, 125, 50, 0.25), transparent 60%)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Clear Text & Verified Contact CTAs */}
          <div>
            
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '0.4rem 1.1rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              color: 'var(--color-gold)'
            }}>
              <Sparkles size={16} />
              <span>SMP ORGANIC • AGRICULTURAL USE</span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '0.75rem'
            }}>
              Super Gold Bio Enriched Organic Manure
            </h1>

            {/* Kannada / Subtitle Tagline */}
            <div style={{
              fontSize: '1.15rem',
              color: '#81C784',
              fontWeight: 600,
              marginBottom: '1.25rem'
            }}>
              ಸೂಪರ್ ಗೋಲ್ಡ್ ಜೈವಿಕ ಸಮೃದ್ಧ ಸಾವಯವ ಗೊಬ್ಬರ • For All Crops
            </div>

            {/* Supporting Text */}
            <p style={{
              fontSize: '1.05rem',
              color: '#E2E8F0',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
              maxWidth: '580px',
              fontWeight: 400
            }}>
              Prepared with cow, hen, and sheep manure blended with sugarcane pressmud. Naturally matured through aerobic decomposition for long-term farm soil fertility.
            </p>

            {/* Price Card */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              padding: '0.85rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2rem'
            }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#CBD5E0', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                  Standard Bag Size
                </span>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                  40 kg Bag — ₹480
                </span>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, display: 'block' }}>
                  + delivery charges
                </span>
                <span style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>
                  (Additional by location)
                </span>
              </div>
            </div>

            {/* Primary & Contact CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              
              {/* Call for Enquiries - Chethan */}
              <a 
                href={contacts.main.telLink} 
                className="btn btn-accent"
                title="Call Chethan for enquiries"
              >
                <Phone size={18} />
                <span>Call for Enquiries: {contacts.main.name}</span>
              </a>

              {/* Call for Orders - Avinash */}
              <a 
                href={contacts.orders.telLink} 
                className="btn btn-outline" 
                style={{ color: '#FFFFFF', borderColor: 'var(--color-gold)', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                title="Call Avinash for orders & delivery"
              >
                <Truck size={18} style={{ color: 'var(--color-gold)' }} />
                <span>Orders: {contacts.orders.name}</span>
              </a>

              {/* WhatsApp Us - Chethan */}
              <WhatsAppButton 
                text="WhatsApp Us"
                message="Hello Chethan, I would like to enquire about SMP Organic Super Gold 40 kg manure."
                size="md"
                className="pulse-whatsapp"
              />
            </div>

            {/* Trust Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShieldCheck size={22} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>100% Organic Ingredients</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Sprout size={22} style={{ color: '#68D391' }} />
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Multi-Month Maturation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🌴</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Ideal for Palms & Crops</span>
              </div>
            </div>

          </div>

          {/* Right Column: Genuine SMP Organic Super Gold Manure Bag in Plantation */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '0.75rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.45)',
              border: '3px solid rgba(46, 125, 50, 0.4)'
            }}>
              
              {/* Genuine Photo Container - Product bag fully visible and not cropped out */}
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#1E3A2B'
              }}>
                <img 
                  src="/images/smp-super-gold-manure-product.jpg" 
                  alt="Real photograph of SMP Organic Super Gold 40 kg Bio Enriched Organic Manure bag and compost in coconut plantation"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '520px',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />

                {/* Real Photo Floating Pill */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'rgba(30, 58, 43, 0.9)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-whatsapp)' }}></span>
                  <span>GENUINE SMP PRODUCT PHOTO</span>
                </div>
              </div>

              {/* Caption Card Below Photo */}
              <div style={{
                padding: '0.85rem 0.5rem 0.25rem 0.5rem',
                color: 'var(--color-text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-heading)' }}>
                    Super Gold 40 kg Bag & Compost
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    Real photograph in arecanut & coconut plantation
                  </div>
                </div>

                <Link 
                  to="/organic-manure" 
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-light)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
