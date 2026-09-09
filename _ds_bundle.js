/* @ds-bundle: {"format":4,"namespace":"DesignSystem_1d30d0","components":[{"name":"CaseStudy","sourcePath":"components/case/CaseStudy.jsx"},{"name":"ContactBlock","sourcePath":"components/layout/ContactBlock.jsx"},{"name":"IntroBlock","sourcePath":"components/layout/IntroBlock.jsx"},{"name":"MetaList","sourcePath":"components/layout/MetaList.jsx"},{"name":"Reveal","sourcePath":"components/layout/Reveal.jsx"},{"name":"Rule","sourcePath":"components/layout/Rule.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Reel","sourcePath":"components/media/Reel.jsx"},{"name":"Still","sourcePath":"components/media/Still.jsx"},{"name":"StillStrip","sourcePath":"components/media/StillStrip.jsx"},{"name":"DisplayTitle","sourcePath":"components/type/DisplayTitle.jsx"},{"name":"Label","sourcePath":"components/type/Label.jsx"},{"name":"Passage","sourcePath":"components/type/Passage.jsx"},{"name":"ResultLine","sourcePath":"components/type/ResultLine.jsx"}],"sourceHashes":{"components/case/CaseStudy.jsx":"a9b1032064b8","components/layout/ContactBlock.jsx":"cb93966a8ec4","components/layout/IntroBlock.jsx":"566b882edcd4","components/layout/MetaList.jsx":"67fdc895199d","components/layout/Reveal.jsx":"f021a4aacc9f","components/layout/Rule.jsx":"c95b57c6fe8d","components/layout/Section.jsx":"26c9719e48ec","components/media/Reel.jsx":"822ec16db062","components/media/Still.jsx":"205e56b23e15","components/media/StillStrip.jsx":"d812e582ce04","components/type/DisplayTitle.jsx":"abfab79dc653","components/type/Label.jsx":"dc3dbc1ad98e","components/type/Passage.jsx":"0e5a3f20bb71","components/type/ResultLine.jsx":"9190c091da5f","ui_kits/portfolio/PortfolioApp.jsx":"ce867a6c68e7","ui_kits/portfolio/PortfolioData.jsx":"64bcf5187c80","ui_kits/portfolio/PortfolioPage.jsx":"99116d780c35","ui_kits/portfolio/PortfolioPageBold.jsx":"3c1c7f4ca7b9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_1d30d0 = window.DesignSystem_1d30d0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/layout/MetaList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Client / role / year credits. Key–value rows on hairlines, tabular figures. */
function MetaList({
  items = [],
  tone = 'page',
  style,
  ...rest
}) {
  const onMedia = tone === 'media';
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gap: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(88px,26%) 1fr',
      gap: 'var(--s-4)',
      paddingBlock: 'var(--s-3)',
      borderTop: 'var(--border-hair) solid ' + (onMedia ? 'var(--rule-on-media)' : 'var(--rule-hairline)')
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--fw-medium) var(--fs-label)/var(--lh-label) var(--font-core)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: onMedia ? 'rgba(250,248,245,.6)' : 'var(--text-label)',
      paddingTop: '3px'
    }
  }, it.key), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-small)',
      color: onMedia ? 'var(--text-on-media)' : 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { MetaList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/MetaList.jsx", error: String((e && e.message) || e) }); }

// components/layout/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The whole motion system: fade + 14px rise, once, on scroll into view.
   Honours prefers-reduced-motion via the motion tokens. */
function Reveal({
  children,
  delay = 0,
  as = 'div',
  style,
  ...rest
}) {
  const Tag = as;
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }), {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(var(--reveal-shift))',
      transition: 'opacity var(--dur-reveal) var(--ease-out) ' + delay + 'ms, transform var(--dur-reveal) var(--ease-out) ' + delay + 'ms',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/layout/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hairline divider. The only decorative element in the system. */
function Rule({
  tone = 'hairline',
  style,
  ...rest
}) {
  const c = tone === 'strong' ? 'var(--rule-strong)' : tone === 'on-media' ? 'var(--rule-on-media)' : tone === 'accent' ? 'var(--brass-1)' : 'var(--rule-hairline)';
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: 'var(--border-hair) solid ' + c,
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Rule.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Page section. Owns the gutter and the vertical rhythm. 'media' inverts to the
   void ground for full-bleed reels; 'bleed' drops the gutter entirely. */
function Section({
  children,
  tone = 'page',
  bleed = false,
  tight = false,
  as = 'section',
  style,
  ...rest
}) {
  const Tag = as;
  const bg = tone === 'media' ? 'var(--surface-media)' : tone === 'raised' ? 'var(--surface-raised)' : 'transparent';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: bg,
      color: tone === 'media' ? 'var(--text-on-media)' : 'inherit',
      paddingInline: bleed ? 0 : 'var(--gutter)',
      paddingBlock: tight ? 'var(--s-7)' : 'var(--section-y)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      marginInline: 'auto'
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/media/Reel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 9:16 hero reel. Poster paints first; the video source is only attached once the
   element scrolls near the viewport, then plays muted and loops. Nothing about it
   moves the page — no parallax, no pinning. */
function Reel({
  src,
  poster,
  caption,
  fit = 'contain',
  full = false,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [armed, setArmed] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const near = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setArmed(true);
        near.disconnect();
      }
    }), {
      rootMargin: '400px 0px'
    });
    near.observe(el);
    return () => near.disconnect();
  }, []);
  React.useEffect(() => {
    const v = ref.current && ref.current.querySelector('video');
    if (!v || !armed) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else v.pause();
    }), {
      threshold: 0.4
    });
    io.observe(v);
    return () => io.disconnect();
  }, [armed]);
  return /*#__PURE__*/React.createElement("figure", _extends({
    ref: ref,
    style: {
      margin: 0,
      display: 'grid',
      gap: 'var(--s-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: 'var(--aspect-reel)',
      maxHeight: full ? 'none' : 'var(--reel-max-h)',
      margin: full ? 0 : '0 auto',
      width: '100%',
      background: 'var(--surface-media)',
      overflow: 'hidden',
      borderRadius: 'var(--radius-media)'
    }
  }, /*#__PURE__*/React.createElement("video", {
    poster: poster,
    src: armed ? src : undefined,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit === 'cover' ? 'cover' : 'contain',
      display: 'block'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)',
      color: 'var(--text-label)',
      maxWidth: 'var(--measure-body)'
    }
  }, caption));
}
Object.assign(__ds_scope, { Reel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Reel.jsx", error: String((e && e.message) || e) }); }

// components/media/Still.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Campaign still. Lazy, no rounding, optional caption. Portrait 4:5 by default. */
function Still({
  src,
  alt = '',
  caption,
  ratio = 'still',
  fit = 'cover',
  style,
  ...rest
}) {
  const ar = ratio === 'reel' ? 'var(--aspect-reel)' : ratio === 'wide' ? 'var(--aspect-wide)' : ratio === 'square' ? '1/1' : 'var(--aspect-still)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gap: 'var(--s-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ar,
      background: 'var(--surface-sunken)',
      overflow: 'hidden',
      borderRadius: 'var(--radius-media)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)',
      color: 'var(--text-label)'
    }
  }, caption));
}
Object.assign(__ds_scope, { Still });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Still.jsx", error: String((e && e.message) || e) }); }

// components/media/StillStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Horizontal scroll strip of stills for execution sections — snaps, no scrollbar
   chrome. Self-contained: it supplies its own gutter inset and must be mounted in a
   <Section bleed>, so it never needs (and must never have) a negative outer margin.
   Falls back to an auto-fit grid when 'grid'. */
function StillStrip({
  items = [],
  mode = 'scroll',
  style,
  ...rest
}) {
  if (mode === 'grid') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))',
        gap: 'var(--s-3)',
        ...style
      }
    }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        aspectRatio: 'var(--aspect-still)',
        overflow: 'hidden',
        background: 'var(--surface-sunken)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: it.src,
      alt: it.alt || '',
      loading: "lazy",
      decoding: "async",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }))));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--s-3)',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollbarWidth: 'none',
      paddingInline: 'var(--gutter)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '0 0 auto',
      width: 'min(62vw,300px)',
      scrollSnapAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: 'var(--aspect-still)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.src,
    alt: it.alt || '',
    loading: "lazy",
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))));
}
Object.assign(__ds_scope, { StillStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/StillStrip.jsx", error: String((e && e.message) || e) }); }

// components/type/DisplayTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Oversized case-study title. Tight leading, negative tracking, wraps hard.
   Size 1 is the page/case-study hero; 2 is a secondary study; 3 is a block head. */
function DisplayTitle({
  children,
  size = 1,
  as = 'h2',
  tone = 'ink',
  balance = false,
  style,
  ...rest
}) {
  const Tag = as;
  const fs = size === 1 ? 'var(--fs-display-1)' : size === 2 ? 'var(--fs-display-2)' : 'var(--fs-display-3)';
  const lh = size === 3 ? 'var(--lh-display-loose)' : 'var(--lh-display)';
  const tr = size === 1 ? 'var(--tr-display)' : 'var(--tr-display-2)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: fs,
      fontWeight: 'var(--fw-semibold)',
      lineHeight: lh,
      letterSpacing: tr,
      color: tone === 'on-media' ? 'var(--text-on-media)' : 'var(--text-display)',
      textWrap: balance ? 'balance' : 'pretty',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { DisplayTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/DisplayTitle.jsx", error: String((e && e.message) || e) }); }

// components/type/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Eyebrow label. Uppercase, letterspaced, quiet. The only place small caps-style
   type appears in the system: section markers, case-study index, meta keys. */
function Label({
  children,
  tone = 'quiet',
  as = 'div',
  index,
  style,
  ...rest
}) {
  const Tag = as;
  const color = tone === 'accent' ? 'var(--text-accent)' : tone === 'on-media' ? 'rgba(250,248,245,.72)' : tone === 'ink' ? 'var(--text-body)' : 'var(--text-label)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      font: 'var(--fw-medium) var(--fs-label)/var(--lh-label) var(--font-core)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color,
      display: 'flex',
      gap: 'var(--s-3)',
      alignItems: 'baseline',
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, index), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Label.jsx", error: String((e && e.message) || e) }); }

// components/layout/ContactBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Page close. One large mailto, quiet supporting lines. */
function ContactBlock({
  label = 'Next',
  line,
  email,
  links = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      display: 'grid',
      gap: 'var(--stack)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement(__ds_scope.Label, null, label), line && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-3)',
      lineHeight: 'var(--lh-display-loose)',
      letterSpacing: 'var(--tr-display-2)',
      fontWeight: 'var(--fw-regular)',
      maxWidth: '22ch',
      textWrap: 'pretty'
    }
  }, line), email && /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-accent-strong)',
      borderBottomColor: 'var(--brass-2)',
      justifySelf: 'start'
    }
  }, email), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-5)',
      flexWrap: 'wrap',
      paddingTop: 'var(--s-3)'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-quiet)',
      border: 0
    }
  }, l.label))));
}
Object.assign(__ds_scope, { ContactBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ContactBlock.jsx", error: String((e && e.message) || e) }); }

// components/layout/IntroBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The swappable top section. Same page serves a cold outreach email, a client
   pitch, or a job application — only this block changes. */
function IntroBlock({
  name = 'Bilal Ghazi',
  discipline,
  statement,
  addressedTo,
  contact,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'grid',
      gap: 'var(--stack)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--s-4)',
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    tone: "ink",
    as: "p",
    style: {
      margin: 0
    }
  }, name), discipline && /*#__PURE__*/React.createElement(__ds_scope.Label, {
    as: "p",
    style: {
      margin: 0
    }
  }, discipline)), /*#__PURE__*/React.createElement(__ds_scope.Rule, null), addressedTo && /*#__PURE__*/React.createElement(__ds_scope.Label, {
    tone: "accent",
    as: "p",
    style: {
      margin: 0
    }
  }, addressedTo), statement && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-3)',
      lineHeight: 'var(--lh-display-loose)',
      letterSpacing: 'var(--tr-display-2)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--text-display)',
      maxWidth: '24ch',
      textWrap: 'pretty'
    }
  }, statement), contact && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-small)',
      color: 'var(--text-quiet)'
    }
  }, contact));
}
Object.assign(__ds_scope, { IntroBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/IntroBlock.jsx", error: String((e && e.message) || e) }); }

// components/type/Passage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A labelled block of reading copy: brief, concept, execution.
   Body is deliberately small and set to a narrow measure. */
function Passage({
  label,
  children,
  lead = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'grid',
      gap: 'var(--stack-tight)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement(__ds_scope.Label, null, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: lead ? 'var(--fs-lead)' : 'var(--fs-body)',
      lineHeight: lead ? 'var(--lh-lead)' : 'var(--lh-body)',
      color: lead ? 'var(--text-body)' : 'var(--text-quiet)',
      maxWidth: lead ? 'var(--measure-lead)' : 'var(--measure-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Passage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Passage.jsx", error: String((e && e.message) || e) }); }

// components/type/ResultLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Every case study ends here: one line, larger than body, brass rule above.
   Never more than one sentence. */
function ResultLine({
  children,
  label = 'Result',
  metric,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      borderTop: 'var(--border-hair) solid var(--rule-strong)',
      paddingTop: 'var(--s-5)',
      display: 'grid',
      gap: 'var(--s-4)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement(__ds_scope.Label, {
    tone: "accent"
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-result)',
      lineHeight: 'var(--lh-result)',
      letterSpacing: 'var(--tr-result)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-display)',
      maxWidth: '30ch',
      textWrap: 'pretty'
    }
  }, metric && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, metric, " "), children));
}
Object.assign(__ds_scope, { ResultLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/ResultLine.jsx", error: String((e && e.message) || e) }); }

// components/case/CaseStudy.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* One case study, in the fixed order the portfolio always uses:
   index + title → meta → hero reel → brief → concept → execution stills → result. */
function CaseStudy({
  index,
  title,
  size = 1,
  meta = [],
  reel,
  brief,
  concept,
  execution,
  stills = [],
  result,
  resultMetric,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    style: {
      display: 'grid',
      gap: 'var(--stack)'
    }
  }, index && /*#__PURE__*/React.createElement(__ds_scope.Label, {
    index: index
  }, "Case study"), /*#__PURE__*/React.createElement(__ds_scope.DisplayTitle, {
    size: size,
    balance: true
  }, title), meta.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.MetaList, {
    items: meta,
    style: {
      maxWidth: '420px'
    }
  }))), reel && /*#__PURE__*/React.createElement(__ds_scope.Section, {
    tone: "media",
    bleed: true,
    tight: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement(__ds_scope.Reel, {
    src: reel.src,
    poster: reel.poster,
    caption: null
  })), reel.caption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--s-4) auto 0',
      paddingInline: 'var(--gutter)',
      maxWidth: 'var(--content-max)',
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)',
      color: 'rgba(250,248,245,.62)'
    }
  }, reel.caption)), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--stack-loose)',
      maxWidth: 'var(--content-max)'
    }
  }, brief && /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement(__ds_scope.Passage, {
    label: "Brief"
  }, brief)), concept && /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(__ds_scope.Passage, {
    label: "Concept"
  }, concept)), execution && /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement(__ds_scope.Passage, {
    label: "Execution"
  }, execution)))), stills.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.Section, {
    bleed: true,
    tight: true,
    style: {
      paddingBlock: 'var(--s-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement(__ds_scope.StillStrip, {
    items: stills
  }))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    tight: true
  }, result && /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement(__ds_scope.ResultLine, {
    metric: resultMetric
  }, result)), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    style: {
      marginTop: 'var(--section-y)'
    }
  })));
}
Object.assign(__ds_scope, { CaseStudy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/PortfolioApp.jsx
try { (() => {
/* Demo harness: phone frame + the swappable-intro control.
   The control is a demo affordance, not part of the shipped page. */
function PortfolioApp() {
  const [variant, setVariant] = React.useState('outreach');
  const [register, setRegister] = React.useState('bold');
  const opts = [['outreach', 'Cold outreach'], ['pitch', 'Client pitch'], ['application', 'Application']];
  const regs = [['quiet', 'Quiet'], ['bold', 'Bold']];
  const btn = on => ({
    font: 'var(--fw-medium) var(--fs-label)/1 var(--font-core)',
    letterSpacing: 'var(--tr-label)',
    textTransform: 'uppercase',
    padding: '7px 11px',
    cursor: 'pointer',
    border: '1px solid ' + (on ? 'var(--brass-1)' : 'var(--rule-hairline)'),
    background: on ? 'var(--brass-3)' : 'transparent',
    color: on ? 'var(--brass-0)' : 'var(--text-quiet)',
    borderRadius: 'var(--radius-1)',
    transition: 'all var(--dur-fast) var(--ease-out)'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
      display: 'flex',
      gap: 'var(--s-5)',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '10px var(--gutter)',
      background: 'rgba(250,248,245,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--rule-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-label)/1 var(--font-core)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)'
    }
  }, "Register"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-3)'
    }
  }, regs.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setRegister(k),
    style: btn(register === k)
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-label)/1 var(--font-core)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)'
    }
  }, "Top section"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-3)'
    }
  }, opts.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setVariant(k),
    style: btn(variant === k)
  }, l)))), register === 'bold' ? /*#__PURE__*/React.createElement(PortfolioPageBold, {
    variant: variant
  }) : /*#__PURE__*/React.createElement(PortfolioPage, {
    variant: variant
  }));
}
Object.assign(window, {
  PortfolioApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/PortfolioApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/PortfolioData.jsx
try { (() => {
/* Content for the one-page portfolio. Copy tone: sentence case, first-person
   plural for the work, no exclamation marks, no emoji. */
const INTRO_VARIANTS = {
  outreach: {
    addressedTo: 'For creative & marketing heads',
    statement: 'I make campaigns that look like the place they came from.',
    contact: 'Karachi · two minutes of your time · scroll'
  },
  pitch: {
    addressedTo: 'For Movement — SS26 planning',
    statement: 'Three drops, one voice, shot on the ground.',
    contact: 'Prepared for Movement · September 2026'
  },
  application: {
    addressedIo: null,
    addressedTo: 'Application — Creative Lead, Apparel',
    statement: 'Concept, direction and edit, usually all three.',
    contact: 'Karachi · open to relocate · reel below'
  }
};
const CASES = [{
  index: '01',
  title: 'Movement × Lyari Drop',
  size: 1,
  meta: [{
    key: 'Client',
    value: 'Movement'
  }, {
    key: 'Role',
    value: 'Concept, direction, edit'
  }, {
    key: 'Year',
    value: '2025'
  }],
  hero: {
    still: '../../assets/campaign/lyari-tee-back.png',
    caption: 'From Lyari to the World — back print, shot at Kakri Ground.'
  },
  brief: 'Movement wanted a capsule tied to a place rather than a trend, launched with no paid media.',
  concept: 'Make it read as Lyari-made, not Lyari-themed. The print is a collage of the neighbourhood — the clock tower, the boxing gym, Kakri Ground — so the garment carries its own location.',
  execution: 'Two days on the ground in black and white. Local cast, no studio, no colour grade beyond contrast. Stills and one cutdown, sequenced so the print is legible before the face is.',
  stills: [{
    src: '../../assets/campaign/movement-tee-portrait.png',
    alt: 'Movement tee portrait'
  }, {
    src: '../../assets/campaign/lyari-tee-back.png',
    alt: 'Lyari back print'
  }, {
    src: '../../assets/campaign/adeel-phone-records.png',
    alt: 'Campaign still'
  }],
  resultMetric: 'Sold through',
  result: 'in nine days, entirely organic.'
}, {
  index: '02',
  title: 'Retro State',
  size: 2,
  meta: [{
    key: 'Client',
    value: 'Retro State'
  }, {
    key: 'Role',
    value: 'Concept, direction, edit'
  }, {
    key: 'Year',
    value: '2025'
  }],
  reel: {
    src: '../../assets/reels/chaos-tee.mp4',
    poster: '../../assets/reels/chaos-tee-poster.png',
    caption: 'The Chaos Tee — ink, records, the mess you still think about.'
  },
  secondReel: {
    src: '../../assets/reels/game-tee.mp4',
    poster: '../../assets/reels/game-tee-poster.png',
    caption: 'The Game Tee — eat, sleep, game, repeat.'
  },
  brief: 'Relaunch a dormant label with two tees, a launch window of three weeks and no media budget.',
  concept: 'One remembered feeling per tee. Game Over for the hours that disappeared in front of a screen; Chaos for the plans that never went as planned. Urdu and English mixed the way they actually get spoken.',
  execution: 'Product floated in an arcade-lit still life — CRT, cartridges, vinyl — with pixel artefacts as the only graphic device. Everything cut for sound off.',
  stills: [{
    src: '../../assets/campaign/gameover-keyart.png',
    alt: 'Game Over key art'
  }, {
    src: '../../assets/campaign/retrostate-pink-shirt.png',
    alt: 'Retro State pink shirt'
  }, {
    src: '../../assets/campaign/retrostate-yellow-shirt.png',
    alt: 'Retro State yellow shirt'
  }, {
    src: '../../assets/campaign/gameover-curtain.png',
    alt: 'Game Over curtain still'
  }, {
    src: '../../assets/campaign/eatgame-controller.png',
    alt: 'Controller still'
  }],
  resultMetric: 'Sold out',
  result: 'in four days, with the restock waitlisted.'
}];
Object.assign(window, {
  INTRO_VARIANTS,
  CASES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/PortfolioData.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/PortfolioPage.jsx
try { (() => {
/* The one page. Assembles design-system components only — no new UI here.
   Reads components off the compiled bundle namespace. */
const DS = window.DesignSystem_1d30d0;
function HeroStill({
  src,
  caption
}) {
  const {
    Section,
    Reveal,
    Reel
  } = DS;
  return /*#__PURE__*/React.createElement(Section, {
    tone: "media",
    bleed: true,
    tight: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: 'var(--aspect-still)',
      maxHeight: 'var(--reel-max-h)',
      margin: '0 auto',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--s-4) auto 0',
      paddingInline: 'var(--gutter)',
      maxWidth: 'var(--content-max)',
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)',
      color: 'rgba(250,248,245,.62)'
    }
  }, caption));
}
function CaseBlock({
  data
}) {
  const {
    Section,
    Reveal,
    Rule,
    MetaList,
    Label,
    DisplayTitle,
    Passage,
    ResultLine,
    Reel,
    StillStrip
  } = DS;
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'grid',
      gap: 'var(--stack)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    index: data.index
  }, "Case study"), /*#__PURE__*/React.createElement(DisplayTitle, {
    size: data.size,
    balance: true
  }, data.title), /*#__PURE__*/React.createElement(MetaList, {
    items: data.meta,
    style: {
      maxWidth: '420px'
    }
  }))), data.reel && /*#__PURE__*/React.createElement(Section, {
    tone: "media",
    bleed: true,
    tight: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Reel, {
    src: data.reel.src,
    poster: data.reel.poster
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--s-4) auto 0',
      paddingInline: 'var(--gutter)',
      maxWidth: 'var(--content-max)',
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)',
      color: 'rgba(250,248,245,.62)'
    }
  }, data.reel.caption)), data.hero && /*#__PURE__*/React.createElement(HeroStill, {
    src: data.hero.still,
    caption: data.hero.caption
  }), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--stack-loose)',
      maxWidth: 'var(--content-max)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Passage, {
    label: "Brief"
  }, data.brief)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Passage, {
    label: "Concept"
  }, data.concept)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement(Passage, {
    label: "Execution"
  }, data.execution)))), /*#__PURE__*/React.createElement(Section, {
    bleed: true,
    tight: true,
    style: {
      paddingBlock: 'var(--s-2)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(StillStrip, {
    items: data.stills
  }))), data.secondReel && /*#__PURE__*/React.createElement(Section, {
    tone: "media",
    bleed: true,
    tight: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Reel, {
    src: data.secondReel.src,
    poster: data.secondReel.poster
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--s-4) auto 0',
      paddingInline: 'var(--gutter)',
      maxWidth: 'var(--content-max)',
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)',
      color: 'rgba(250,248,245,.62)'
    }
  }, data.secondReel.caption)), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ResultLine, {
    metric: data.resultMetric
  }, data.result)), /*#__PURE__*/React.createElement(Rule, {
    style: {
      marginTop: 'var(--section-y)'
    }
  })));
}
function PortfolioPage({
  variant = 'outreach'
}) {
  const {
    Section,
    IntroBlock,
    ContactBlock,
    Reveal
  } = DS;
  const intro = window.INTRO_VARIANTS[variant];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    as: "div"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(IntroBlock, {
    discipline: "Creative direction & content",
    addressedTo: intro.addressedTo,
    statement: intro.statement,
    contact: intro.contact
  }))), window.CASES.map(c => /*#__PURE__*/React.createElement(CaseBlock, {
    key: c.index,
    data: c
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ContactBlock, {
    label: "Next",
    line: "That was two minutes. The rest takes a call.",
    email: "hello@bilalghazi.com",
    links: [{
      label: 'Instagram',
      href: '#'
    }, {
      label: 'Full reel',
      href: '#'
    }, {
      label: 'PDF',
      href: '#'
    }]
  }))));
}
Object.assign(window, {
  PortfolioPage,
  CaseBlock,
  HeroStill
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/PortfolioPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/PortfolioPageBold.jsx
try { (() => {
/* Bold register — same tokens, harder impact. Void opening, viewport-filling
   reels, oversized brass index numerals, result line on the void.
   Still: zero radii, no shadows, fades only. */
const DSB = window.DesignSystem_1d30d0;
function BoldIntro({
  intro
}) {
  const {
    Reveal
  } = DSB;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--void)',
      color: 'var(--text-on-media)',
      minHeight: '100svh',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      paddingInline: 'var(--gutter)',
      paddingBlock: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--s-4)',
      flexWrap: 'wrap',
      font: 'var(--fw-medium) var(--fs-label)/1.1 var(--font-core)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-media)'
    }
  }, "Bilal Ghazi"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(250,248,245,.55)'
    }
  }, "Creative direction & content")), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      alignSelf: 'center',
      display: 'grid',
      gap: 'var(--s-6)',
      paddingBlock: 'var(--s-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-label)/1.1 var(--font-core)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--brass-2)'
    }
  }, intro.addressedTo), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tr-display)',
      color: 'var(--paper-0)',
      maxWidth: '17ch',
      textWrap: 'balance'
    }
  }, intro.statement)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      gap: 'var(--s-5)',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--rule-on-media)',
      paddingTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'rgba(250,248,245,.62)'
    }
  }, intro.contact), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-label)/1.1 var(--font-core)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'rgba(250,248,245,.55)'
    }
  }, "Two case studies")));
}
function BoldReel({
  media,
  isStill
}) {
  const {
    Reveal,
    Reel
  } = DSB;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--void)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100svh',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, isStill ? /*#__PURE__*/React.createElement("img", {
    src: media.still,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement(Reel, {
    src: media.src,
    poster: media.poster,
    style: {
      height: '100%',
      ['--reel-max-h']: '100svh'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      paddingInline: 'var(--gutter)',
      paddingBottom: 'var(--s-6)',
      paddingTop: 'var(--s-9)',
      background: 'var(--media-scrim)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-body)',
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-core)',
      color: 'var(--paper-0)'
    }
  }, media.caption)));
}
function BoldCase({
  data
}) {
  const {
    Section,
    Reveal,
    MetaList,
    Passage,
    StillStrip
  } = DSB;
  const heroIsStill = !data.reel;
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'grid',
      gap: 'var(--stack)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'var(--s-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-3)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: '.9',
      letterSpacing: 'var(--tr-display-2)',
      color: 'var(--brass-1)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, data.index), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: data.size === 1 ? 'var(--fs-display-1)' : 'var(--fs-display-2)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tr-display)',
      color: 'var(--text-display)',
      textWrap: 'balance'
    }
  }, data.title)), /*#__PURE__*/React.createElement(MetaList, {
    items: data.meta,
    style: {
      maxWidth: '460px'
    }
  }))), /*#__PURE__*/React.createElement(BoldReel, {
    media: heroIsStill ? data.hero : data.reel,
    isStill: heroIsStill
  }), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))',
      gap: 'var(--stack-loose)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Passage, {
    label: "Brief"
  }, data.brief)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Passage, {
    label: "Concept"
  }, data.concept)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement(Passage, {
    label: "Execution"
  }, data.execution)))), /*#__PURE__*/React.createElement(Section, {
    bleed: true,
    tight: true,
    style: {
      paddingBlock: 'var(--s-2)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(StillStrip, {
    items: data.stills
  }))), data.secondReel && /*#__PURE__*/React.createElement(BoldReel, {
    media: data.secondReel
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--void)',
      color: 'var(--text-on-media)',
      paddingInline: 'var(--gutter)',
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 'var(--page-max)',
      marginInline: 'auto',
      display: 'grid',
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-label)/1.1 var(--font-core)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--brass-2)'
    }
  }, "Result"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-3)',
      lineHeight: 'var(--lh-display-loose)',
      letterSpacing: 'var(--tr-display-2)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--paper-0)',
      maxWidth: '26ch',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brass-2)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, data.resultMetric, " "), data.result))));
}
function PortfolioPageBold({
  variant = 'outreach'
}) {
  const {
    Section,
    ContactBlock,
    Reveal
  } = DSB;
  const intro = window.INTRO_VARIANTS[variant];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BoldIntro, {
    intro: intro
  }), window.CASES.map(c => /*#__PURE__*/React.createElement(BoldCase, {
    key: c.index,
    data: c
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ContactBlock, {
    label: "Next",
    line: "That was two minutes. The rest takes a call.",
    email: "hello@bilalghazi.com",
    links: [{
      label: 'Instagram',
      href: '#'
    }, {
      label: 'Full reel',
      href: '#'
    }, {
      label: 'PDF',
      href: '#'
    }]
  }))));
}
Object.assign(window, {
  PortfolioPageBold,
  BoldIntro,
  BoldCase,
  BoldReel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/PortfolioPageBold.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CaseStudy = __ds_scope.CaseStudy;

__ds_ns.ContactBlock = __ds_scope.ContactBlock;

__ds_ns.IntroBlock = __ds_scope.IntroBlock;

__ds_ns.MetaList = __ds_scope.MetaList;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Reel = __ds_scope.Reel;

__ds_ns.Still = __ds_scope.Still;

__ds_ns.StillStrip = __ds_scope.StillStrip;

__ds_ns.DisplayTitle = __ds_scope.DisplayTitle;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Passage = __ds_scope.Passage;

__ds_ns.ResultLine = __ds_scope.ResultLine;

})();
