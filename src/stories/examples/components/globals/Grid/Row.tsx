import React from 'react';
import { OneOrMoreReactElements } from '../../../types';
import { ColProps } from './Col';
import styles from './styles.scss';

export type RowProps = {
  children: OneOrMoreReactElements<ColProps>;
}

export const Row: React.FC<RowProps> = ({ children }) => (
  <div className={styles.row}>
    {children}
  </div>
);
