import React from 'react';
import { Star, MapPin, User, Quote } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const { name, location, crop, review: reviewText, rating, avatar, date } = review;

  return (
    <div className="card-base" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
      
      <Quote size={32} style={{ color: 'var(--color-primary-subtle)', position: 'absolute', top: '1.25rem', right: '1.25rem' }} />

      {/* Rating Stars */}
      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < rating ? 'var(--color-gold)' : 'none'} 
            stroke={i < rating ? 'var(--color-gold)' : 'var(--color-border)'} 
          />
        ))}
      </div>

      {/* Review Body */}
      <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem', fontStyle: 'italic' }}>
        "{reviewText}"
      </p>

      {/* Customer Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
        {avatar ? (
          <img 
            src={avatar} 
            alt={name} 
            style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-subtle)',
            color: 'var(--color-primary-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={24} />
          </div>
        )}

        <div>
          <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)' }}>
            {name}
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <MapPin size={12} style={{ color: 'var(--color-accent)' }} />
            <span>{location}</span>
            {crop && <span style={{ fontWeight: 600 }}>• {crop}</span>}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReviewCard;
