import React, { useState } from 'react';
import { Trees, Filter, Sprout, Search, Phone } from 'lucide-react';
import { nurseryPlants, plantCategories } from '../data/plants';
import { contacts } from '../data/business';
import PlantCard from '../components/PlantCard';
import WhatsAppButton from '../components/WhatsAppButton';

const NurseryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlants = nurseryPlants.filter((plant) => {
    const matchesCategory = selectedCategory === "All" || plant.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-gold)' }}>
              AGRICULTURAL PLANT NURSERY & CROPS
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Nursery & Vegetable Crops
          </h1>
          <p style={{ color: '#E2E8F0', fontSize: '1.05rem', maxWidth: '750px' }}>
            Supplying Coconut saplings, Arecanut nursery plants, and field vegetable crops (cucumber, tomato, bitter gourd) grown with organic soil nourishment.
          </p>
        </div>
      </section>

      {/* Catalogue & Filters */}
      <section className="section-padding">
        <div className="container">
          
          {/* Controls Bar: Category Filter & Search */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            backgroundColor: 'var(--color-bg-card)',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            
            {/* Category Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginRight: '0.5rem' }}>
                <Filter size={16} />
                <span>Categories:</span>
              </span>

              {plantCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.5rem 1.15rem',
                      borderRadius: 'var(--radius-pill)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 700 : 500,
                      backgroundColor: isActive ? 'var(--color-primary-dark)' : 'var(--color-bg-main)',
                      color: isActive ? '#FFFFFF' : 'var(--color-text-main)',
                      border: isActive ? '1px solid var(--color-primary-dark)' : '1px solid var(--color-border)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', width: '240px' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
              <input 
                type="text" 
                placeholder="Search plants or crops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.85rem 0.5rem 2.4rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

          </div>

          {/* Plant Grid */}
          {filteredPlants.length > 0 ? (
            <div className="grid-3" style={{ gap: '2rem' }}>
              {filteredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'var(--color-bg-card)', borderRadius: 'var(--radius-md)' }}>
              <Sprout size={48} style={{ color: 'var(--color-text-light)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No plants found in this category</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Try switching categories or contacting Chethan directly on WhatsApp for live nursery availability.
              </p>
              <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="btn btn-outline btn-sm">
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Nursery Enquiry Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-card-alt)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Check Live Nursery Availability & Pricing
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            We supply Coconut saplings, Arecanut plants, and seasonal vegetable crops. Contact Chethan directly on WhatsApp or phone for live nursery photos, batch availability, and farm pickup details.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <WhatsAppButton 
              text="Contact Chethan on WhatsApp"
              message="Hello Chethan, I am inquiring about current nursery plant availability (Coconut saplings, Arecanut plants, or vegetable crops) at SMP Organic."
              size="lg"
            />

            <a 
              href={contacts.main.telLink} 
              className="btn btn-outline btn-lg"
            >
              <Phone size={18} />
              <span>Call Chethan: {contacts.main.displayNumber}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NurseryPage;
