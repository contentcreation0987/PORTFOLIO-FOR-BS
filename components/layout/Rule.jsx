import React from 'react';

/* Hairline divider. The only decorative element in the system. */
export function Rule({ tone = 'hairline', style, ...rest }) {
  const c = tone === 'strong' ? 'var(--rule-strong)' : tone === 'on-media' ? 'var(--rule-on-media)' : tone === 'accent' ? 'var(--brass-1)' : 'var(--rule-hairline)';
  return <hr style={{ border: 0, borderTop: 'var(--border-hair) solid ' + c, margin: 0, ...style }} {...rest} />;
}
