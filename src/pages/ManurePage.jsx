import React, { useState } from 'react';
import { ShieldCheck, Truck, CheckCircle2, Info, Eye, ArrowRight, Phone } from 'lucide-react';
import { mainProduct } from '../data/products';
import { businessInfo, contacts } from '../data/business';
import ProcessTimeline from '../components/ProcessTimeline';
import VideoPlayer from '../components/VideoPlayer';
import RatingComponent from '../components/RatingComponent';
import WhatsAppButton from '../components/WhatsAppButton';
import GalleryModal from '../components/GalleryModal';

const ManurePage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalItem, setModalItem] = useState(null);

  const activeImage = mainProduct.galleryImages[selectedImageIndex] || mainProduct.galleryImages[0];

  const openLightbox = (imgObj) => {
    setModalItem({
      image: imgObj.url,
      title: imgObj.title || mainProduct.name,
      category: "Organic Manure",
      caption: imgObj.caption || "Genuine photograph of SMP Organic Super Gold packaging and compost."
    });
  };

  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-gold)' }}>
              GENUINE PRODUCT SPECIFICATIONS
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#FFFFFF', marginBottom: '0.5rem' }}>
            {mainProduct.name}
          </h1>
          <div style={{ fontSize: '1.2rem', color: '#81C784', fontWeight: 600, marginBottom: '0.75rem' }}>
            {mainProduct.kannadaName}
          </div>
          <p style={{ color: '#E2E8F0', fontSize: '1.05rem', maxWidth: '750px' }}>
            Enriched organic compost prepared through multi-month natural aerobic decomposition for healthy soil texture, moisture retention, and sustainable crop growth.
          </p>
        </div>
      </section>

      {/* Product Overview Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: '3rem' }}>
            
            {/* Left: Product Photo Gallery with Real Images */}
            <div>
              <div 
                onClick={() => openLightbox(activeImage)}
                style={{
                  position: 'relative',
                  height: '460px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#1E3A2B',
                  marginBottom: '1rem',
                  cursor: 'pointer',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={activeImage.url} 
                  alt={activeImage.title}
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
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  REAL PRODUCT PHOTOGRAPHY
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(0,0,0,0.75)',
                  color: '#FFFFFF',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Eye size={14} />
                  <span>Click to Enlarge</span>
                </div>
              </div>

              {/* Gallery Thumbnails of Real Photos */}
              <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {mainProduct.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    style={{
                      width: '84px',
                      height: '84px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: idx === selectedImageIndex 
                        ? '3px solid var(--color-primary-light)' 
                        : '2px solid transparent',
                      cursor: 'pointer',
                      flexShrink: 0,
                      backgroundColor: '#E5E7EB',
                      padding: 0
                    }}
                    title={img.title}
                  >
                    <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>

              <div style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                Showing: {activeImage.caption}
              </div>
            </div>

            {/* Right: Product Details, Pricing & Verified Order/Enquiry CTAs */}
            <div>
              <span className="tag-badge tag-badge-green" style={{ marginBottom: '1rem' }}>
                Natural Aerobic Compost
              </span>

              <h2 style={{ fontSize: '2.1rem', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                {mainProduct.name}
              </h2>

              {/* Price */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
                padding: '1.25rem',
                backgroundColor: 'var(--color-primary-subtle)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                border: '1px solid rgba(46, 125, 50, 0.2)'
              }}>
                <span style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--color-primary-dark)', fontFamily: 'var(--font-heading)' }}>
                  ₹{mainProduct.price}
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent)' }}>
                  {mainProduct.priceNote}
                </span>
                <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>
                  Pack Size: <strong>{mainProduct.packSize} Bag</strong>
                </span>
              </div>

              {/* Delivery Disclaimer */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <Truck size={20} style={{ color: 'var(--color-accent)', minWidth: '20px', marginTop: '2px' }} />
                <span>{mainProduct.deliveryDisclaimer}</span>
              </div>

              {/* Intro Description */}
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                {mainProduct.description}
              </p>

              {/* Raw Materials Composition List */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Natural Raw Materials & Ingredients Mixture:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {businessInfo.rawMaterials.map((mat, i) => (
                    <div key={i} style={{ backgroundColor: 'var(--color-bg-card-alt)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-dark)' }}>
                        ✓ {mat.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                        {mat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Orders linked to Avinash, WhatsApp linked to Chethan */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                
                {/* Call for Orders button linked to Avinash */}
                <a 
                  href={contacts.orders.telLink} 
                  className="btn btn-primary btn-lg"
                  style={{ flexGrow: 1 }}
                  title="Call Avinash for orders and delivery details"
                >
                  <Phone size={20} />
                  <span>Call for Orders: {contacts.orders.name}</span>
                </a>

                {/* WhatsApp Enquiry button linked to Chethan */}
                <WhatsAppButton 
                  text="WhatsApp Enquiry (Chethan)"
                  message={`Hello Chethan, I would like to order/inquire about SMP Organic Super Gold 40 kg manure priced at ₹480 + delivery charges.`}
                  size="lg"
                  variant="whatsapp"
                  className="w-full"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Product Benefits Section (Scientifically Reasonable Only) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-card-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">SOIL HEALTH BENEFITS</span>
            <h2 className="section-title">Why Super Gold Organic Manure Benefits Your Soil</h2>
            <p className="section-subtitle">
              Authentic agronomic benefits focused on natural soil structure enrichment and organic carbon replenishment.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {businessInfo.manureBenefits.map((benefit, idx) => (
              <div key={idx} className="card-base" style={{ padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-subtle)',
                  color: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>
                    {benefit}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    Continuous organic manure application enhances microbial population and restores long-term farm fertility.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Timeline */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">PREPARATION JOURNEY</span>
            <h2 className="section-title">Step-by-Step Manure Preparation</h2>
            <p className="section-subtitle">
              From raw material blending to multi-month aerobic maturation and hygienic 40 kg packaging.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Customer Product Ratings & Reviews */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-card-alt)' }}>
        <div className="container">
          <RatingComponent 
            productId={mainProduct.id} 
            productName={mainProduct.name} 
          />
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding" style={{ backgroundColor: '#1A2A20' }}>
        <div className="container">
          <VideoPlayer />
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalItem && (
        <GalleryModal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </div>
  );
};

export default ManurePage;
