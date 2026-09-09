import * as React from 'react';

/**
 * The closing line of a case study — set larger than body copy, above a hairline,
 * labelled in brass. Exactly one per case study, exactly one sentence.
 */
export interface ResultLineProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Eyebrow, default "Result". Pass empty string to suppress. */
  label?: string;
  /** Optional leading figure rendered in brass, e.g. "1.4M" */
  metric?: string;
}
export declare function ResultLine(props: ResultLineProps): JSX.Element;
