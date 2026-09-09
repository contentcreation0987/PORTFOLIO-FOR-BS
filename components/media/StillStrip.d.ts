import * as React from 'react';

export interface StillStripItem { src: string; alt?: string }

/**
 * A run of campaign stills. Default is an edge-bleeding snap-scroll strip
 * (right for phones); 'grid' reflows into columns for wider pitch views.
 */
export interface StillStripProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: StillStripItem[];
  mode?: 'scroll' | 'grid';
}
export declare function StillStrip(props: StillStripProps): JSX.Element;
