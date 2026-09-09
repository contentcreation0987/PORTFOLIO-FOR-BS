Wraps every band of the page — owns gutter, vertical rhythm and max measure so nothing else sets page padding.

```jsx
<Section><DisplayTitle size={1}>Retro State</DisplayTitle></Section>
<Section tone="media" bleed><Reel src="..." poster="..." full /></Section>
```

Use `tone="media"` + `bleed` for full-bleed reel bands; keep at most one raised section per page.
