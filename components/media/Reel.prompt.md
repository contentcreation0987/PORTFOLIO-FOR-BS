The primary content unit — a 9:16 reel, muted, looping, autoplaying on scroll into view, with the poster frame carrying the first paint.

```jsx
<Reel src="assets/reels/reel-01.mp4" poster="assets/campaign/lyari-tee-back.png" caption="Reel 01 — Kakri Ground, 4am call time" />
<Reel src="..." poster="..." full fit="cover" />
```

Always pass `poster`. Use `full` for a full-bleed section hero; default is centred and height-capped so it fits one phone screen.
