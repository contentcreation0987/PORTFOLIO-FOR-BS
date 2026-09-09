import * as React from 'react';

/**
 * Uppercase letterspaced eyebrow. Marks a block ("BRIEF", "CONCEPT") or carries
 * a case-study index number. Never used for reading copy.
 */
export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** quiet = --text-label (default), ink = body ink, accent = brass, on-media = over video/photo */
  tone?: 'quiet' | 'ink' | 'accent' | 'on-media';
  as?: keyof JSX.IntrinsicElements;
  /** Optional leading index, rendered in brass — e.g. "01" */
  index?: string | number;
}
export declare function Label(props: LabelProps): JSX.Element;
