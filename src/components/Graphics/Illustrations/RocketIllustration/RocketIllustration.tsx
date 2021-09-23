import React, { SVGAttributes } from 'react';
import { joinClassNames } from '../../../../utils';
import { IllustrationContainer, IllustrationContainerProps } from '../IllustrationContainer';
import styles from './styles.scss';

export type RocketIllustrationProps = SVGAttributes<SVGElement> &
  Omit<IllustrationContainerProps, 'children'> & {
    title?: string;
    desc?: string;
  };

export const RocketIllustration: React.VFC<RocketIllustrationProps> = ({
  title,
  desc,
  className,
  ...props
}) => (
  <IllustrationContainer {...props}>
    <svg
      className={joinClassNames(styles.default, className)}
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="61"
      viewBox="0 0 61 61"
    >
      {title && <title>{title}</title>}
      {desc && <desc>{desc}</desc>}
      <path
        d="M31.5763 11.0229C24.0083 7.76353 14.3066 9.77278 7.18164 18.841L15.9052 27.5671"
        stroke="#0bab64"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M49.9778 29.4233C53.2372 36.9914 51.228 46.693 42.1598 53.818L33.4336 45.0945"
        stroke="#0bab64"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M26.6133 48.6364L12.3633 34.3864C12.3633 34.3864 23.8851 3.83177 58.9996 2C57.015 36.9617 26.6133 48.6364 26.6133 48.6364Z"
        stroke="#0bab64"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M37.9484 27.3422C40.8103 27.3422 43.1302 25.0222 43.1302 22.1603C43.1302 19.2985 40.8103 16.9785 37.9484 16.9785C35.0866 16.9785 32.7666 19.2985 32.7666 22.1603C32.7666 25.0222 35.0866 27.3422 37.9484 27.3422Z"
        stroke="#0bab64"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M5.192 46.6467C6.40688 45.4318 8.05462 44.7493 9.77273 44.7493C11.4908 44.7493 13.1386 45.4318 14.3535 46.6467C15.5683 47.8616 16.2509 49.5093 16.2509 51.2274C16.2509 52.9455 15.5683 54.5932 14.3535 55.8081C11.8234 58.3368 2 59.0001 2 59.0001C2 59.0001 2.66327 49.1767 5.192 46.6467Z"
        stroke="#0bab64"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  </IllustrationContainer>
);

RocketIllustration.displayName = 'RocketIllustration';
