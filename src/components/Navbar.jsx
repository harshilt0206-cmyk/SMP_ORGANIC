import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout, Phone } from 'lucide-react';
import { businessInfo, contacts } from '../data/business';
import WhatsAppButton from './WhatsAppButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Organic Manure', path: '/organic-manure' },
    { name: 'Nursery & Crops', path: '/nursery' },
    { name: 'Agriculture Advice', path: '/agriculture-advice' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : '0 2px 10px rgba(0,0,0,0.03)',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '82px' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 10px rgba(39, 77, 55, 0.25)'
          }}>
            <Sprout size={24} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.45rem',
              color: 'var(--color-primary-dark)',
              letterSpacing: '-0.02em',
              display: 'block',
              lineHeight: 1
            }}>
              SMP ORGANIC
            </span>
            <span style={{
              fontSize: '0.7rem',
              color: 'var(--color-accent)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              Super Gold Bio Enriched Manure
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-heading)',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-primary-light)' : 'var(--color-text-main)',
                fontSize: '0.925rem',
                position: 'relative',
                padding: '0.4rem 0',
                transition: 'color 0.2s ease',
                borderBottom: isActive ? '2px solid var(--color-primary-light)' : '2px solid transparent'
              })}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-cta">
          {/* Quick Call Link to Chethan */}
          <a 
            href={contacts.main.telLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-primary-dark)',
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg-main)'
            }}
            title="Call Chethan for enquiries"
          >
            <Phone size={14} style={{ color: 'var(--color-primary-light)' }} />
            <span>Call: {contacts.main.displayNumber}</span>
          </a>

          <WhatsAppButton 
            text="WhatsApp Us"
            message="Hello Chethan, I am interested in SMP Organic Super Gold manure and nursery plants."
            size="sm"
          />
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '8px',
            backgroundColor: 'var(--color-primary-subtle)',
            color: 'var(--color-primary-dark)'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Animated Nav Drawer */}
      {isOpen && (
        <div 
          className="mobile-drawer animate-fade-in"
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid var(--color-border)',
            padding: '1.25rem 1.5rem 2rem 1.5rem',
            boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-heading)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '1.05rem',
                  color: isActive ? 'var(--color-primary-light)' : 'var(--color-text-main)',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  backgroundColor: isActive ? 'var(--color-primary-subtle)' : 'transparent',
                  display: 'block'
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a 
              href={contacts.main.telLink} 
              className="btn btn-outline btn-sm w-full"
              style={{ justifyContent: 'center' }}
            >
              <Phone size={16} />
              <span>Call Chethan: {contacts.main.displayNumber}</span>
            </a>

            <a 
              href={contacts.orders.telLink} 
              className="btn btn-outline btn-sm w-full"
              style={{ justifyContent: 'center' }}
            >
              <Phone size={16} />
              <span>Orders (Avinash): {contacts.orders.displayNumber}</span>
            </a>

            <WhatsAppButton 
              text="WhatsApp Chethan"
              message="Hello Chethan, I would like to inquire about SMP Organic Super Gold manure and nursery plants."
              className="w-full"
              size="md"
            />
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Navbar */}
      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
        @media (max-width: 1079px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
