import React from 'react';
import { Label } from './Label.jsx';

/* Every case study ends here: one line, larger than body, brass rule above.
   Never more than one sentence. */
export function ResultLine({ children, label = 'Result', metric, style, ...rest }) {
  return (
    <section
      style={{
        borderTop: 'var(--border-hair) solid var(--rule-strong)',
        paddingTop: 'var(--s-5)',
        display: 'grid',
        gap: 'var(--s-4)',
        ...style,
      }}
      {...rest}
    >
      {label && <Label tone="accent">{label}</Label>}
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-result)',
          lineHeight: 'var(--lh-result)',
          letterSpacing: 'var(--tr-result)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-display)',
          maxWidth: '30ch',
          textWrap: 'pretty',
        }}
      >
        {metric && <span style={{ color: 'var(--text-accent)' }}>{metric} </span>}
        {children}
      </p>
    </section>
  );
}
