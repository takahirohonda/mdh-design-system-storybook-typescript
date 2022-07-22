import React, { ReactElement, ReactHTMLElement, FocusEvent } from 'react';
import { RadioButton } from '../../RadioButton';

export interface RadioButtonGroupProps {
  children: (ReactElement<HTMLElement> | ReactHTMLElement<HTMLElement>)[];
  name: string;
  value: string;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

const isRadioButtonInputElement = (
  element: ReactElement<HTMLElement> | ReactHTMLElement<HTMLElement>,
): element is ReactHTMLElement<HTMLInputElement> => element.type === RadioButton;

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  children,
  name,
  value,
  className,
  onChange,
  onBlur,
}) => (
  <div className={className}>
    {React.Children.map(children, (child) => {
      if (isRadioButtonInputElement(child)) {
        return React.cloneElement(child, {
          ...child.props,
          name,
          checked: value === child.props.value,
          onChange: (e) => onChange(e.currentTarget.value),
          onBlur: (e) => onBlur(e),
        });
      }

      return child;
    })}
  </div>
);

RadioButtonGroup.displayName = 'RadioButtonGroup';
