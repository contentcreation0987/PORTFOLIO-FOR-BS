import React from 'react';

/* The whole motion system: fade + 14px rise, once, on scroll into view.
   Honours prefers-reduced-motion via the motion tokens. */
export function Reveal({ children, delay = 0, as = 'div', style, ...rest }) {
  const Tag = as;
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(var(--reveal-shift))',
        transition: 'opacity var(--dur-reveal) var(--ease-out) ' + delay + 'ms, transform var(--dur-reveal) var(--ease-out) ' + delay + 'ms',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
