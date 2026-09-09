import * as React from 'react';

export interface ContactLink { label: string; href: string }

/**
 * Page close: one line of intent, one mailto set large in brass, quiet links.
 * No form, no CTA button — this is a portfolio, not a funnel.
 */
export interface ContactBlockProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  line?: React.ReactNode;
  email?: string;
  links?: ContactLink[];
}
export declare function ContactBlock(props: ContactBlockProps): JSX.Element;
