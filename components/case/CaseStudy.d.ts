import * as React from 'react';
import type { MetaItem } from '../layout/MetaList';
import type { StillStripItem } from '../media/StillStrip';

export interface CaseStudyReel { src: string; poster?: string; caption?: React.ReactNode }

/**
 * A whole case study in the portfolio's fixed order: index + oversized title,
 * credits, full-bleed 9:16 reel, brief → concept → execution, stills, one result
 * line. Composes the primitives; do not reorder the stages.
 *
 * @startingPoint section="Layout" subtitle="Full case study, brief → result" viewport="420x900"
 */
export interface CaseStudyProps extends React.HTMLAttributes<HTMLElement> {
  /** Two-digit index, e.g. "01" */
  index?: string;
  title: React.ReactNode;
  /** 1 for the hero study, 2 for subsequent ones */
  size?: 1 | 2 | 3;
  meta?: MetaItem[];
  reel?: CaseStudyReel;
  brief?: React.ReactNode;
  concept?: React.ReactNode;
  execution?: React.ReactNode;
  stills?: StillStripItem[];
  /** One sentence. Required in practice — every study ends on a result. */
  result?: React.ReactNode;
  /** Leading brass figure for the result line */
  resultMetric?: string;
}
export declare function CaseStudy(props: CaseStudyProps): JSX.Element;
