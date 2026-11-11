import React, { useEffect } from 'react';
import { X, Tag } from 'lucide-react';

const GalleryModal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease forwards'
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {/* Enlarged Image */}
        <div style={{ maxHeight: '70vh', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* Info */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="tag-badge tag-badge-green">
              {item.category}
            </span>
          </div>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>
            {item.title}
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
