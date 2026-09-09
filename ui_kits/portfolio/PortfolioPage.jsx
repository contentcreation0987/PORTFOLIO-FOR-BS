/* The one page. Assembles design-system components only — no new UI here.
   Reads components off the compiled bundle namespace. */
const DS = window.DesignSystem_1d30d0;

function HeroStill({ src, caption }) {
  const { Section, Reveal, Reel } = DS;
  return (
    <Section tone="media" bleed tight>
      <Reveal>
        <div style={{ position: 'relative', aspectRatio: 'var(--aspect-still)', maxHeight: 'var(--reel-max-h)', margin: '0 auto', overflow: 'hidden' }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </Reveal>
      <p style={{ margin: 'var(--s-4) auto 0', paddingInline: 'var(--gutter)', maxWidth: 'var(--content-max)', font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)', color: 'rgba(250,248,245,.62)' }}>{caption}</p>
    </Section>
  );
}

function CaseBlock({ data }) {
  const { Section, Reveal, Rule, MetaList, Label, DisplayTitle, Passage, ResultLine, Reel, StillStrip } = DS;
  return (
    <article>
      <Section tight>
        <Reveal style={{ display: 'grid', gap: 'var(--stack)' }}>
          <Label index={data.index}>Case study</Label>
          <DisplayTitle size={data.size} balance>{data.title}</DisplayTitle>
          <MetaList items={data.meta} style={{ maxWidth: '420px' }} />
        </Reveal>
      </Section>

      {data.reel && (
        <Section tone="media" bleed tight>
          <Reveal><Reel src={data.reel.src} poster={data.reel.poster} /></Reveal>
          <p style={{ margin: 'var(--s-4) auto 0', paddingInline: 'var(--gutter)', maxWidth: 'var(--content-max)', font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)', color: 'rgba(250,248,245,.62)' }}>{data.reel.caption}</p>
        </Section>
      )}
      {data.hero && <HeroStill src={data.hero.still} caption={data.hero.caption} />}

      <Section tight>
        <div style={{ display: 'grid', gap: 'var(--stack-loose)', maxWidth: 'var(--content-max)' }}>
          <Reveal><Passage label="Brief">{data.brief}</Passage></Reveal>
          <Reveal delay={80}><Passage label="Concept">{data.concept}</Passage></Reveal>
          <Reveal delay={160}><Passage label="Execution">{data.execution}</Passage></Reveal>
        </div>
      </Section>

      <Section bleed tight style={{ paddingBlock: 'var(--s-2)' }}>
        <Reveal><StillStrip items={data.stills} /></Reveal>
      </Section>

      {data.secondReel && (
        <Section tone="media" bleed tight>
          <Reveal><Reel src={data.secondReel.src} poster={data.secondReel.poster} /></Reveal>
          <p style={{ margin: 'var(--s-4) auto 0', paddingInline: 'var(--gutter)', maxWidth: 'var(--content-max)', font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)', color: 'rgba(250,248,245,.62)' }}>{data.secondReel.caption}</p>
        </Section>
      )}

      <Section tight>
        <Reveal><ResultLine metric={data.resultMetric}>{data.result}</ResultLine></Reveal>
        <Rule style={{ marginTop: 'var(--section-y)' }} />
      </Section>
    </article>
  );
}

function PortfolioPage({ variant = 'outreach' }) {
  const { Section, IntroBlock, ContactBlock, Reveal } = DS;
  const intro = window.INTRO_VARIANTS[variant];
  return (
    <main>
      <Section as="div">
        <Reveal><IntroBlock discipline="Creative direction & content" addressedTo={intro.addressedTo} statement={intro.statement} contact={intro.contact} /></Reveal>
      </Section>
      {window.CASES.map((c) => <CaseBlock key={c.index} data={c} />)}
      <Section>
        <Reveal>
          <ContactBlock label="Next" line="That was two minutes. The rest takes a call." email="hello@bilalghazi.com" links={[{ label: 'Instagram', href: '#' }, { label: 'Full reel', href: '#' }, { label: 'PDF', href: '#' }]} />
        </Reveal>
      </Section>
    </main>
  );
}

Object.assign(window, { PortfolioPage, CaseBlock, HeroStill });
