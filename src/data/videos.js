/**
 * ============================================================================
 * SMP ORGANIC - CENTRALIZED VIDEOS CONFIGURATION
 * ============================================================================
 * 
 * HOW TO CHANGE OR ADD VIDEOS:
 * You only need to edit this file! You can paste ANY YouTube link format:
 *   - Normal Watch URL:  https://www.youtube.com/watch?v=min7-uqCMq4
 *   - YouTube Shorts:    https://www.youtube.com/shorts/4rp-1tF8sRA
 *   - Short Share URL:   https://youtu.be/min7-uqCMq4
 *   - Embed URL:         https://www.youtube.com/embed/min7-uqCMq4
 *   - Mobile URL:        https://m.youtube.com/watch?v=min7-uqCMq4
 * 
 * The VideoPlayer component will automatically extract the video ID, convert it
 * into a proper embed player, and provide an external "Watch on YouTube" button
 * in case YouTube restricts iframe embedding for that video.
 */

export const videos = [
  {
    id: "manure-prep-video",
    title: "See How SMP Organic Manure Is Prepared",
    description: "Take a visual journey through our raw material collection, enrichment, natural maturation, and packaging process.",
    // Paste ANY YouTube link here (Watch, Shorts, youtu.be, or embed):
    youtubeUrl: "https://www.youtube.com/watch?v=min7-uqCMq4",
    // Optional custom poster thumbnail (leave empty or use a local image):
    thumbnail: "/images/smp-manure-packing-stock.jpg",
    featured: true
  }
];

/**
 * Robust helper function to parse any YouTube URL into embed and watch metadata.
 * Returns null if the URL is missing or cannot be parsed.
 */
export function getYouTubeInfo(url) {
  if (!url || typeof url !== 'string') return null;

  const cleanUrl = url.trim();

  // Regular expression matching:
  // 1. youtube.com/watch?v=VIDEO_ID (with any query params before or after)
  // 2. youtube.com/shorts/VIDEO_ID
  // 3. youtu.be/VIDEO_ID
  // 4. youtube.com/embed/VIDEO_ID
  // 5. bare 11-character video ID
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/|^)([a-zA-Z0-9_-]{11})/i;
  const match = cleanUrl.match(regExp);

  if (match && match[1]) {
    const videoId = match[1];
    return {
      videoId,
      // Official embed player URL with safe parameters
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
      // Direct YouTube watch link for external fallback
      watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
      // Standard YouTube high-quality thumbnail
      defaultThumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    };
  }

  return null;
}

export default videos;
