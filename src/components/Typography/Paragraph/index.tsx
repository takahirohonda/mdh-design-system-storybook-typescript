import React from 'react';
import { ParagraphVariant } from './enums';
import { joinClassNames } from '../../../utils';
import styles from './styles.scss';

export type ParagraphProps = {
  /**
   * ParagraphVariant enum (`ParagraphVariant.Intro` etc).
   */
  variant: ParagraphVariant;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, variant }) => (
  <p className={joinClassNames(styles.paragraph, styles[variant])}>{children}</p>
);
