import React from 'react';
import { Label } from '../type/Label.jsx';

/* Page close. One large mailto, quiet supporting lines. */
export function ContactBlock({ label = 'Next', line, email, links = [], style, ...rest }) {
  return (
    <footer style={{ display: 'grid', gap: 'var(--stack)', ...style }} {...rest}>
      {label && <Label>{label}</Label>}
      {line && (
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-display-3)',
            lineHeight: 'var(--lh-display-loose)',
            letterSpacing: 'var(--tr-display-2)',
            fontWeight: 'var(--fw-regular)',
            maxWidth: '22ch',
            textWrap: 'pretty',
          }}
        >
          {line}
        </p>
      )}
      {email && (
        <a href={'mailto:' + email} style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-accent-strong)', borderBottomColor: 'var(--brass-2)', justifySelf: 'start' }}>
          {email}
        </a>
      )}
      {links.length > 0 && (
        <div style={{ display: 'flex', gap: 'var(--s-5)', flexWrap: 'wrap', paddingTop: 'var(--s-3)' }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} style={{ fontSize: 'var(--fs-small)', color: 'var(--text-quiet)', border: 0 }}>{l.label}</a>
          ))}
        </div>
      )}
    </footer>
  );
}
