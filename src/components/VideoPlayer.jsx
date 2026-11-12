import React, { useState } from 'react';
import { Play, Film, ExternalLink, AlertCircle, RefreshCw } from 'lucide-react';
import { videos, getYouTubeInfo } from '../data/videos';

/**
 * Reusable VideoPlayer Component
 * 
 * Supports:
 * - Any YouTube URL format (Watch, Shorts, youtu.be, Embed) configured in `src/data/videos.js`
 * - Click-to-play with custom poster or automatic YouTube thumbnail
 * - Fallback "Watch on YouTube" button if embedding is restricted
 * - Graceful error message if URL is missing or invalid
 */
const VideoPlayer = ({ video = videos[0] }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube video information (supports youtubeUrl or legacy embedUrl)
  const targetUrl = video?.youtubeUrl || video?.embedUrl || '';
  const videoInfo = getYouTubeInfo(targetUrl);

  // Determine thumbnail poster (custom thumbnail or auto YouTube HQ thumbnail)
  const posterImage = video?.thumbnail || videoInfo?.defaultThumbnail || '/images/smp-manure-packing-stock.jpg';

  return (
    <div className="card-base" style={{ padding: '2rem', backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF' }}>
      
      {/* Video Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2rem auto' }}>
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
          <span>FARM & PREPARATION JOURNEY</span>
        </div>

        <h3 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
          {video?.title || "See How SMP Organic Manure Is Prepared"}
        </h3>

        <p style={{ color: '#CBD5E0', fontSize: '1rem', lineHeight: 1.6 }}>
          {video?.description || "Take a visual journey through our raw material collection, enrichment, natural maturation, and packaging process."}
        </p>
      </div>

      {/* Video Player Container */}
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
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {!isPlaying ? (
          // Poster with Play Overlay
          <div 
            onClick={() => setIsPlaying(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url("${posterImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease'
            }}
            title="Click to play video"
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
              boxShadow: '0 0 30px rgba(200, 109, 81, 0.7)',
              transition: 'transform 0.3s ease',
              marginBottom: '1rem'
            }}>
              <Play size={36} style={{ marginLeft: '4px' }} />
            </div>
            
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.04em', color: '#FFFFFF', textAlign: 'center', padding: '0 1rem' }}>
              Click to Play Preparation Journey
            </span>
            <span style={{ fontSize: '0.8rem', color: '#E2E8F0', marginTop: '0.35rem' }}>
              YouTube Video
            </span>
          </div>
        ) : videoInfo ? (
          // Active YouTube Iframe Embed
          <iframe
            src={videoInfo.embedUrl}
            title={video?.title || "SMP Organic Video"}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          // Fallback if URL cannot be parsed
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#1A2A20',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            color: '#E2E8F0'
          }}>
            <AlertCircle size={44} style={{ color: 'var(--color-gold)', marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#FFFFFF' }}>
              Video Link Needs Attention
            </h4>
            <p style={{ maxWidth: '500px', fontSize: '0.9rem', color: '#CBD5E0', marginBottom: '1.25rem' }}>
              Please provide a valid YouTube link (e.g. watch, shorts, or youtu.be URL) in <code>src/data/videos.js</code>.
            </p>
            {targetUrl && (
              <a 
                href={targetUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}
              >
                <ExternalLink size={14} />
                <span>Try Opening Link Directly</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Bottom Controls / External Link */}
      <div style={{
        maxWidth: '960px',
        margin: '1rem auto 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        fontSize: '0.85rem',
        color: '#A0AEC0',
        padding: '0 0.5rem'
      }}>
        {videoInfo ? (
          <a 
            href={videoInfo.watchUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-gold)',
              fontWeight: 600,
              transition: 'color 0.2s ease'
            }}
          >
            <span>Having trouble playing? Watch directly on YouTube</span>
            <ExternalLink size={14} />
          </a>
        ) : (
          <span>Easily update this video anytime in <code>src/data/videos.js</code></span>
        )}

        {isPlaying && (
          <button
            onClick={() => setIsPlaying(false)}
            style={{
              color: '#CBD5E0',
              cursor: 'pointer',
              fontSize: '0.85rem',
              textDecoration: 'underline'
            }}
          >
            Reset Video Player
          </button>
        )}
      </div>

    </div>
  );
};

export default VideoPlayer;
