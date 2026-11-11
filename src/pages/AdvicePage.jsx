import React from 'react';
import { HelpCircle, Sprout, Trees, TreePine, Calendar, CheckCircle, Phone } from 'lucide-react';
import { adviceServices } from '../data/advice';
import { contacts } from '../data/business';
import EnquiryForm from '../components/EnquiryForm';
import WhatsAppButton from '../components/WhatsAppButton';

const iconMap = {
  Sprout: Sprout,
  Trees: Trees,
  TreePine: TreePine,
  Calendar: Calendar
};

const AdvicePage = () => {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-gold)' }}>
              FARMER SUPPORT & GUIDANCE
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Need Guidance for Your Farm?
          </h1>
          <p style={{ color: '#E2E8F0', fontSize: '1.05rem', maxWidth: '750px' }}>
            SMP Organic provides practical agriculture guidance to farmers on Super Gold organic manure dosage, soil preparation, and plantation sapling care.
          </p>
        </div>
      </section>

      {/* Advice Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">PRACTICAL GUIDANCE</span>
            <h2 className="section-title">Agriculture Guidance Topics</h2>
            <p className="section-subtitle">
              Sharing field-tested experiences with local growers for sustainable farm productivity.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {adviceServices.map((service) => {
              const IconComp = iconMap[service.iconName] || Sprout;
              return (
                <div key={service.id} className="card-base" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-primary-subtle)',
                      color: 'var(--color-primary-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComp size={28} />
                    </div>

                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                        {service.title}
                      </h3>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                        {service.shortDesc}
                      </p>
                      <p style={{ color: 'var(--color-text-main)', fontSize: '0.875rem', backgroundColor: 'var(--color-bg-main)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                        💡 <strong>Details:</strong> {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Question Form & WhatsApp Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-card-alt)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Description */}
            <div>
              <span className="tag-badge tag-badge-green" style={{ marginBottom: '1rem' }}>
                ASK SMP ORGANIC
              </span>

              <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                Ask Your Farming Question
              </h2>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Have a question regarding manure dosage for your crop, soil moisture retention, or seedling transplantation? Connect directly with Chethan on WhatsApp for practical guidance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-primary-light)' }} />
                  <span>Practical dosage guidance for Arecanut, Coconut & crops</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-primary-light)' }} />
                  <span>Direct connection with Chethan on WhatsApp</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-primary-light)' }} />
                  <span>Field guidance for local crop conditions</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <WhatsAppButton 
                  text="Ask Chethan on WhatsApp"
                  message="Hello Chethan, I need agriculture advice regarding my crop and organic manure preparation."
                  size="lg"
                />

                <a 
                  href={contacts.main.telLink} 
                  className="btn btn-outline btn-lg"
                >
                  <Phone size={18} />
                  <span>Call: {contacts.main.displayNumber}</span>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <EnquiryForm defaultService="Agriculture Advice" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvicePage;
