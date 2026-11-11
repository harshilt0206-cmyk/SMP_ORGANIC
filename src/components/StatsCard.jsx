import React from 'react';
import { Users, Share2, ThumbsUp, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/business';

const StatsCard = () => {
  const { socialStats, socialLinks } = businessInfo;

  return (
    <div 
      className="card-base"
      style={{
        padding: '3rem 2rem',
        backgroundColor: 'var(--color-primary-dark)',
        color: '#FFFFFF',
        backgroundImage: 'radial-gradient(circle at top right, rgba(46, 125, 50, 0.4), transparent 60%)'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        <span className="tag-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
          AGRICULTURE NETWORK
        </span>
        <h2 style={{ fontSize: '2.25rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
          Join the SMP Organic Community
        </h2>
        <p style={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.6 }}>
          We connect thousands of farmers and agricultural enthusiasts across social media to exchange practical farming experience and guidance.
        </p>
      </div>

      <div className="grid-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
        
        {/* Stat 1 */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(24, 119, 242, 0.2)',
            color: '#60A5FA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem auto'
          }}>
            <Users size={28} />
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#FFFFFF', lineHeight: 1 }}>
            {socialStats.facebookCommunity}
          </div>
          <div style={{ fontSize: '1rem', color: '#90CDF4', fontWeight: 600, marginTop: '0.5rem', marginBottom: '0.25rem' }}>
            Facebook Group Members
          </div>
          <div style={{ fontSize: '0.825rem', color: '#A0AEC0' }}>
            Active farming discussions
          </div>
        </div>

        {/* Stat 2 */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(228, 64, 95, 0.2)',
            color: '#F472B6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem auto'
          }}>
            <Share2 size={28} />
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#FFFFFF', lineHeight: 1 }}>
            {socialStats.agricultureFollowers}
          </div>
          <div style={{ fontSize: '1rem', color: '#FBB6CE', fontWeight: 600, marginTop: '0.5rem', marginBottom: '0.25rem' }}>
            Social Media Followers
          </div>
          <div style={{ fontSize: '0.825rem', color: '#A0AEC0' }}>
            Tips & updates community
          </div>
        </div>

        {/* Stat 3 */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(37, 211, 102, 0.2)',
            color: '#4ADE80',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem auto'
          }}>
            <MessageSquare size={28} />
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#FFFFFF', lineHeight: 1 }}>
            {socialStats.happyFarmers}
          </div>
          <div style={{ fontSize: '1rem', color: '#68D391', fontWeight: 600, marginTop: '0.5rem', marginBottom: '0.25rem' }}>
            Farmers Supported
          </div>
          <div style={{ fontSize: '0.825rem', color: '#A0AEC0' }}>
            Organic manure & guidance
          </div>
        </div>

      </div>

      {/* Direct Social Links */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        <a 
          href={socialLinks.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
          style={{ backgroundColor: 'var(--color-facebook)', color: '#FFF' }}
        >
          <span>Join us on Facebook</span>
        </a>
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
          style={{ backgroundColor: 'var(--color-instagram)', color: '#FFF' }}
        >
          <span>Follow us on Instagram</span>
        </a>
        <a 
          href={`https://wa.me/${businessInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <span>Chat with us on WhatsApp</span>
        </a>
      </div>

    </div>
  );
};

export default StatsCard;
