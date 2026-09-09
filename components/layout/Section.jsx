import React from 'react';

/* Page section. Owns the gutter and the vertical rhythm. 'media' inverts to the
   void ground for full-bleed reels; 'bleed' drops the gutter entirely. */
export function Section({ children, tone = 'page', bleed = false, tight = false, as = 'section', style, ...rest }) {
  const Tag = as;
  const bg = tone === 'media' ? 'var(--surface-media)' : tone === 'raised' ? 'var(--surface-raised)' : 'transparent';
  return (
    <Tag
      style={{
        background: bg,
        color: tone === 'media' ? 'var(--text-on-media)' : 'inherit',
        paddingInline: bleed ? 0 : 'var(--gutter)',
        paddingBlock: tight ? 'var(--s-7)' : 'var(--section-y)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: 'var(--page-max)', marginInline: 'auto' }}>{children}</div>
    </Tag>
  );
}
