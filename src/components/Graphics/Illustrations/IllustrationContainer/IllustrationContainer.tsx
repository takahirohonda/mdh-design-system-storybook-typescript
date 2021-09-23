import React, { SVGAttributes } from 'react';
import { joinClassNames } from '../../../../utils';
import { IllustrationSize } from './enums';
import styles from './styles.scss';

export { IllustrationSize };

export type IllustrationContainerProps = {
  size?: IllustrationSize;
};

export const IllustrationContainer: React.FC<IllustrationContainerProps> = ({
  children,
  size = IllustrationSize.Small,
}) => <div className={styles[size]}>{children}</div>;
