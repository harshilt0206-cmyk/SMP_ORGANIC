import React, { useState } from 'react';
import { Play, Film, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/business';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { processVideo } = businessInfo;

  return (
    <div className="card-base" style={{ padding: '2rem', backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF' }}>
      
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '0.35rem 1rem',
          borderRadius: 'var(--radius-pill)',
          fontSize: '0.85rem',
          color: 'var(--color-gold)',
          fontWeight: 600,
          marginBottom: '0.75rem'
        }}>
          <Film size={16} />
          <span>FACTORY & FARM JOURNEY</span>
        </div>

        <h3 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
          {processVideo.title}
        </h3>

        <p style={{ color: '#CBD5E0', fontSize: '1rem', lineHeight: 1.6 }}>
          {processVideo.description}
        </p>
      </div>

      {/* Video Container */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingTop: '56.25%', /* 16:9 Aspect Ratio */
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          backgroundColor: '#000000',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}
      >
        {!isPlaying ? (
          <div 
            onClick={() => setIsPlaying(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("${processVideo.posterImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 0 30px rgba(200, 109, 81, 0.6)',
              transition: 'transform 0.3s ease',
              marginBottom: '1rem'
            }}>
              <Play size={36} style={{ marginLeft: '4px' }} />
            </div>
            
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.04em' }}>
              Click to Play Preparation Journey
            </span>
          </div>
        ) : (
          <iframe
            src={`${processVideo.embedUrl}?autoplay=1`}
            title={processVideo.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

    </div>
  );
};

export default VideoPlayer;
