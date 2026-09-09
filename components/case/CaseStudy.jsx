import React from 'react';
import { Section } from '../layout/Section.jsx';
import { Reveal } from '../layout/Reveal.jsx';
import { Rule } from '../layout/Rule.jsx';
import { MetaList } from '../layout/MetaList.jsx';
import { Label } from '../type/Label.jsx';
import { DisplayTitle } from '../type/DisplayTitle.jsx';
import { Passage } from '../type/Passage.jsx';
import { ResultLine } from '../type/ResultLine.jsx';
import { Reel } from '../media/Reel.jsx';
import { StillStrip } from '../media/StillStrip.jsx';

/* One case study, in the fixed order the portfolio always uses:
   index + title → meta → hero reel → brief → concept → execution stills → result. */
export function CaseStudy({ index, title, size = 1, meta = [], reel, brief, concept, execution, stills = [], result, resultMetric, style, ...rest }) {
  return (
    <article style={style} {...rest}>
      <Section tight>
        <Reveal style={{ display: 'grid', gap: 'var(--stack)' }}>
          {index && <Label index={index}>Case study</Label>}
          <DisplayTitle size={size} balance>{title}</DisplayTitle>
          {meta.length > 0 && <MetaList items={meta} style={{ maxWidth: '420px' }} />}
        </Reveal>
      </Section>

      {reel && (
        <Section tone="media" bleed tight>
          <Reveal><Reel src={reel.src} poster={reel.poster} caption={null} /></Reveal>
          {reel.caption && (
            <p style={{ margin: 'var(--s-4) auto 0', paddingInline: 'var(--gutter)', maxWidth: 'var(--content-max)', font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)', color: 'rgba(250,248,245,.62)' }}>
              {reel.caption}
            </p>
          )}
        </Section>
      )}

      <Section tight>
        <div style={{ display: 'grid', gap: 'var(--stack-loose)', maxWidth: 'var(--content-max)' }}>
          {brief && <Reveal><Passage label="Brief">{brief}</Passage></Reveal>}
          {concept && <Reveal delay={80}><Passage label="Concept">{concept}</Passage></Reveal>}
          {execution && <Reveal delay={160}><Passage label="Execution">{execution}</Passage></Reveal>}
        </div>
      </Section>

      {stills.length > 0 && (
        <Section bleed tight style={{ paddingBlock: 'var(--s-2)' }}>
          <Reveal><StillStrip items={stills} /></Reveal>
        </Section>
      )}

      <Section tight>
        {result && <Reveal><ResultLine metric={resultMetric}>{result}</ResultLine></Reveal>}
        <Rule style={{ marginTop: 'var(--section-y)' }} />
      </Section>
    </article>
  );
}
