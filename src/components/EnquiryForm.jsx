import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { businessInfo, contacts } from '../data/business';

const EnquiryForm = ({ defaultService = "Organic Manure" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    crop: '',
    serviceType: defaultService,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const serviceOptions = [
    "SMP Organic Super Gold Manure (40 kg)",
    "Coconut Saplings",
    "Arecanut Plants",
    "Vegetable Plants & Crops",
    "Agriculture Advice",
    "Bulk Orders & Delivery"
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone)) {
      errs.phone = "Enter a valid phone number";
    }
    if (!formData.location.trim()) errs.location = "Location/District is required";
    if (!formData.message.trim()) errs.message = "Please write your query or requirement";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    // Optional API Submission to Python FastAPI Backend if running
    try {
      await fetch('http://localhost:8000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          crop: formData.crop,
          service_type: formData.serviceType,
          message: formData.message
        })
      });
    } catch (apiErr) {
      console.log('Backend notification:', apiErr);
    }

    // Format pre-filled WhatsApp message directed to Chethan (+91 7892760379)
    const formattedMsg = `Hello Chethan (SMP Organic), I have an enquiry:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Location:* ${formData.location}
*Interested In / Service:* ${formData.serviceType}
*Crop Name:* ${formData.crop || 'Not specified'}
*Enquiry Details:* ${formData.message}`;

    const rawPhone = contacts.main.whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(formattedMsg)}`;

    setSubmitting(false);
    setSubmitted(true);

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card-base" style={{ padding: '2rem' }}>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-subtle)',
            color: 'var(--color-primary-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto'
          }}>
            <CheckCircle2 size={36} />
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
            Enquiry Prepared for WhatsApp!
          </h3>

          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            WhatsApp was opened to send your enquiry directly to Chethan ({contacts.main.displayNumber}). If it did not open automatically, click below:
          </p>

          <a 
            href={contacts.main.whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ marginBottom: '1rem' }}
          >
            <MessageCircle size={18} />
            <span>Open WhatsApp Chat with Chethan</span>
          </a>

          <div>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn btn-outline btn-sm"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          
          <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Send an Enquiry to Chethan
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            
            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Your Name *
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.name ? '1px solid #E53E3E' : '1px solid var(--color-border)',
                  outline: 'none'
                }}
              />
              {errors.name && <span style={{ color: '#E53E3E', fontSize: '0.75rem' }}>{errors.name}</span>}
            </div>

            {/* Phone */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Phone / Mobile Number *
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.phone ? '1px solid #E53E3E' : '1px solid var(--color-border)',
                  outline: 'none'
                }}
              />
              {errors.phone && <span style={{ color: '#E53E3E', fontSize: '0.75rem' }}>{errors.phone}</span>}
            </div>

          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            
            {/* Location */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Farm Location / Village / District *
              </label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Mandya / Tumakuru / Hassan"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.location ? '1px solid #E53E3E' : '1px solid var(--color-border)',
                  outline: 'none'
                }}
              />
              {errors.location && <span style={{ color: '#E53E3E', fontSize: '0.75rem' }}>{errors.location}</span>}
            </div>

            {/* Service Type */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Interested In
              </label>
              <select 
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF',
                  outline: 'none'
                }}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Crop */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              Crop Name (Optional)
            </label>
            <input 
              type="text" 
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              placeholder="e.g. Arecanut, Coconut, Sugarcane, Vegetables"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                outline: 'none'
              }}
            />
          </div>

          {/* Question / Message */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              Your Question or Quantity Requirement *
            </label>
            <textarea 
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. I need 25 bags of 40 kg Super Gold organic manure for my arecanut garden. Please let me know delivery availability."
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: errors.message ? '1px solid #E53E3E' : '1px solid var(--color-border)',
                outline: 'none',
                resize: 'vertical'
              }}
            />
            {errors.message && <span style={{ color: '#E53E3E', fontSize: '0.75rem' }}>{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            disabled={submitting}
            className="btn btn-whatsapp w-full"
            style={{ width: '100%' }}
          >
            <MessageCircle size={20} />
            <span>Send Enquiry to Chethan on WhatsApp</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default EnquiryForm;
