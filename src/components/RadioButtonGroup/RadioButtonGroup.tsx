import React, { ReactElement, ReactHTMLElement } from 'react';
import { RadioButton } from '../RadioButton/RadioButton';

export interface RadioButtonGroupProps {
  children: (ReactElement<HTMLElement> | ReactHTMLElement<HTMLElement>)[];
  name: string;
  value: string;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const isRadioButtonInputElement = (
  element: ReactElement<HTMLElement> | ReactHTMLElement<HTMLElement>
): element is ReactHTMLElement<HTMLInputElement> => {
  return element.type === RadioButton;
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  children,
  name,
  value,
  className,
  onChange,
}) => (
  <div className={className}>
    {React.Children.map(children, (child) => {
      if (isRadioButtonInputElement(child)) {
        return React.cloneElement(child, {
          ...child.props,
          name,
          checked: value === child.props.value,
          onChange: (e) => onChange(e.currentTarget.value),
        });
      }

      return child;
    })}
  </div>
);

RadioButtonGroup.displayName = 'RadioButtonGroup';
