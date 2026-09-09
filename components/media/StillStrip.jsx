import React from 'react';

/* Horizontal scroll strip of stills for execution sections — snaps, no scrollbar
   chrome. Self-contained: it supplies its own gutter inset and must be mounted in a
   <Section bleed>, so it never needs (and must never have) a negative outer margin.
   Falls back to an auto-fit grid when 'grid'. */
export function StillStrip({ items = [], mode = 'scroll', style, ...rest }) {
  if (mode === 'grid') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap: 'var(--s-3)', ...style }} {...rest}>
        {items.map((it, i) => (
          <div key={i} style={{ aspectRatio: 'var(--aspect-still)', overflow: 'hidden', background: 'var(--surface-sunken)' }}>
            <img src={it.src} alt={it.alt || ''} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--s-3)',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'none',
        paddingInline: 'var(--gutter)',
        ...style,
      }}
      {...rest}
    >
      {items.map((it, i) => (
        <div key={i} style={{ flex: '0 0 auto', width: 'min(62vw,300px)', scrollSnapAlign: 'start' }}>
          <div style={{ aspectRatio: 'var(--aspect-still)', overflow: 'hidden', background: 'var(--surface-sunken)' }}>
            <img src={it.src} alt={it.alt || ''} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      ))}
    </div>
  );
}
