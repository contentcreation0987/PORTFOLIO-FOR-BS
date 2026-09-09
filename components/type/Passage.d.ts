import * as React from 'react';

/**
 * Label + body copy. The workhorse of a case study: brief, concept, execution.
 * Copy is small, quiet and held to a narrow measure so the media dominates.
 */
export interface PassageProps extends React.HTMLAttributes<HTMLElement> {
  /** Eyebrow above the copy, e.g. "Brief" */
  label?: string;
  children?: React.ReactNode;
  /** Larger, darker, shorter measure — for a single opening statement */
  lead?: boolean;
}
export declare function Passage(props: PassageProps): JSX.Element;
