import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';
import { RadioButton } from '../../RadioButton';

import { RadioButtonGroup as RadioButtonGroupComponent, RadioButtonGroupProps } from '.';

export default {
  title: 'Forms/RadioButtonGroup',
  components: RadioButtonGroupComponent,
  args: {
    name: 'radio',
    hasError: false,
    onBlur: () => {},
  },
  docs: {
    description: {
      component: '`<RadioButtonGroup>` for a form. Children must be 2 or more of `<RadioButton>`.',
    },
  },
};

// Without formix
const RadioButtonGroupComponentWithRadioButtonTemplate: Story<RadioButtonGroupProps> = (args) => {
  const [value, setValue] = useState('');

  return (
    <form>
      <RadioButtonGroupComponent {...args} value={value} onChange={setValue}>
        <RadioButton id="first" value="first" key="first">
          <span className="radioButtonLabelText">Admin</span>
        </RadioButton>
        <RadioButton id="second" value="second" key="second">
          <span className="radioButtonLabelText">Manager</span>
        </RadioButton>
        <RadioButton id="third" value="third" key="third">
          <span className="radioButtonLabelText">Engineer</span>
        </RadioButton>
      </RadioButtonGroupComponent>
    </form>
  );
};

export const RadioButtonGroupWithRadioButton = RadioButtonGroupComponentWithRadioButtonTemplate.bind(
  {},
);

// Trying useFormik
const RadioButtonGroupComponentWithRadioButtonUseFormikTemplate: Story<RadioButtonGroupProps> = (
  args,
) => {
  const formik = useFormik({
    initialValues: {
      radio: 'xero',
    },
    onSubmit: action('Form submitted'),
  });

  const changeHandler = (values: any) => {
    formik.setFieldValue('radio', values);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <RadioButtonGroupComponent
        name="example"
        value={formik.values.radio}
        onChange={changeHandler}
        hasError={false}
        onBlur={args.onBlur}
      >
        <RadioButton id="first" value="first" key="first">
          <span className="radioButtonLabelText">Admin</span>
        </RadioButton>
        <RadioButton id="second" value="second" key="second">
          <span className="radioButtonLabelText">Manager</span>
        </RadioButton>
        <RadioButton id="third" value="third" key="third">
          <span className="radioButtonLabelText">Engineer</span>
        </RadioButton>
        <button type="submit">Submit</button>
      </RadioButtonGroupComponent>
    </form>
  );
};

export const RadioButtonGroupWithRadioButtonUseFormik = RadioButtonGroupComponentWithRadioButtonUseFormikTemplate.bind(
  {},
);

RadioButtonGroupWithRadioButtonUseFormik.parameters = {
  docs: {
    description: {
      component:
        'Connecting to Formik by useFormik (actually not recommended...). Use RadioButtonGroupFormik instead',
    },
  },
};
