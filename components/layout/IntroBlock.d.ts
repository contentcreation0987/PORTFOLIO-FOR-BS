import * as React from 'react';

/**
 * The swappable top section of the one-pager. Everything below it is fixed
 * case-study content; this block is retargeted per recipient — a brand pitch, a
 * cold outreach email, a job application.
 *
 */
export interface IntroBlockProps extends React.HTMLAttributes<HTMLElement> {
  /** Rendered in plain type — the brand has no logo mark. */
  name?: string;
  /** Right-hand eyebrow, e.g. "Creative direction & content" */
  discipline?: string;
  /** The one large statement. Keep under ~20 words. */
  statement?: React.ReactNode;
  /** Brass eyebrow naming the recipient, e.g. "For Outfitters — Spring 26" */
  addressedTo?: string;
  /** Small quiet line: email, city, availability */
  contact?: React.ReactNode;
}
export declare function IntroBlock(props: IntroBlockProps): JSX.Element;
