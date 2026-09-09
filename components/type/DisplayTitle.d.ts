import * as React from 'react';

/**
 * The oversized grotesque title. One per case study, set as large as the
 * viewport allows; body copy stays small and quiet underneath it.
 *
 */
export interface DisplayTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  /** 1 = hero (clamp to 10rem), 2 = secondary study, 3 = block heading */
  size?: 1 | 2 | 3;
  as?: keyof JSX.IntrinsicElements;
  tone?: 'ink' | 'on-media';
  /** text-wrap: balance instead of pretty — for 2–4 word titles */
  balance?: boolean;
}
export declare function DisplayTitle(props: DisplayTitleProps): JSX.Element;
