import React from 'react'
import { ButtonSize } from './enums'
import { OneOrMoreReactElements } from '../../../../types'
import { joinClassNames } from '../../../../utils'
import { ButtonProps } from './Button'
import styles from './styles.scss'

export type ButtonGroupProps = {
  children: OneOrMoreReactElements<ButtonProps>;
  fullWidth?: boolean;
  size?: ButtonSize;
}

const getClassForSize = (size: ButtonSize) => `buttonGroup--${size}` as keyof typeof styles

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  fullWidth = false,
  size = ButtonSize.Medium
}) => (
  <div className={joinClassNames(
    styles.buttonGroup,
    styles[getClassForSize(size)],
    fullWidth && styles.fullWidth
  )}>
    {children}
  </div>
)
