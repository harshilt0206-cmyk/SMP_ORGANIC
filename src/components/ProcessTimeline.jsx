import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Sparkles, Sprout, Filter, PackageCheck, Award } from 'lucide-react';
import { mainProduct } from '../data/products';

const stepIcons = [Sprout, Filter, Sparkles, Sprout, Filter, PackageCheck, Award];

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{ padding: '1rem 0' }}>
      
      {/* Interactive Step Switcher for Desktop */}
      <div 
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '0.75rem', 
          paddingBottom: '1.5rem',
          marginBottom: '2rem',
          scrollbarWidth: 'thin'
        }}
      >
        {mainProduct.preparationSteps.map((stepItem, index) => {
          const isActive = index === activeStep;
          return (
            <button
              key={stepItem.step}
              onClick={() => setActiveStep(index)}
              style={{
                flex: '0 0 auto',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: isActive ? 'var(--color-primary-dark)' : 'var(--color-bg-card)',
                color: isActive ? '#FFFFFF' : 'var(--color-text-main)',
                border: isActive ? '2px solid var(--color-primary-dark)' : '1px solid var(--color-border)',
                fontFamily: 'var(--font-heading)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: isActive ? 'var(--color-gold)' : 'var(--color-primary-subtle)',
                color: isActive ? 'var(--color-primary-dark)' : 'var(--color-primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 800
              }}>
                {stepItem.step}
              </span>
              <span>Step {stepItem.step}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Active Step Showcase */}
      <div 
        className="card-base animate-fade-in"
        style={{
          padding: '2.5rem',
          backgroundColor: 'var(--color-bg-card)',
          borderLeft: '6px solid var(--color-primary-light)',
          marginBottom: '3rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span className="tag-badge tag-badge-green">
            Stage {mainProduct.preparationSteps[activeStep].step} of 7
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600 }}>
            Natural Aerobic Preparation
          </span>
        </div>

        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
          {mainProduct.preparationSteps[activeStep].title}
        </h3>

        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '800px' }}>
          {mainProduct.preparationSteps[activeStep].description}
        </p>
      </div>

      {/* Full 7-Step Grid List */}
      <div className="grid-3" style={{ gap: '1.25rem' }}>
        {mainProduct.preparationSteps.map((stepItem, index) => {
          const isSelected = index === activeStep;
          return (
            <div 
              key={stepItem.step}
              onClick={() => setActiveStep(index)}
              className="card-base"
              style={{
                padding: '1.5rem',
                cursor: 'pointer',
                border: isSelected ? '2px solid var(--color-primary-light)' : '1px solid var(--color-border)',
                backgroundColor: isSelected ? 'var(--color-primary-subtle)' : 'var(--color-bg-card)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: isSelected ? 'var(--color-primary-light)' : 'var(--color-accent)'
                }}>
                  Step 0{stepItem.step}
                </span>
                {isSelected && <CheckCircle2 size={20} style={{ color: 'var(--color-primary-light)' }} />}
              </div>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                {stepItem.title}
              </h4>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                {stepItem.description}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ProcessTimeline;
