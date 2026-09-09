import React from 'react';
import { Label } from '../type/Label.jsx';
import { Rule } from './Rule.jsx';

/* The swappable top section. Same page serves a cold outreach email, a client
   pitch, or a job application — only this block changes. */
export function IntroBlock({ name = 'Bilal Ghazi', discipline, statement, addressedTo, contact, style, ...rest }) {
  return (
    <header style={{ display: 'grid', gap: 'var(--stack)', ...style }} {...rest}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--s-4)', alignItems: 'baseline', flexWrap: 'wrap' }}>
        <Label tone="ink" as="p" style={{ margin: 0 }}>{name}</Label>
        {discipline && <Label as="p" style={{ margin: 0 }}>{discipline}</Label>}
      </div>
      <Rule />
      {addressedTo && <Label tone="accent" as="p" style={{ margin: 0 }}>{addressedTo}</Label>}
      {statement && (
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-display-3)',
            lineHeight: 'var(--lh-display-loose)',
            letterSpacing: 'var(--tr-display-2)',
            fontWeight: 'var(--fw-regular)',
            color: 'var(--text-display)',
            maxWidth: '24ch',
            textWrap: 'pretty',
          }}
        >
          {statement}
        </p>
      )}
      {contact && <p style={{ margin: 0, fontSize: 'var(--fs-small)', color: 'var(--text-quiet)' }}>{contact}</p>}
    </header>
  );
}
