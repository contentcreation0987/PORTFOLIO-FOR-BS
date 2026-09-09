import * as React from 'react';

/**
 * Fade-and-rise on first scroll into view — the only animation in the system.
 * No parallax, no pinning, no page transitions. Fires once.
 */
export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Stagger in ms. Use multiples of --reveal-stagger (80). Never above ~240. */
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}
export declare function Reveal(props: RevealProps): JSX.Element;
