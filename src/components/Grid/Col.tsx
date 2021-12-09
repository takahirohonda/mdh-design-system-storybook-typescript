/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { joinClassNames } from '../../utils';
import styles from './styles.scss';
import { ExcludeBottomGutter, OffsetOptions, ResponsiveBreakpoints, SpanOptions } from './types';

export type ColProps = {
  alignContentX?: 'left' | 'center' | 'right';
  alignContentY?: 'top' | 'center' | 'bottom';
  excludeBottomGutter?: ExcludeBottomGutter | ResponsiveBreakpoints<ExcludeBottomGutter>;
  offset?: OffsetOptions | ResponsiveBreakpoints<OffsetOptions>;
  span?: SpanOptions | ResponsiveBreakpoints<SpanOptions>;
}

type CssClass = keyof typeof styles;

const getSpanClasses = (
  value?: SpanOptions | ResponsiveBreakpoints<SpanOptions>,
) => {
  const classes: string[] = [];
  const prefix = 'col';

  if (typeof value === 'number' || value === 'auto') {
    return styles[`${prefix}--${value}` as CssClass];
  }

  if (value && typeof value === 'object') {
    const { sm, md, lg } = value;

    if (lg) {
      classes.push(styles[`${prefix}-lg--${lg}` as CssClass]);
    }
    if (md || lg) {
      classes.push(styles[`${prefix}-md--${md || 12}` as CssClass]);
    }
    if (sm || md || lg) {
      classes.push(styles[`${prefix}-sm--${sm || 12}` as CssClass]);
    }
  }

  return joinClassNames(...classes);
};

const getOffsetClasses = (
  value: OffsetOptions | ResponsiveBreakpoints<OffsetOptions>,
) => {
  const classes = [] as string[];
  const prefix = 'offset';

  if (typeof value === 'number') {
    return styles[`${prefix}--${value}` as CssClass];
  }

  if (value && typeof value === 'object') {
    // @ts-ignore
    if (value.sm >= 0) {
      classes.push(styles[`${prefix}-sm--${value.sm}` as CssClass]);
    }
    // @ts-ignore
    if (value.md >= 0) {
      classes.push(styles[`${prefix}-md--${value.md}` as CssClass]);
    }
    // @ts-ignore
    if (value.lg >= 0) {
      classes.push(styles[`${prefix}-lg--${value.lg}` as CssClass]);
    }
  }

  return joinClassNames(...classes);
};

const getGutterExclusionClasses = (
  value?: ExcludeBottomGutter | ResponsiveBreakpoints<ExcludeBottomGutter>,
) => {
  const classes = [] as string[];
  const prefix = 'excludeBottomGutter';

  if (typeof value === 'boolean') {
    return value && styles[prefix];
  }

  if (value && typeof value === 'object') {
    if (value.sm) {
      classes.push(styles[`${prefix}--sm` as CssClass]);
    }
    if (value.md) {
      classes.push(styles[`${prefix}--md` as CssClass]);
    }
    if (value.lg) {
      classes.push(styles[`${prefix}--lg` as CssClass]);
    }
  }

  return joinClassNames(...classes);
};

export const Col: React.FC<ColProps> = ({
  children,
  alignContentX = null,
  alignContentY = null,
  excludeBottomGutter = false,
  offset = null,
  span = null,
}) => (
  <div className={
    joinClassNames(
      styles.col,
      // @ts-ignore
      getSpanClasses(span),
      // @ts-ignore
      getOffsetClasses(offset),
      // @ts-ignore
      alignContentX && styles[`align__x--${alignContentX}` as CssClass],
      alignContentY && styles[`align__y--${alignContentY}` as CssClass],
      getGutterExclusionClasses(excludeBottomGutter),
    )
  }>
    {children}
  </div>
);
