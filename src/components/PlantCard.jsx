import React, { useState } from 'react';
import { Tag, CheckCircle, Info, Sprout, Image as ImageIcon } from 'lucide-react';
import { contacts } from '../data/business';
import WhatsAppButton from './WhatsAppButton';

const PlantCard = ({ plant }) => {
  const { name, category, variety, availability, price, image, description, fallbackNotice } = plant;
  const [imageError, setImageError] = useState(false);

  const enquiryMessage = `Hello Chethan, I am interested in inquiring about ${name} (${category} category) at SMP Organic. Please share current nursery availability and pickup/delivery details.`;

  return (
    <div className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Plant Image / Awaiting Photo Frame */}
      <div style={{
        position: 'relative',
        height: '220px',
        backgroundColor: '#1E3A2B',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {!imageError ? (
          <img 
            src={image} 
            alt={name}
            onError={() => setImageError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy" 
          />
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            color: '#E8F5E9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <Sprout size={36} style={{ color: 'var(--color-gold)' }} />
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{name}</div>
            <div style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>
              {fallbackNotice || "Real nursery photo being added"}
            </div>
          </div>
        )}

        <div style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          color: 'var(--color-primary-dark)',
          fontWeight: 700,
          fontSize: '0.75rem',
          padding: '0.25rem 0.75rem',
          borderRadius: 'var(--radius-pill)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em'
        }}>
          {category}
        </div>

        <div style={{
          position: 'absolute',
          bottom: '0.75rem',
          right: '0.75rem',
          backgroundColor: availability.includes('In Stock') ? 'var(--color-primary-light)' : 'var(--color-accent)',
          color: '#FFFFFF',
          fontWeight: 600,
          fontSize: '0.75rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem'
        }}>
          <CheckCircle size={12} />
          <span>{availability}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem', fontFamily: 'var(--font-heading)' }}>
          {name}
        </h3>

        {variety && (
          <div style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.75rem' }}>
            Variety: {variety}
          </div>
        )}

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', flexGrow: 1, lineHeight: 1.5 }}>
          {description}
        </p>

        {/* Note on price/availability */}
        <div style={{
          padding: '0.75rem 1rem',
          backgroundColor: 'var(--color-bg-main)',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.25rem',
          fontSize: '0.875rem'
        }}>
          {price !== null ? (
            <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)', fontSize: '1.1rem' }}>
              ₹{price} <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--color-text-muted)' }}>per sapling</span>
            </div>
          ) : (
            <div style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', fontStyle: 'italic' }}>
              <Info size={14} style={{ color: 'var(--color-accent)' }} />
              <span>Contact Chethan for current availability & price.</span>
            </div>
          )}
        </div>

        {/* WhatsApp CTA linking to Chethan */}
        <WhatsAppButton 
          text="Contact for Plant Availability"
          message={enquiryMessage}
          variant="whatsapp"
          size="sm"
          className="w-full"
        />
      </div>

    </div>
  );
};

export default PlantCard;
