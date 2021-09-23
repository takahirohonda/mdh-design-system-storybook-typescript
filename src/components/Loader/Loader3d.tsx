import React from 'react';
import styles from './styles.scss';
import { joinClassNames } from '../../utils';

export const Loader3d = (): JSX.Element => (
  <div className={styles.loader3dContainer}>
    <div className={styles.loader3dTopOuter}>
      <div className={styles.loader3dTop}>
        <div className="e1-loader-cube">
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceFront)} />
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceRight)} />
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceBack)} />
        </div>
      </div>
    </div>
    <div>
      <div className={styles.loader3dMiddle}>
        <div className="e1-loader-cube">
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceFront)} />
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceRight)} />
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceBack)} />
        </div>
      </div>
    </div>
    <div className={styles.loader3dBottomOuter}>
      <div className={styles.loader3dBottom}>
        <div className="e1-loader-cube">
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceFront)} />
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceRight)} />
          <div className={joinClassNames(styles.loader3dFace, styles.loader3dFaceBack)} />
        </div>
      </div>
    </div>
  </div>
);
