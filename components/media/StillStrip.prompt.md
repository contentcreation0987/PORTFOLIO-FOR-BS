A run of stills for the execution stage — snap-scrolls off the right edge on a phone, or set `mode="grid"` for a pitch deck view.

```jsx
<StillStrip items={[{src:'assets/campaign/retrostate-pink-shirt.png'},{src:'assets/campaign/retrostate-yellow-shirt.png'}]} />
```

The scroll variant supplies its own gutter inset, so it must be mounted inside a `<Section bleed>` (or any zero-padding parent). Never wrap it in a gutter-padded container and never give it a negative `marginInline` — that pushes the strip past the viewport and makes the whole page pan sideways.
