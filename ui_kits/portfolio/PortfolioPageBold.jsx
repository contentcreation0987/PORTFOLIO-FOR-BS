/* Bold register — same tokens, harder impact. Void opening, viewport-filling
   reels, oversized brass index numerals, result line on the void.
   Still: zero radii, no shadows, fades only. */
const DSB = window.DesignSystem_1d30d0;

function BoldIntro({ intro }) {
  const { Reveal } = DSB;
  return (
    <section style={{ background: 'var(--void)', color: 'var(--text-on-media)', minHeight: '100svh', display: 'grid', gridTemplateRows: 'auto 1fr auto', paddingInline: 'var(--gutter)', paddingBlock: 'var(--s-7)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--s-4)', flexWrap: 'wrap', font: 'var(--fw-medium) var(--fs-label)/1.1 var(--font-core)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase' }}>
        <span style={{ color: 'var(--text-on-media)' }}>Bilal Ghazi</span>
        <span style={{ color: 'rgba(250,248,245,.55)' }}>Creative direction &amp; content</span>
      </div>
      <Reveal style={{ alignSelf: 'center', display: 'grid', gap: 'var(--s-6)', paddingBlock: 'var(--s-8)' }}>
        <div style={{ font: 'var(--fw-medium) var(--fs-label)/1.1 var(--font-core)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--brass-2)' }}>{intro.addressedTo}</div>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-2)', fontWeight: 'var(--fw-semibold)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--tr-display)', color: 'var(--paper-0)', maxWidth: '17ch', textWrap: 'balance' }}>{intro.statement}</h1>
      </Reveal>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 'var(--s-5)', flexWrap: 'wrap', borderTop: '1px solid var(--rule-on-media)', paddingTop: 'var(--s-5)' }}>
        <span style={{ fontSize: 'var(--fs-small)', color: 'rgba(250,248,245,.62)' }}>{intro.contact}</span>
        <span style={{ font: 'var(--fw-medium) var(--fs-label)/1.1 var(--font-core)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'rgba(250,248,245,.55)' }}>Two case studies</span>
      </div>
    </section>
  );
}

function BoldReel({ media, isStill }) {
  const { Reveal, Reel } = DSB;
  return (
    <section style={{ background: 'var(--void)', position: 'relative' }}>
      <Reveal>
        <div style={{ height: '100svh', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
          {isStill
            ? <img src={media.still} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            : <Reel src={media.src} poster={media.poster} style={{ height: '100%', ['--reel-max-h']: '100svh' }} />}
        </div>
      </Reveal>
      <div style={{ position: 'absolute', inset: 'auto 0 0 0', paddingInline: 'var(--gutter)', paddingBottom: 'var(--s-6)', paddingTop: 'var(--s-9)', background: 'var(--media-scrim)', pointerEvents: 'none' }}>
        <p style={{ margin: 0, maxWidth: 'var(--measure-body)', font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)', color: 'var(--paper-0)' }}>{media.caption}</p>
      </div>
    </section>
  );
}

function BoldCase({ data }) {
  const { Section, Reveal, MetaList, Passage, StillStrip } = DSB;
  const heroIsStill = !data.reel;
  return (
    <article>
      <Section tight>
        <Reveal style={{ display: 'grid', gap: 'var(--stack)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--s-5)', alignItems: 'start' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-3)', fontWeight: 'var(--fw-semibold)', lineHeight: '.9', letterSpacing: 'var(--tr-display-2)', color: 'var(--brass-1)', fontVariantNumeric: 'tabular-nums' }}>{data.index}</span>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: data.size === 1 ? 'var(--fs-display-1)' : 'var(--fs-display-2)', fontWeight: 'var(--fw-semibold)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--tr-display)', color: 'var(--text-display)', textWrap: 'balance' }}>{data.title}</h2>
          </div>
          <MetaList items={data.meta} style={{ maxWidth: '460px' }} />
        </Reveal>
      </Section>

      <BoldReel media={heroIsStill ? data.hero : data.reel} isStill={heroIsStill} />

      <Section tight>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: 'var(--stack-loose)', alignItems: 'start' }}>
          <Reveal><Passage label="Brief">{data.brief}</Passage></Reveal>
          <Reveal delay={80}><Passage label="Concept">{data.concept}</Passage></Reveal>
          <Reveal delay={160}><Passage label="Execution">{data.execution}</Passage></Reveal>
        </div>
      </Section>

      <Section bleed tight style={{ paddingBlock: 'var(--s-2)' }}>
        <Reveal><StillStrip items={data.stills} /></Reveal>
      </Section>

      {data.secondReel && <BoldReel media={data.secondReel} />}

      <section style={{ background: 'var(--void)', color: 'var(--text-on-media)', paddingInline: 'var(--gutter)', paddingBlock: 'var(--section-y)' }}>
        <Reveal style={{ maxWidth: 'var(--page-max)', marginInline: 'auto', display: 'grid', gap: 'var(--s-5)' }}>
          <div style={{ font: 'var(--fw-medium) var(--fs-label)/1.1 var(--font-core)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--brass-2)' }}>Result</div>
          <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-3)', lineHeight: 'var(--lh-display-loose)', letterSpacing: 'var(--tr-display-2)', fontWeight: 'var(--fw-regular)', color: 'var(--paper-0)', maxWidth: '26ch', textWrap: 'pretty' }}>
            <span style={{ color: 'var(--brass-2)', fontWeight: 'var(--fw-semibold)' }}>{data.resultMetric} </span>{data.result}
          </p>
        </Reveal>
      </section>
    </article>
  );
}

function PortfolioPageBold({ variant = 'outreach' }) {
  const { Section, ContactBlock, Reveal } = DSB;
  const intro = window.INTRO_VARIANTS[variant];
  return (
    <main>
      <BoldIntro intro={intro} />
      {window.CASES.map((c) => <BoldCase key={c.index} data={c} />)}
      <Section>
        <Reveal>
          <ContactBlock label="Next" line="That was two minutes. The rest takes a call." email="hello@bilalghazi.com" links={[{ label: 'Instagram', href: '#' }, { label: 'Full reel', href: '#' }, { label: 'PDF', href: '#' }]} />
        </Reveal>
      </Section>
    </main>
  );
}

Object.assign(window, { PortfolioPageBold, BoldIntro, BoldCase, BoldReel });
