import React from 'react';

/* Campaign still. Lazy, no rounding, optional caption. Portrait 4:5 by default. */
export function Still({ src, alt = '', caption, ratio = 'still', fit = 'cover', style, ...rest }) {
  const ar = ratio === 'reel' ? 'var(--aspect-reel)' : ratio === 'wide' ? 'var(--aspect-wide)' : ratio === 'square' ? '1/1' : 'var(--aspect-still)';
  return (
    <figure style={{ margin: 0, display: 'grid', gap: 'var(--s-3)', ...style }} {...rest}>
      <div style={{ aspectRatio: ar, background: 'var(--surface-sunken)', overflow: 'hidden', borderRadius: 'var(--radius-media)' }}>
        <img src={src} alt={alt} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: fit }} />
      </div>
      {caption && (
        <figcaption style={{ font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)', color: 'var(--text-label)' }}>{caption}</figcaption>
      )}
    </figure>
  );
}
