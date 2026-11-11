import React from 'react';
import { Phone, Mail, MapPin, Clock, Truck, MessageCircle, ShieldCheck, UserCheck } from 'lucide-react';
import { businessInfo, contacts } from '../data/business';
import EnquiryForm from '../components/EnquiryForm';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactPage = () => {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-gold)' }}>
              VERIFIED CONTACT DIRECTORY
            </span>
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Contact SMP Organic
          </h1>
          <p style={{ color: '#E2E8F0', fontSize: '1.1rem', maxWidth: '750px' }}>
            Reach out directly to our verified contacts for Super Gold organic manure orders, nursery plant inquiries, farm delivery charges, or agriculture advice.
          </p>
        </div>
      </section>

      {/* Delivery Notice Card */}
      <section style={{ backgroundColor: 'var(--color-primary-subtle)', borderBottom: '1px solid rgba(46,125,50,0.15)', padding: '1.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <Truck size={28} style={{ color: 'var(--color-primary-light)' }} />
              <div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-heading)' }}>
                  Super Gold Organic Manure: 40 kg Bag @ ₹480 + Delivery Charges
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Delivery charges are additional based on location and order quantity. Contact Avinash for orders and delivery dispatch.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a 
                href={contacts.orders.telLink} 
                className="btn btn-primary btn-sm"
              >
                <Phone size={14} />
                <span>Call Avinash ({contacts.orders.displayNumber})</span>
              </a>

              <WhatsAppButton 
                text="WhatsApp Chethan"
                message="Hello Chethan, I would like to check delivery rates and availability for SMP Organic Super Gold 40 kg manure."
                size="sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            
            {/* Contact Cards */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Verified Contacts & Locations
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                
                {/* 1. Main Contact - Chethan */}
                <div className="card-base" style={{ padding: '1.5rem', borderLeft: '5px solid var(--color-whatsapp)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      color: 'var(--color-whatsapp-hover)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <UserCheck size={24} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <span className="tag-badge tag-badge-green" style={{ marginBottom: '0.35rem' }}>
                        MAIN CONTACT & WHATSAPP
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)' }}>
                        {contacts.main.name}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                        General inquiries, nursery plant availability & agriculture advice
                      </p>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <a 
                          href={contacts.main.telLink} 
                          className="btn btn-outline btn-sm"
                          style={{ padding: '0.4rem 0.85rem' }}
                        >
                          <Phone size={14} />
                          <span>Call: {contacts.main.displayNumber}</span>
                        </a>

                        <a 
                          href={contacts.main.whatsappLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-sm"
                          style={{ padding: '0.4rem 0.85rem' }}
                        >
                          <MessageCircle size={14} />
                          <span>WhatsApp Chethan</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Orders & Delivery - Avinash */}
                <div className="card-base" style={{ padding: '1.5rem', borderLeft: '5px solid var(--color-primary-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-subtle)',
                      color: 'var(--color-primary-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Truck size={24} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <span className="tag-badge tag-badge-orange" style={{ marginBottom: '0.35rem' }}>
                        ORDERS & DELIVERY DISPATCH
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)' }}>
                        {contacts.orders.name}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                        Order booking, bulk tractor/truck dispatch, and delivery charge calculations
                      </p>
                      
                      <a 
                        href={contacts.orders.telLink} 
                        className="btn btn-primary btn-sm"
                        style={{ padding: '0.4rem 0.85rem' }}
                      >
                        <Phone size={14} />
                        <span>Call Avinash: {contacts.orders.displayNumber}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="card-base" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Email Inquiries
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                      {businessInfo.email}
                    </div>
                  </div>
                </div>

                {/* Farm Location */}
                <div className="card-base" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Farm Location / Processing Unit
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                      {businessInfo.address}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="card-base" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Business Hours
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                      {businessInfo.businessHours}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Interactive Form routing to Chethan */}
            <div>
              <EnquiryForm defaultService="SMP Organic Super Gold Manure (40 kg)" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
