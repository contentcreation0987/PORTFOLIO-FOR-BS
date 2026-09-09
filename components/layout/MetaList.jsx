import React from 'react';

/* Client / role / year credits. Key–value rows on hairlines, tabular figures. */
export function MetaList({ items = [], tone = 'page', style, ...rest }) {
  const onMedia = tone === 'media';
  return (
    <dl style={{ margin: 0, display: 'grid', gap: 0, ...style }} {...rest}>
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(88px,26%) 1fr',
            gap: 'var(--s-4)',
            paddingBlock: 'var(--s-3)',
            borderTop: 'var(--border-hair) solid ' + (onMedia ? 'var(--rule-on-media)' : 'var(--rule-hairline)'),
          }}
        >
          <dt
            style={{
              font: 'var(--fw-medium) var(--fs-label)/var(--lh-label) var(--font-core)',
              letterSpacing: 'var(--tr-label)',
              textTransform: 'uppercase',
              color: onMedia ? 'rgba(250,248,245,.6)' : 'var(--text-label)',
              paddingTop: '3px',
            }}
          >
            {it.key}
          </dt>
          <dd style={{ margin: 0, fontSize: 'var(--fs-small)', color: onMedia ? 'var(--text-on-media)' : 'var(--text-body)', fontVariantNumeric: 'tabular-nums' }}>
            {it.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
