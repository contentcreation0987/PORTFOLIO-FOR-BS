import * as React from 'react';

/**
 * The hero format: a 9:16 reel that shows its poster frame immediately, attaches
 * its video source only when scrolled near, then autoplays muted and loops.
 * Built for slow mobile data — poster first, video lazy.
 *
 */
export interface ReelProps extends React.HTMLAttributes<HTMLElement> {
  /** Video URL. Not attached to the DOM until the reel is within 400px of the viewport. */
  src: string;
  /** Poster frame — always supply one; it is what most viewers see first. */
  poster?: string;
  caption?: React.ReactNode;
  /** contain (default, letterboxes on the void ground) or cover */
  fit?: 'contain' | 'cover';
  /** Full-bleed: drop the max-height cap and the centering margin */
  full?: boolean;
}
export declare function Reel(props: ReelProps): JSX.Element;
