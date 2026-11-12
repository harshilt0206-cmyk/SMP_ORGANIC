import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Truck, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { mainProduct } from '../data/products';
import { contacts } from '../data/business';
import WhatsAppButton from './WhatsAppButton';

/**
 * ProductCard Component
 * Reusable card for agricultural products (manure, plants, etc.)
 * Easily maintained: receives product props or defaults to mainProduct.
 */
const ProductCard = ({ product = mainProduct, showRating = true, compact = false }) => {
  return (
    <div 
      className="card-base"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        border: '1px solid var(--color-border)'
      }}
    >
      {/* Product Image Container */}
      <div style={{
        position: 'relative',
        height: compact ? '220px' : '280px',
        backgroundColor: '#1E3A2B',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={product.image || product.galleryImages?.[0]?.url || '/images/smp-super-gold-manure-product.jpg'} 
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          <span style={{
            backgroundColor: 'var(--color-primary-dark)',
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '0.3rem 0.65rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            {product.packSize || '40 kg Pack'}
          </span>
        </div>

        {showRating && (
          <div style={{
            position: 'absolute',
            bottom: '0.75rem',
            right: '0.75rem',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: '#FBBF24',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '0.3rem 0.65rem',
            borderRadius: 'var(--radius-pill)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}>
            <Star size={13} fill="#FBBF24" color="#FBBF24" />
            <span>4.9 / 5.0</span>
          </div>
        )}
      </div>

      {/* Product Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--color-primary-light)', fontWeight: 600, marginBottom: '0.35rem' }}>
          {product.kannadaName || 'ಜೈವಿಕ ಸಮೃದ್ಧ ಸಾವಯವ ಗೊಬ್ಬರ'}
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
          {product.name}
        </h3>

        {/* Pricing */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.5rem',
          margin: '0.75rem 0 1rem 0',
          padding: '0.75rem 1rem',
          backgroundColor: 'var(--color-primary-subtle)',
          borderRadius: 'var(--radius-sm)'
        }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-dark)', fontFamily: 'var(--font-heading)' }}>
            ₹{product.price}
          </span>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: 600 }}>
            {product.priceNote || '+ delivery charges'}
          </span>
        </div>

        {/* Short description */}
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
          lineHeight: 1.5,
          marginBottom: '1.25rem',
          flexGrow: 1
        }}>
          {product.description?.slice(0, 140)}...
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: 'auto' }}>
          <a
            href={contacts.orders.telLink}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
          >
            <Phone size={16} />
            <span>Call Avinash ({contacts.orders.displayPhone})</span>
          </a>

          <WhatsAppButton 
            text="WhatsApp Chethan"
            message={`Hello Chethan, I am interested in ordering ${product.name} (${product.packSize} @ ₹${product.price} ${product.priceNote}).`}
            variant="outline"
            size="md"
            className="w-full"
          />

          <Link 
            to="/organic-manure"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--color-primary-dark)',
              padding: '0.4rem 0',
              textDecoration: 'none',
              marginTop: '0.25rem'
            }}
          >
            <span>View Full Details & Customer Ratings</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
