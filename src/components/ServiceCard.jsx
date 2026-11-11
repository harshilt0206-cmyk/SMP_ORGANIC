import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Trees, HelpCircle, PhoneCall } from 'lucide-react';

const iconMap = {
  Sprout: Sprout,
  Trees: Trees,
  HelpCircle: HelpCircle,
  PhoneCall: PhoneCall
};

const ServiceCard = ({ title, description, linkTo, linkText = "Learn More", iconName = "Sprout", badgeText }) => {
  const IconComponent = iconMap[iconName] || Sprout;

  return (
    <div className="card-base" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {badgeText && (
        <span className="tag-badge tag-badge-green" style={{ width: 'fit-content', marginBottom: '1rem' }}>
          {badgeText}
        </span>
      )}

      <div style={{
        width: '54px',
        height: '54px',
        borderRadius: '12px',
        backgroundColor: 'var(--color-primary-subtle)',
        color: 'var(--color-primary-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem'
      }}>
        <IconComponent size={28} />
      </div>

      <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
        {title}
      </h3>

      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem', flexGrow: 1, lineHeight: 1.6 }}>
        {description}
      </p>

      <Link 
        to={linkTo} 
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontWeight: 600,
          color: 'var(--color-primary-light)',
          fontSize: '0.95rem',
          marginTop: 'auto'
        }}
      >
        <span>{linkText}</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
