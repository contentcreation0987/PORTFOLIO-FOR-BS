# UI kit — one-page portfolio

The only surface. A single scrolling page, opened on a phone from an email link,
read in under two minutes.

## Files
- `index.html` — interactive demo. The sticky control at the top swaps the intro
  block between **Cold outreach / Client pitch / Application**; everything below it
  is identical in all three. That control is a demo affordance, not part of the page.
- `one-pager.html` — the page as shipped (no control). Registered as a starting point.
- `PortfolioData.jsx` — copy + asset paths. `INTRO_VARIANTS` and `CASES`.
- `PortfolioPage.jsx` — page assembly. Composes design-system components only.
- `PortfolioApp.jsx` — demo harness.

## Order, fixed
intro → case 01 → case 02 → contact. Each case study runs
index + title → meta → reel/hero → brief → concept → execution stills → result line.
Never reorder within a case; the result line is always last and always larger than body.

## Notes on the source material
- **Case 01 (Movement × Lyari Drop) has no reel.** No 9:16 video for this campaign was
  supplied, so the hero slot uses the full-bleed 4:5 back-print still instead. Drop a
  reel into `assets/reels/` and give `CASES[0]` a `reel` key to restore the intended
  hero format.
- Reels are the two supplied Retro State / Movement gaming films. Poster frames were
  extracted from the video at ~0.6s and live beside each `.mp4`.
- `assets/campaign/adeel-*.png` (Movement × Adeel uz Zafar) are unused — the brief
  settled on two case studies. One still is borrowed into case 01's execution strip.
