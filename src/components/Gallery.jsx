import React, { useState } from 'react';
import { Eye, Filter } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/gallery';
import GalleryModal from './GalleryModal';

/**
 * Gallery Component
 * Reusable image gallery with category filters and lightbox view.
 *
 * Props:
 * - defaultCategory: string (defaults to "All")
 * - showFilters: boolean (default true)
 * - limit: number (optional, limit displayed count)
 */
const Gallery = ({ defaultCategory = "All", showFilters = true, limit = null }) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filtered = galleryImages.filter((img) => {
    return selectedCategory === "All" || img.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const displayedImages = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {/* Category Filter Buttons */}
      {showFilters && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginRight: '0.5rem' }}>
            <Filter size={16} />
            <span>Category:</span>
          </span>

          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--color-primary-dark)' : 'var(--color-bg-card)',
                  color: isActive ? '#FFFFFF' : 'var(--color-text-main)',
                  border: isActive ? '1px solid var(--color-primary-dark)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Responsive Photo Grid */}
      <div className="grid-3" style={{ gap: '1.75rem' }}>
        {displayedImages.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="card-base"
            style={{
              position: 'relative',
              height: '320px',
              overflow: 'hidden',
              cursor: 'pointer',
              borderRadius: 'var(--radius-md)',
              backgroundColor: '#1E3A2B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={item.image}
              alt={item.alt || item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 40%',
                transition: 'transform 0.4s ease'
              }}
              loading="lazy"
            />

            {/* Gradient Overlay and Title */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(to top, rgba(15, 30, 22, 0.95) 0%, rgba(15, 30, 22, 0.4) 50%, transparent 100%)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              color: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <span className="tag-badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'var(--color-gold)', fontSize: '0.7rem' }}>
                  {item.category}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#68D391', fontWeight: 600 }}>
                  ✓ Real Photo
                </span>
              </div>

              <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: '#CBD5E0' }}>
                <Eye size={14} />
                <span>Click to view full image</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <GalleryModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
      )}
    </div>
  );
};

export default Gallery;
