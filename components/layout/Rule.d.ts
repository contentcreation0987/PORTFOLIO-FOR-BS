import * as React from 'react';

/** A 1px hairline. The system's only ornament — no shadows, no boxes. */
export interface RuleProps extends React.HTMLAttributes<HTMLHRElement> {
  tone?: 'hairline' | 'strong' | 'accent' | 'on-media';
}
export declare function Rule(props: RuleProps): JSX.Element;
