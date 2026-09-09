# Bilal Ghazi — Design System

Freelance creative direction and content. The whole brand is one artifact: a
single-page, mobile-first portfolio that presents campaign case studies in a
fixed **brief → concept → execution → result** order.

**Audience:** creative and marketing heads at fashion and apparel brands, opening
a link from an email on a phone, giving it under two minutes.

**The governing idea:** the client's campaign work is loud — pixel magentas, arcade
blues, Lyari monochrome. The system around it is not. Warm paper, near-black ink,
one brass accent, hairline rules, and a type scale that goes from very small to
very large with almost nothing in between. The layout exists to frame 9:16 reels
and campaign stills, never to compete with them.

Reference for restraint, white space and type scale only: **seed.com** — its
scroll animation is explicitly *not* adopted.

---

## Sources given

| Source | What it was | Status |
|---|---|---|
| `uploads/bs.rar` | Named in the original brief | **Never arrived** — the uploads folder was empty and `.rar` is not readable here |
| 5 × `.mp4` Instagram exports | Reels | Received. **3 of the 5 are unrelated** (see below) |
| 15 × `.png` screenshots | Campaign stills, screen-captured from Instagram | Received; cropped into `assets/campaign/` |
| Colour reference | Accent `#A16207` | Confirmed by the user |
| Type direction | "Grotesque sans, tight and very large" | Confirmed by the user |
| Logo | — | **None supplied.** The name is set in plain type; no mark was drawn |

No codebase, Figma file, or font binaries were provided. There is therefore no
prior component inventory to mirror — the component set below was authored from
the brief, which is the from-scratch case.

### Two things to know about the source media

1. **Three of the five reels are the wrong content.** `realestate-01/02/03` in
   `assets/reels/_unrelated/` are US residential property walkthroughs with
   kinetic captions — no connection to the apparel campaigns. They were moved
   aside rather than deleted. The two usable films are `chaos-tee.mp4` and
   `game-tee.mp4` (Retro State / Movement gaming capsule).
2. **The hero case study has no reel.** Movement × Lyari Drop is represented by
   stills only, so its hero slot uses a full-bleed 4:5 still. See
   `ui_kits/portfolio/README.md`.

All stills are screen captures of Instagram posts, so several carry residual app
chrome (carousel dots, tagged-user badges). They are placeholders for the real
exports.

---

## Index

**Root**
- `styles.css` — the entry point consumers link. `@import` list only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills wrapper.
- `readme.md` — this file.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`motion.css`, `media.css`, `base.css` (element resets + link states).

**`components/`**
- `type/` — **DisplayTitle**, **Label**, **Passage**, **ResultLine**
- `layout/` — **Section**, **IntroBlock**, **MetaList**, **Rule**, **Reveal**, **ContactBlock**
- `media/` — **Reel**, **Still**, **StillStrip**
- `case/` — **CaseStudy** (composes the rest into the fixed case-study order)

**`ui_kits/portfolio/`** — the one product surface. `index.html` is the
interactive demo; `one-pager.html` is the shipped page and a registered starting
point.

**`guidelines/`** — 16 specimen cards (Colors, Type, Spacing, Motion, Media, Brand).

**`assets/`** — `campaign/` stills, `reels/` films + extracted poster frames,
`reels/_unrelated/` quarantined footage. **`reference/`** — seed.com screenshots.

### Intentional additions
- **Reveal** — a scroll-in fade wrapper. Added because the motion budget is a
  *rule* ("fades and simple reveals only"), and a single component is the only
  way to make that rule enforceable rather than advisory.
- **IntroBlock** — isolated as its own component purely so the top section is
  swappable per recipient, as the brief requires.

---

## Content fundamentals

**Register: editorial fashion, not portfolio template.** Copy reads like a
lookbook caption or an exhibition wall label — declarative, slightly literary,
never salesy.

**Person.** *I* for the practitioner (`"I make campaigns that look like the place
they came from."`). *We* for the work as executed (`"We shot on the ground in
Lyari over two days."`). *You* is almost never used, and never as a hook — no
"you'll love", no "imagine if". The reader is addressed once, in the intro's
`addressedTo` line, and then left alone.

**Casing.** Sentence case everywhere except labels. Labels — `BRIEF`, `CONCEPT`,
`EXECUTION`, `RESULT`, `CASE STUDY` — are uppercase with 0.16em tracking, and
they are the *only* uppercase type in the system. Case-study titles are sentence
case even at 10rem: "Movement × Lyari Drop", not "MOVEMENT × LYARI DROP".

**Sentence shape.** Short. One idea each. Fragments are allowed and encouraged
when they land harder: `"Sold out in four days."` `"Make it read as Lyari-made,
not Lyari-themed."` The em dash carries asides — `"the clock tower, the boxing
gym, Kakri Ground — so the garment carries its own location"`. Semicolons are
used sparingly to hold two halves of a contrast.

**The result line is a genre of its own.** Exactly one sentence, never two. It
leads with the metric in brass, then finishes flat and unemphatic: **"Sold out**
in four days, with the restock waitlisted." Never a percentage without a base,
never a vanity number, never an exclamation mark. If there is no honest number,
the line states the outcome in words instead — a missing result line is better
than an invented one.

**Numbers.** Tabular figures, spelled out under ten in prose ("nine days", "two
days") but numeric in metrics and meta ("2025", "3.1M").

**Client voice is quoted, not adopted.** The campaigns themselves speak louder
and warmer — `"The Game Over Tee takes us back to when hours disappeared in front
of a screen"`, `"Because sometimes, the chaos is the part you miss the most."`
That voice belongs to the artwork and appears only inside stills and reels. The
page's own captions stay cooler: `"The Chaos Tee — ink, records, the mess you
still think about."`

**Bilingual reality.** Urdu-English code-switching is a *subject* the copy
describes ("Urdu and English mixed the way they actually get spoken") rather than
a device the interface performs. UI copy is English.

**No emoji. Ever.** Not in the interface, not in captions, not in the contact
block. The campaign artwork's pixel hearts and Pac-Man ghosts are imagery, not
type. The only non-alphabetic characters in running copy are `×` (in campaign
titles: "Movement × Adeel uz Zafar"), `·` (as a separator in meta lines:
"Karachi · available Q4"), and `—`.

**Length discipline.** Brief ≤ 2 sentences, concept ≤ 3, execution ≤ 3, result
exactly 1. A passage that needs a fourth sentence is a sign the case study is
carrying two ideas.

---

## Visual foundations

### Colour
Warm off-white paper (`--paper-0` `#FAF8F5`), never `#fff`. Ink from `#0E0D0B`
(display) through `#2A2823` (body), `#5C574E` (quiet supporting copy) to
`#8E887D` (labels) — never `#000`. One accent only: **brass / ochre**, `#A16207`.

Brass appears in exactly four places: the result-line metric, the result label,
the case-study index numeral, and the contact `mailto`. Nothing else is ever
brass. If a fifth use appears, one of the first four is wrong.

Full-bleed media sections invert to `--void` `#0A0908` — a warm near-black, not
the same value as the ink, so a still on the void never looks like it is sitting
on text. Captions over the void run at 62% paper, never full white.

### Imagery
Two registers coexist deliberately. Lyari is **monochrome** — high contrast, no
grade beyond contrast, grain from the source rather than added. Retro State is
**saturated arcade** — magenta, cyan, warm orange against light grey seamless.
No global tint, no duotone, no filter is ever applied by the layout
(`--media-tint: none`). Crops are honest: contain for reels so nothing is cut,
cover only for the still strip where the frame is decorative.

### Type
**Archivo** — one family, variable weight and width. Display sizes use 600 with
`-0.045em` tracking and `0.88` line-height, so titles set as tight optical blocks
that wrap hard. Body is **15px** — deliberately small and quiet — at `1.62`
line-height on a 34ch measure. The gap between 15px body and a 10rem title *is*
the design; there is no comfortable mid-scale, and adding one would soften the
whole thing.

The intro statement and the contact line are the exception: display size but
`400` weight, so they read as speech rather than as headline.

### Layout
Mobile-first, single column, one page. `--gutter` is `clamp(20px, 5.5vw, 72px)`;
content maxes at 640px, page at 1180px. Vertical rhythm has four steps only:
`--stack-tight` (12px, label to its copy), `--stack` (24px, block to block),
`--stack-loose` (48px, passage to passage), `--section-y`
(`clamp(72px, 14vw, 176px)`, section to section). Nothing is fixed or sticky in
the shipped page — no floating nav, no back-to-top, no progress bar. The only
sticky element anywhere is the intro-variant control in the demo harness.

### Borders, corners, shadows, cards
**Radii are zero.** `--radius-media: 0px`. Media is square-cornered; the only
non-zero radius in the system is `2px`, used on the demo control buttons.

**There are no shadows.** No `box-shadow` token exists. Depth is expressed by
ground inversion (paper → void), not by elevation.

**There are no cards.** Content is separated by 1px hairline rules
(`rgba(14,13,11,.14)`) and by whitespace. `--rule-strong` (34% ink) marks the
result line, the one structural boundary that matters. `--rule-on-media` is 22%
paper. A boxed, bordered, or shadowed container would read as a portfolio
template, which is the thing this brand is defined against.

### Transparency, blur, scrims
Used in three places and nowhere else: the media scrim
(`--media-scrim`, a bottom-up void gradient at 72% → 0, for type over film),
caption text at 62% paper on the void, and an 8px backdrop blur on the demo
control bar. No frosted panels, no glass, no capsule chips behind text — where
type must sit on an image, it gets the gradient scrim, not a capsule.

### Motion
The entire system is: **fade from 0 to 1 plus a 14px rise, 640ms,
`cubic-bezier(.22,.61,.36,1)`, once, on scroll into view.** Siblings stagger by
80ms. A revealed element never re-animates on scroll back. That is all — no
parallax, no scroll-jacking, no page transitions, no counters, no marquees, no
character-by-character text reveals. `prefers-reduced-motion` collapses the
duration to 1ms and the shift to 0.

### States
- **Hover:** opacity to `.62` over 140ms, and a link's bottom border shifts to
  brass. No colour change on text, no underline animation, no scale.
- **Press:** opacity to `.5`. Nothing shrinks or translates.
- **Focus:** 1px brass outline at 3px offset. Never removed.
- **Selection:** `--brass-3` (`#F0E4CE`) behind ink.

### Media behaviour
9:16 is the hero format. A reel paints its poster frame immediately, attaches its
`src` only when it comes within 400px of the viewport, then plays **muted, looped,
`playsInline`, `preload="none"`**, autoplaying at 40% visibility and pausing when
it leaves. Stills are `loading="lazy"` and `decoding="async"`. This is a hard
performance requirement, not a nicety — the page is opened on Pakistani mobile
data and the poster-first path is what makes it readable before the video exists.

---

## Iconography

**There is none, by design, and this is the intended state — not a gap.**

The source material contains no icon set, no icon font, no SVG sprite, and no
brand mark. The interface's entire vocabulary is type, hairline rules and media.
Where a portfolio template would use icons the system uses words instead:
uppercase labels (`RESULT`) do the work of a badge; the brass index numeral
(`01`) does the work of a bullet; `·` separates meta values; `×` joins
collaborators in a title. Social links in the contact block are **text**
("Instagram", "Full reel", "PDF"), not glyphs.

No CDN icon library is linked, and none should be added — importing Lucide or
Heroicons would introduce a stroke weight and corner language the brand does not
have. If a future surface genuinely needs a glyph (a play affordance on a
non-autoplaying video, say), request it as artwork rather than substituting a
library; and if one is substituted, it must be documented here as a substitution.

**Emoji are never used.** Unicode characters are used as typographic marks only
(`×`, `·`, `—`, `↕` in documentation) — never as pictograms.

**Logo:** none exists. Wherever a mark would go, the name is set in Archivo — 600
weight, `-0.045em`, sentence case. Two lockups are defined in
`guidelines/brand-wordmark.card.html`: display (52px+, standalone) and header
(label size, name in `--text-body`, discipline opposite). **Do not draw, generate,
or approximate a mark.**

---

## Substitutions to confirm

- **Archivo (Google Fonts)** stands in for the requested "grotesque sans, tight
  and very large". No font binaries were supplied. Archivo is a close structural
  match — variable weight and width, tight apertures, editorial-neutral — but if
  there is a licensed family behind this brand, swap `tokens/fonts.css` and
  re-check the display tracking, which is tuned to Archivo's sidebearings.
- **Poster frames** were extracted programmatically at ~0.6s into each film.
  They are functional, not art-directed; replace them with chosen frames.
- **Campaign stills** are Instagram screen captures and carry app chrome.
  Replace with original exports.
