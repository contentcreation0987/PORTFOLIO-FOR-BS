import React from 'react';
import { Label } from './Label.jsx';

/* A labelled block of reading copy: brief, concept, execution.
   Body is deliberately small and set to a narrow measure. */
export function Passage({ label, children, lead = false, style, ...rest }) {
  return (
    <section style={{ display: 'grid', gap: 'var(--stack-tight)', ...style }} {...rest}>
      {label && <Label>{label}</Label>}
      <div
        style={{
          fontSize: lead ? 'var(--fs-lead)' : 'var(--fs-body)',
          lineHeight: lead ? 'var(--lh-lead)' : 'var(--lh-body)',
          color: lead ? 'var(--text-body)' : 'var(--text-quiet)',
          maxWidth: lead ? 'var(--measure-lead)' : 'var(--measure-body)',
        }}
      >
        {children}
      </div>
    </section>
  );
}
