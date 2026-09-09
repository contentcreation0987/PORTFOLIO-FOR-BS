import React from 'react';

/* Oversized case-study title. Tight leading, negative tracking, wraps hard.
   Size 1 is the page/case-study hero; 2 is a secondary study; 3 is a block head. */
export function DisplayTitle({ children, size = 1, as = 'h2', tone = 'ink', balance = false, style, ...rest }) {
  const Tag = as;
  const fs = size === 1 ? 'var(--fs-display-1)' : size === 2 ? 'var(--fs-display-2)' : 'var(--fs-display-3)';
  const lh = size === 3 ? 'var(--lh-display-loose)' : 'var(--lh-display)';
  const tr = size === 1 ? 'var(--tr-display)' : 'var(--tr-display-2)';
  return (
    <Tag
      style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: fs,
        fontWeight: 'var(--fw-semibold)',
        lineHeight: lh,
        letterSpacing: tr,
        color: tone === 'on-media' ? 'var(--text-on-media)' : 'var(--text-display)',
        textWrap: balance ? 'balance' : 'pretty',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
