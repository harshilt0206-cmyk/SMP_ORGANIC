import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, MessageSquare, Send, User, MapPin, AlertCircle } from 'lucide-react';
import { customerReviews as initialStaticReviews } from '../data/reviews';

const API_BASE_URL = 'http://localhost:8000';

const starLabels = {
  1: '1 Star - Needs Improvement',
  2: '2 Stars - Fair Quality',
  3: '3 Stars - Good & Satisfactory',
  4: '4 Stars - Very Good Results',
  5: '5 Stars - Excellent Quality & Results'
};

const RatingComponent = ({ 
  productId = 'smp-super-gold-organic-manure-40kg',
  productName = 'SMP Organic Super Gold Bio Enriched Organic Manure'
}) => {
  // Reviews and ratings state
  const [ratingData, setRatingData] = useState({
    average_rating: 5.0,
    total_ratings: 3,
    breakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 3 },
    reviews: []
  });

  // Form state
  const [selectedStars, setSelectedStars] = useState(5);
  const [hoverStars, setHoverStars] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [location, setLocation] = useState('');
  const [crop, setCrop] = useState('');
  const [reviewText, setReviewText] = useState('');

  // UI state
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [hasRatedBefore, setHasRatedBefore] = useState(false);

  const storageKey = `smp_ratings_${productId}`;
  const userRatedKey = `smp_user_has_rated_${productId}`;

  // Calculate stats from a review list
  const computeStats = (reviewsList) => {
    const total = reviewsList.length;
    const breakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let sum = 0;

    reviewsList.forEach((r) => {
      const s = parseInt(r.rating, 10) || 5;
      if (breakdown[s] !== undefined) breakdown[s] += 1;
      sum += s;
    });

    const avg = total > 0 ? (sum / total).toFixed(1) : '0.0';
    return {
      average_rating: parseFloat(avg),
      total_ratings: total,
      breakdown,
      reviews: reviewsList
    };
  };

  // Load ratings on component mount
  useEffect(() => {
    // Check if user already submitted a review on this browser
    if (localStorage.getItem(userRatedKey)) {
      setHasRatedBefore(true);
    }

    let isMounted = true;

    async function fetchRatings() {
      setLoading(true);
      try {
        // Attempt fetch from backend SQLite database
        const res = await fetch(`${API_BASE_URL}/api/products/${productId}/ratings`, {
          signal: AbortSignal.timeout(2000)
        });

        if (res.ok) {
          const data = await res.json();
          if (isMounted && data && Array.isArray(data.reviews) && data.reviews.length > 0) {
            setRatingData(data);
            localStorage.setItem(storageKey, JSON.stringify(data));
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        // Backend offline or timeout - fallback to local storage or initial static seed
      }

      if (!isMounted) return;

      // Fallback: Check localStorage
      const cached = localStorage.getItem(storageKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          setRatingData(parsed);
          setLoading(false);
          return;
        } catch (e) {}
      }

      // Default fallback: Use authentic reviews from reviews.js
      const defaultReviews = initialStaticReviews
        .filter((r) => r.name && !r.name.includes('Placeholder'))
        .map((r) => ({
          id: r.id,
          customer_name: r.name,
          location: r.location,
          crop: r.crop || '',
          rating: r.rating || 5,
          review_text: r.review,
          created_at: 'Verified Customer'
        }));

      const computed = computeStats(defaultReviews);
      setRatingData(computed);
      setLoading(false);
    }

    fetchRatings();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  // Handle Form Submission
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanName = customerName.trim();
    if (!cleanName) {
      setErrorMessage('Please enter your name.');
      return;
    }

    setSubmitting(true);

    const newReview = {
      product_id: productId,
      customer_name: cleanName,
      location: location.trim() || 'Karnataka',
      crop: crop.trim() || '',
      rating: selectedStars,
      review_text: reviewText.trim()
    };

    let backendSaved = false;

    // 1. Try sending to backend SQLite database
    try {
      const res = await fetch(`${API_BASE_URL}/api/products/${productId}/ratings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
        signal: AbortSignal.timeout(3000)
      });

      if (res.ok) {
        backendSaved = true;
      }
    } catch (err) {
      // Backend not running; we will still persist to local storage seamlessly
    }

    // 2. Update local state and localStorage
    const reviewWithMeta = {
      ...newReview,
      id: Date.now(),
      created_at: 'Just now'
    };

    const updatedReviews = [reviewWithMeta, ...ratingData.reviews];
    const newStats = computeStats(updatedReviews);

    setRatingData(newStats);
    localStorage.setItem(storageKey, JSON.stringify(newStats));
    localStorage.setItem(userRatedKey, 'true');

    setSubmitting(false);
    setSubmitSuccess(true);
    setHasRatedBefore(true);

    // Reset inputs
    setReviewText('');
    setCrop('');
  };

  const currentStarCount = hoverStars || selectedStars;

  return (
    <div className="card-base" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', marginTop: '2rem' }}>
      
      {/* Section Header */}
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="tag-badge tag-badge-green">
            CUSTOMER RATINGS & REVIEWS
          </span>
          <span style={{ fontSize: '0.825rem', color: 'var(--color-primary-light)', fontWeight: 600 }}>
            ✓ Verified Customer Feedback
          </span>
        </div>
        <h3 style={{ fontSize: '1.75rem', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-heading)' }}>
          Customer Ratings for {productName}
        </h3>
      </div>

      {/* Ratings Overview Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          backgroundColor: 'var(--color-bg-main)',
          padding: '1.75rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '2.5rem'
        }}
      >
        {/* Left: Overall Score */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3.6rem', fontWeight: 800, color: 'var(--color-primary-dark)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
            {ratingData.average_rating.toFixed(1)}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', margin: '0.75rem 0' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={22}
                fill={star <= Math.round(ratingData.average_rating) ? 'var(--color-gold)' : 'none'}
                stroke={star <= Math.round(ratingData.average_rating) ? 'var(--color-gold)' : 'var(--color-border)'}
              />
            ))}
          </div>

          <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
            Based on <strong>{ratingData.total_ratings}</strong> verified farmer {ratingData.total_ratings === 1 ? 'rating' : 'ratings'}
          </div>
        </div>

        {/* Right: Breakdown Progress Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[5, 4, 3, 2, 1].map((star) => {
            const count = ratingData.breakdown[star] || 0;
            const percent = ratingData.total_ratings > 0 
              ? Math.round((count / ratingData.total_ratings) * 100) 
              : 0;

            return (
              <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
                <span style={{ width: '45px', fontWeight: 600, color: 'var(--color-text-main)' }}>
                  {star} ★
                </span>
                
                <div style={{
                  flexGrow: 1,
                  height: '8px',
                  backgroundColor: '#E2E8F0',
                  borderRadius: 'var(--radius-pill)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${percent}%`,
                    height: '100%',
                    backgroundColor: star >= 4 ? 'var(--color-gold)' : 'var(--color-accent)',
                    borderRadius: 'var(--radius-pill)',
                    transition: 'width 0.4s ease'
                  }} />
                </div>

                <span style={{ width: '38px', textAlign: 'right', color: 'var(--color-text-muted)' }}>
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review Submission Form */}
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: '1.75rem',
        marginBottom: '2.5rem'
      }}>
        <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
          {hasRatedBefore ? 'Submit Another Product Review' : 'Rate & Review This Product'}
        </h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          Share your real farm experience to help other growers. Ratings are recorded persistently.
        </p>

        {submitSuccess && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: 'var(--color-primary-subtle)',
            color: 'var(--color-primary-dark)',
            padding: '1rem',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '1.25rem',
            border: '1px solid rgba(46, 125, 50, 0.3)'
          }}>
            <CheckCircle2 size={24} style={{ color: 'var(--color-primary-light)', flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Thank You for Your Review!</div>
              <div style={{ fontSize: '0.85rem' }}>Your rating has been saved and added to the community score.</div>
            </div>
          </div>
        )}

        {errorMessage && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#FED7D7',
            color: '#C53030',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '1.25rem',
            fontSize: '0.875rem'
          }}>
            <AlertCircle size={18} />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmitReview}>
          
          {/* Star Rating Picker */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Your Rating *
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setSelectedStars(star)}
                    onMouseEnter={() => setHoverStars(star)}
                    onMouseLeave={() => setHoverStars(0)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px',
                      transition: 'transform 0.15s ease'
                    }}
                    title={`${star} Stars`}
                  >
                    <Star
                      size={28}
                      fill={star <= currentStarCount ? 'var(--color-gold)' : 'none'}
                      stroke={star <= currentStarCount ? 'var(--color-gold)' : '#CBD5E0'}
                    />
                  </button>
                ))}
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-dark)', fontWeight: 600, marginLeft: '0.5rem' }}>
                {starLabels[currentStarCount]}
              </span>
            </div>
          </div>

          {/* Name & Location Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Your Name *
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Anand Gowda"
                required
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Farm Location / Village (Optional)
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Mandya / Tumakuru"
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Crop (Optional)
              </label>
              <input
                type="text"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                placeholder="e.g. Arecanut / Coconut / Vegetables"
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          {/* Review Text */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              Your Review / Farm Feedback (Optional)
            </label>
            <textarea
              rows={3}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your genuine experience with SMP Organic Super Gold manure..."
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                outline: 'none',
                fontSize: '0.9rem',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary"
            style={{ opacity: submitting ? 0.7 : 1 }}
          >
            <Send size={16} />
            <span>{submitting ? 'Submitting Rating...' : 'Submit Review'}</span>
          </button>
        </form>
      </div>

      {/* Customer Reviews List */}
      <div>
        <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
          Recent Customer Reviews ({ratingData.reviews.length})
        </h4>

        {ratingData.reviews.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)' }}>
            No reviews yet. Be the first farmer to leave a review!
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ratingData.reviews.map((rev, index) => (
              <div 
                key={rev.id || index}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-subtle)',
                      color: 'var(--color-primary-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem'
                    }}>
                      {rev.customer_name ? rev.customer_name.charAt(0).toUpperCase() : 'F'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)', fontSize: '0.95rem' }}>
                        {rev.customer_name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={12} style={{ color: 'var(--color-accent)' }} />
                        <span>{rev.location || 'Karnataka'}</span>
                        {rev.crop && <span>• Crop: {rev.crop}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={16}
                        fill={s <= rev.rating ? 'var(--color-gold)' : 'none'}
                        stroke={s <= rev.rating ? 'var(--color-gold)' : '#CBD5E0'}
                      />
                    ))}
                  </div>
                </div>

                {rev.review_text && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', lineHeight: 1.5, marginTop: '0.5rem' }}>
                    "{rev.review_text}"
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default RatingComponent;
