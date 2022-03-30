import React from 'react';
import { HeadingFontStyle } from './enums';
import { joinClassNames } from '../../../utils';
import styles from './styles.scss';

export type HeadingLevel = 1 | 2 | 3;

export type HeadingTag = 'h1' | 'h2' | 'h3';

export const getClassForFontStyle = (fontStyle: HeadingFontStyle) => styles[fontStyle];

export type HeadingProps = {
  level: HeadingLevel;
  renderAs?: HeadingFontStyle;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({ children, level, renderAs, className }) => {
  const ElementTag = `h${level}` as HeadingTag;
  const fontStyle = renderAs || (`heading${level}` as HeadingFontStyle);

  return (
    <ElementTag
      className={joinClassNames(styles.heading, getClassForFontStyle(fontStyle), className)}
    >
      {children}
    </ElementTag>
  );
};

Heading.displayName = 'Heading';
