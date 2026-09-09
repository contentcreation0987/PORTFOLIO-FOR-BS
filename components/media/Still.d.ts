import * as React from 'react';

/**
 * A single campaign still. Square-cornered, lazy-loaded, sitting on the sunken
 * paper tone while it loads.
 */
export interface StillProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  caption?: React.ReactNode;
  /** still = 4:5 (default), reel = 9:16, wide = 3:2, square = 1:1 */
  ratio?: 'still' | 'reel' | 'wide' | 'square';
  fit?: 'cover' | 'contain';
}
export declare function Still(props: StillProps): JSX.Element;
