import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/business';

/**
 * Reusable WhatsApp CTA Button
 * Opens WhatsApp with pre-filled message text.
 */
const WhatsAppButton = ({ 
  message = "Hello SMP Organic, I would like to inquire about your products and services.", 
  text = "Enquire on WhatsApp", 
  variant = "whatsapp", // 'whatsapp' | 'primary' | 'outline'
  className = "",
  size = "md"
}) => {
  const handleWhatsAppClick = () => {
    const rawNumber = businessInfo.whatsappNumber.replace(/[^0-9]/g, '');
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${rawNumber}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return 'btn-primary';
      case 'outline': return 'btn-outline';
      case 'accent': return 'btn-accent';
      default: return 'btn-whatsapp';
    }
  };

  const getSizeClass = () => {
    if (size === 'sm') return 'btn-sm';
    if (size === 'lg') return 'btn-lg';
    return '';
  };

  return (
    <button 
      onClick={handleWhatsAppClick} 
      className={`btn ${getVariantClass()} ${getSizeClass()} ${className}`}
      title="Chat with SMP Organic on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" style={{ minWidth: '20px' }} />
      <span>{text}</span>
    </button>
  );
};

export default WhatsAppButton;
