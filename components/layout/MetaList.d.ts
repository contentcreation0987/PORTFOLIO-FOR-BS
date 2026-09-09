import * as React from 'react';

export interface MetaItem { key: string; value: React.ReactNode }

/**
 * Credit block for a case study — client, role, format, year. Uppercase keys on
 * hairlines, values in small ink with tabular figures.
 */
export interface MetaListProps extends React.HTMLAttributes<HTMLDListElement> {
  items?: MetaItem[];
  tone?: 'page' | 'media';
}
export declare function MetaList(props: MetaListProps): JSX.Element;
