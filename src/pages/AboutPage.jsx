import React from 'react';
import { Sprout, Users, ShieldCheck, Phone, MessageCircle, Truck } from 'lucide-react';
import { businessInfo, contacts } from '../data/business';
import WhatsAppButton from '../components/WhatsAppButton';

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-gold)' }}>
              ABOUT SMP ORGANIC
            </span>
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Who We Are & What We Do
          </h1>
          <p style={{ color: '#E2E8F0', fontSize: '1.1rem', maxWidth: '750px' }}>
            Dedicated to natural soil enrichment with Super Gold Bio Enriched Organic Manure, nursery plant rearing, and practical farmer guidance.
          </p>
        </div>
      </section>

      {/* Main Story & Real Photo */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            
            <div>
              <span className="tag-badge tag-badge-green" style={{ marginBottom: '0.75rem' }}>
                ORGANIC AGRICULTURE BUSINESS
              </span>

              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>
                Nourishing Agricultural Soils Naturally
              </h2>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                <strong>SMP Organic</strong> is an agricultural business dedicated to producing high-grade <strong>Super Gold Bio Enriched Organic Manure</strong> and providing healthy nursery plant saplings to farmers and growers.
              </p>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Our manure is prepared by blending livestock manure (Cow manure, Hen manure, Sheep manure) with sugarcane pressmud and enrichment additives. The mixture undergoes natural aerobic decomposition for several months before screening, processing, and packaging into sealed 40 kg heavy-duty bags priced at ₹480 plus delivery charges.
              </p>

              <div style={{
                backgroundColor: 'var(--color-bg-card-alt)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                borderLeft: '4px solid var(--color-primary-light)',
                marginBottom: '2rem'
              }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                  🎯 Our Mission
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.5 }}>
                  "To supply dependable, biologically enriched organic manure and healthy saplings that restore soil organic carbon, enhance farm moisture retention, and help growers build sustainable yields naturally."
                </p>
              </div>

              {/* Verified Contact Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a 
                  href={contacts.main.telLink} 
                  className="btn btn-outline btn-sm"
                >
                  <Phone size={14} />
                  <span>General Enquiries: {contacts.main.name} ({contacts.main.displayNumber})</span>
                </a>

                <a 
                  href={contacts.orders.telLink} 
                  className="btn btn-primary btn-sm"
                >
                  <Truck size={14} />
                  <span>Orders: {contacts.orders.name} ({contacts.orders.displayNumber})</span>
                </a>
              </div>
            </div>

            {/* Real Farm Photograph */}
            <div>
              <div style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border)',
                backgroundColor: '#1E3A2B'
              }}>
                <img 
                  src="/images/smp-plantation-hero.jpg" 
                  alt="Real photograph of SMP Organic Super Gold in lush coconut and arecanut plantation" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-gold)' }}>
                    Thriving Plantation Soil Management
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#E2E8F0', marginTop: '0.25rem' }}>
                    Real photograph: Super Gold manure in our partner coconut & arecanut plantation with drip lines.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Community & Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-card-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">COMMUNITY & TRANSPARENCY</span>
            <h2 className="section-title">Built on Authentic Agricultural Values</h2>
            <p className="section-subtitle">
              Connecting with thousands of farmers across social media with transparent pricing and natural practices.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            <div className="card-base" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-subtle)',
                color: 'var(--color-primary-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <Sprout size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Organic Integrity
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Natural mixture of cow, hen, and sheep manure with sugarcane pressmud, aged for several months.
              </p>
            </div>

            <div className="card-base" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-subtle)',
                color: 'var(--color-primary-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <Users size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Farmer-First Guidance
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Field guidance for manure dosage, basin preparation, and seedling care from Chethan on WhatsApp.
              </p>
            </div>

            <div className="card-base" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-subtle)',
                color: 'var(--color-primary-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Transparent Pricing
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Standard 40 kg pack @ ₹480 (+ delivery charges). Clear delivery quotes calculated with Avinash.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
