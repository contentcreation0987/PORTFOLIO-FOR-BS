/* Demo harness: phone frame + the swappable-intro control.
   The control is a demo affordance, not part of the shipped page. */
function PortfolioApp() {
  const [variant, setVariant] = React.useState('outreach');
  const [register, setRegister] = React.useState('bold');
  const opts = [['outreach', 'Cold outreach'], ['pitch', 'Client pitch'], ['application', 'Application']];
  const regs = [['quiet', 'Quiet'], ['bold', 'Bold']];
  const btn = (on) => ({ font: 'var(--fw-medium) var(--fs-label)/1 var(--font-core)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', padding: '7px 11px', cursor: 'pointer', border: '1px solid ' + (on ? 'var(--brass-1)' : 'var(--rule-hairline)'), background: on ? 'var(--brass-3)' : 'transparent', color: on ? 'var(--brass-0)' : 'var(--text-quiet)', borderRadius: 'var(--radius-1)', transition: 'all var(--dur-fast) var(--ease-out)' });
  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-page)' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 5, display: 'flex', gap: 'var(--s-5)', alignItems: 'center', flexWrap: 'wrap', padding: '10px var(--gutter)', background: 'rgba(250,248,245,.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--rule-hairline)' }}>
        <span style={{ font: 'var(--fw-medium) var(--fs-label)/1 var(--font-core)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-label)' }}>Register</span>
        <div style={{ display: 'flex', gap: 'var(--s-3)' }}>
          {regs.map(([k, l]) => <button key={k} onClick={() => setRegister(k)} style={btn(register === k)}>{l}</button>)}
        </div>
        <span style={{ font: 'var(--fw-medium) var(--fs-label)/1 var(--font-core)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-label)' }}>Top section</span>
        <div style={{ display: 'flex', gap: 'var(--s-3)' }}>
          {opts.map(([k, l]) => (
            <button key={k} onClick={() => setVariant(k)}
              style={btn(variant === k)}>
              {l}
            </button>
          ))}
        </div>
      </div>
      {register === 'bold' ? <PortfolioPageBold variant={variant} /> : <PortfolioPage variant={variant} />}
    </div>
  );
}
Object.assign(window, { PortfolioApp });
