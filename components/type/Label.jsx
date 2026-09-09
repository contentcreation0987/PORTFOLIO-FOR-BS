import React from 'react';

/* Eyebrow label. Uppercase, letterspaced, quiet. The only place small caps-style
   type appears in the system: section markers, case-study index, meta keys. */
export function Label({ children, tone = 'quiet', as = 'div', index, style, ...rest }) {
  const Tag = as;
  const color = tone === 'accent' ? 'var(--text-accent)' : tone === 'on-media' ? 'rgba(250,248,245,.72)' : tone === 'ink' ? 'var(--text-body)' : 'var(--text-label)';
  return (
    <Tag
      style={{
        font: 'var(--fw-medium) var(--fs-label)/var(--lh-label) var(--font-core)',
        letterSpacing: 'var(--tr-label)',
        textTransform: 'uppercase',
        color,
        display: 'flex',
        gap: 'var(--s-3)',
        alignItems: 'baseline',
        ...style,
      }}
      {...rest}
    >
      {index != null && <span style={{ color: 'var(--text-accent)', fontVariantNumeric: 'tabular-nums' }}>{index}</span>}
      <span>{children}</span>
    </Tag>
  );
}
