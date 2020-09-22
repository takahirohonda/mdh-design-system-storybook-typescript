import React from 'react';
import { ButtonSize, ButtonVariant } from './enums';
import { joinClassNames } from '../../../utils';
import styles from './styles.scss';

export type ButtonProps = {
  fullWidth?: boolean;
  isDisabled?: boolean;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  target?: '_blank' | '_parent' | '_self' | '_top';
  tooltip?: string;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  isDisabled = false,
  link = '',
  onClick = null,
  size = ButtonSize.Medium,
  target = '_self',
  tooltip = null,
  variant = ButtonVariant.Primary,
}) => {
  const classes = joinClassNames(
    styles.button,
    styles[size],
    fullWidth && styles.fullWidth,
  );

  return (
    isDisabled
      ? <button title={tooltip} className={`${classes} ${styles.disabled}`} disabled>{children}</button>
      : link
        ? (
          <a
            title={tooltip}
            className={`${classes} ${styles[variant]}`}
            href={link}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        )
        : <button title={tooltip} className={`${classes} ${styles[variant]}`} onClick={onClick}>{children}</button>
  );
};
