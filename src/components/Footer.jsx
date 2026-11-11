import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin, ExternalLink, MessageCircle, Truck } from 'lucide-react';
import { businessInfo, contacts } from '../data/business';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: '#E2E8F0', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Sprout size={22} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: '#FFFFFF', display: 'block' }}>
                  SMP ORGANIC
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                  Super Gold Bio Enriched Manure
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.925rem', color: '#A0AEC0', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {businessInfo.subTagline}
            </p>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-gold)', fontWeight: 600 }}>
              🌾 40 kg Pack — ₹480 + delivery charges
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.925rem' }}>
              <li><Link to="/" style={{ color: '#CBD5E0' }}>Home</Link></li>
              <li><Link to="/organic-manure" style={{ color: '#CBD5E0' }}>Super Gold Manure (40 kg)</Link></li>
              <li><Link to="/nursery" style={{ color: '#CBD5E0' }}>Nursery & Crops</Link></li>
              <li><Link to="/agriculture-advice" style={{ color: '#CBD5E0' }}>Agriculture Advice</Link></li>
              <li><Link to="/about" style={{ color: '#CBD5E0' }}>About SMP Organic</Link></li>
              <li><Link to="/gallery" style={{ color: '#CBD5E0' }}>Our Products, Nursery & Farming</Link></li>
              <li><Link to="/contact" style={{ color: '#CBD5E0' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Verified Business Contacts */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
              Verified Contacts
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#CBD5E0' }}>
              
              {/* Chethan - Main Contact */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Main Enquiries & WhatsApp
                </div>
                <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem', marginTop: '0.2rem' }}>
                  {contacts.main.name}: <a href={contacts.main.telLink} style={{ color: '#68D391' }}>{contacts.main.displayNumber}</a>
                </div>
                <div style={{ marginTop: '0.35rem' }}>
                  <a 
                    href={contacts.main.whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--color-whatsapp)',
                      fontSize: '0.825rem',
                      fontWeight: 600
                    }}
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp Chethan</span>
                  </a>
                </div>
              </div>

              {/* Avinash - Orders & Delivery */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Orders & Delivery Enquiries
                </div>
                <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem', marginTop: '0.2rem' }}>
                  {contacts.orders.name}: <a href={contacts.orders.telLink} style={{ color: 'var(--color-gold)' }}>{contacts.orders.displayNumber}</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#A0AEC0', marginTop: '0.25rem' }}>
                  <Truck size={14} />
                  <span>Call Avinash for farm delivery rates</span>
                </div>
              </div>

            </div>
          </div>

          {/* Location & Social */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
              Our Community & Location
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#CBD5E0' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary-light)', minWidth: '18px', marginTop: '2px' }} />
                <span>{businessInfo.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#CBD5E0' }}>
                <Mail size={18} style={{ color: 'var(--color-primary-light)', minWidth: '18px', marginTop: '2px' }} />
                <span>{businessInfo.email}</span>
              </div>

              <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a 
                  href={businessInfo.socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#90CDF4' }}
                >
                  <span>Facebook ({businessInfo.socialStats.facebookCommunity})</span>
                  <ExternalLink size={13} />
                </a>
                <a 
                  href={businessInfo.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FBB6CE' }}
                >
                  <span>Instagram ({businessInfo.socialStats.agricultureFollowers})</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#A0AEC0'
        }}>
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <p style={{ fontStyle: 'italic' }}>Super Gold Bio Enriched Organic Manure for Agricultural Use</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
