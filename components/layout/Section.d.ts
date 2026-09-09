import * as React from 'react';

/**
 * Page section wrapper: applies the page gutter, the section rhythm and the
 * page-max measure. Every band of the one-pager is a Section.
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** page (paper, default) | raised (paper-1) | media (void ground, light text) */
  tone?: 'page' | 'raised' | 'media';
  /** Remove the horizontal gutter — for full-bleed reels */
  bleed?: boolean;
  /** Shorter vertical padding */
  tight?: boolean;
  as?: keyof JSX.IntrinsicElements;
}
export declare function Section(props: SectionProps): JSX.Element;
