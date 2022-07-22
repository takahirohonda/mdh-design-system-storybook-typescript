import React, { InputHTMLAttributes } from 'react';
import { joinClassNames } from '../../utils';
import styles from './styles.scss';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  hasError?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ id, className, children, ...props }) => (
  <div
    className={joinClassNames(
      styles.radioButtonWrapper,
      props.checked && styles.checked,
      className,
    )}
  >
    <input type="radio" id={id} {...props} />
    <label htmlFor={id}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className={styles.renderedRadioButton}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          className={joinClassNames(
            styles.renderedRadioButton__base,
            props.checked && styles.checked,
          )}
        />
        {props.checked && (
          <circle cx="8" cy="8" r="4.5" className={styles.renderedRadioButton__checked} />
        )}
      </svg>
      {children}
    </label>
  </div>
);

RadioButton.displayName = 'RadioButton';
