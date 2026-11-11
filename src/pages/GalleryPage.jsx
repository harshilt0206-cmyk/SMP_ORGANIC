import React, { useState } from 'react';
import { Eye, Filter, Image as ImageIcon, Phone, CheckCircle2 } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/gallery';
import { contacts } from '../data/business';
import GalleryModal from '../components/GalleryModal';
import WhatsAppButton from '../components/WhatsAppButton';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredImages = galleryImages.filter((img) => {
    return selectedCategory === "All" || img.category.toLowerCase() === selectedCategory.toLowerCase();
  });

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
          
          {/* Category Filters */}
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

          {/* Genuine Images Grid */}
          <div className="grid-3" style={{ gap: '1.75rem' }}>
            {filteredImages.map((item) => (
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

                {/* Overlay Card on Bottom */}
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

      {/* Lightbox Modal */}
      {activeModalItem && (
        <GalleryModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
      )}
    </div>
  );
};

export default GalleryPage;
