A complete case study in the portfolio's fixed sequence — title, credits, hero reel, brief → concept → execution, stills, one result line.

```jsx
<CaseStudy
  index="01" size={1} title="Movement × Lyari Drop"
  meta={[{key:'Client',value:'Movement'},{key:'Role',value:'Creative direction, content'},{key:'Year',value:'2026'}]}
  reel={{src:'assets/reels/reel-01.mp4', poster:'assets/campaign/lyari-tee-back.png', caption:'Reel 01 — Kakri Ground'}}
  brief="…" concept="…" execution="…"
  stills={[{src:'assets/campaign/lyari-tee-back.png'}]}
  resultMetric="1.4M" result="organic views in ten days; the drop sold through before paid started."
/>
```

Never reorder the stages and never ship a study without `result`. Use `size={1}` for the hero study only.
