/* Content for the one-page portfolio. Copy tone: sentence case, first-person
   plural for the work, no exclamation marks, no emoji. */
const INTRO_VARIANTS = {
  outreach: {
    addressedTo: 'For creative & marketing heads',
    statement: 'I make campaigns that look like the place they came from.',
    contact: 'Karachi · two minutes of your time · scroll',
  },
  pitch: {
    addressedTo: 'For Movement — SS26 planning',
    statement: 'Three drops, one voice, shot on the ground.',
    contact: 'Prepared for Movement · September 2026',
  },
  application: {
    addressedIo: null,
    addressedTo: 'Application — Creative Lead, Apparel',
    statement: 'Concept, direction and edit, usually all three.',
    contact: 'Karachi · open to relocate · reel below',
  },
};

const CASES = [
  {
    index: '01',
    title: 'Movement × Lyari Drop',
    size: 1,
    meta: [
      { key: 'Client', value: 'Movement' },
      { key: 'Role', value: 'Concept, direction, edit' },
      { key: 'Year', value: '2025' },
    ],
    hero: { still: '../../assets/campaign/lyari-tee-back.png', caption: 'From Lyari to the World — back print, shot at Kakri Ground.' },
    brief: 'Movement wanted a capsule tied to a place rather than a trend, launched with no paid media.',
    concept: 'Make it read as Lyari-made, not Lyari-themed. The print is a collage of the neighbourhood — the clock tower, the boxing gym, Kakri Ground — so the garment carries its own location.',
    execution: 'Two days on the ground in black and white. Local cast, no studio, no colour grade beyond contrast. Stills and one cutdown, sequenced so the print is legible before the face is.',
    stills: [
      { src: '../../assets/campaign/movement-tee-portrait.png', alt: 'Movement tee portrait' },
      { src: '../../assets/campaign/lyari-tee-back.png', alt: 'Lyari back print' },
      { src: '../../assets/campaign/adeel-phone-records.png', alt: 'Campaign still' },
    ],
    resultMetric: 'Sold through',
    result: 'in nine days, entirely organic.',
  },
  {
    index: '02',
    title: 'Retro State',
    size: 2,
    meta: [
      { key: 'Client', value: 'Retro State' },
      { key: 'Role', value: 'Concept, direction, edit' },
      { key: 'Year', value: '2025' },
    ],
    reel: { src: '../../assets/reels/chaos-tee.mp4', poster: '../../assets/reels/chaos-tee-poster.png', caption: 'The Chaos Tee — ink, records, the mess you still think about.' },
    secondReel: { src: '../../assets/reels/game-tee.mp4', poster: '../../assets/reels/game-tee-poster.png', caption: 'The Game Tee — eat, sleep, game, repeat.' },
    brief: 'Relaunch a dormant label with two tees, a launch window of three weeks and no media budget.',
    concept: 'One remembered feeling per tee. Game Over for the hours that disappeared in front of a screen; Chaos for the plans that never went as planned. Urdu and English mixed the way they actually get spoken.',
    execution: 'Product floated in an arcade-lit still life — CRT, cartridges, vinyl — with pixel artefacts as the only graphic device. Everything cut for sound off.',
    stills: [
      { src: '../../assets/campaign/gameover-keyart.png', alt: 'Game Over key art' },
      { src: '../../assets/campaign/retrostate-pink-shirt.png', alt: 'Retro State pink shirt' },
      { src: '../../assets/campaign/retrostate-yellow-shirt.png', alt: 'Retro State yellow shirt' },
      { src: '../../assets/campaign/gameover-curtain.png', alt: 'Game Over curtain still' },
      { src: '../../assets/campaign/eatgame-controller.png', alt: 'Controller still' },
    ],
    resultMetric: 'Sold out',
    result: 'in four days, with the restock waitlisted.',
  },
];

Object.assign(window, { INTRO_VARIANTS, CASES });
