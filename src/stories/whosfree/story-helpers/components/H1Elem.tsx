import React from 'react';
import styles from './styles/styles.scss';

export type H1ElemProps = {
  text: 'string';
}

export const H1Elem: React.FC<H1ElemProps> = ({ text }) => (
  <h1 className={styles.borderWithFilledPrimary}>{text}</h1>
);
