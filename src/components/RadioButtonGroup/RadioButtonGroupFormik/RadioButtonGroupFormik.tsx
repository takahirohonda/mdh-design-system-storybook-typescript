import React, { ReactElement, ReactHTMLElement } from 'react';
import { useField } from 'formik';
import { RadioButtonGroup, RadioButtonGroupProps } from '../RadioButtonGroup';
import { RadioButton } from '../../RadioButton';

export type RadioButtonGroupFormixProps = RadioButtonGroupProps

export const RadioButtonGroupFormik: React.FC<RadioButtonGroupFormixProps> = ({
  children,
  name,
}) => {
  const [field, , helpers] = useField(name);
  const { value, onBlur } = field;
  const { setValue } = helpers;

  return (
    <RadioButtonGroup name={name} value={value} onChange={setValue} onBlur={onBlur}>
      {children}
    </RadioButtonGroup>
  );
};

RadioButtonGroupFormik.displayName = 'RadioButtonGroupFormik';
