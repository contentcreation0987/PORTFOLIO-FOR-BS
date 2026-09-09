import React from 'react';

/* 9:16 hero reel. Poster paints first; the video source is only attached once the
   element scrolls near the viewport, then plays muted and loops. Nothing about it
   moves the page — no parallax, no pinning. */
export function Reel({ src, poster, caption, fit = 'contain', full = false, style, ...rest }) {
  const ref = React.useRef(null);
  const [armed, setArmed] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const near = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setArmed(true); near.disconnect(); } }),
      { rootMargin: '400px 0px' }
    );
    near.observe(el);
    return () => near.disconnect();
  }, []);

  React.useEffect(() => {
    const v = ref.current && ref.current.querySelector('video');
    if (!v || !armed) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause(); }),
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [armed]);

  return (
    <figure ref={ref} style={{ margin: 0, display: 'grid', gap: 'var(--s-3)', ...style }} {...rest}>
      <div
        style={{
          position: 'relative',
          aspectRatio: 'var(--aspect-reel)',
          maxHeight: full ? 'none' : 'var(--reel-max-h)',
          margin: full ? 0 : '0 auto',
          width: '100%',
          background: 'var(--surface-media)',
          overflow: 'hidden',
          borderRadius: 'var(--radius-media)',
        }}
      >
        <video
          poster={poster}
          src={armed ? src : undefined}
          muted
          loop
          playsInline
          preload="none"
          style={{ width: '100%', height: '100%', objectFit: fit === 'cover' ? 'cover' : 'contain', display: 'block' }}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)',
            color: 'var(--text-label)',
            maxWidth: 'var(--measure-body)',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
