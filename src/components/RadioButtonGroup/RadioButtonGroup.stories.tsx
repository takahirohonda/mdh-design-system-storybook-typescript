import React from 'react';
import { Story } from '@storybook/react';
import { Form, Formik, useField, useFormik } from 'formik';
import { RadioButton } from '../RadioButton';

import { RadioButtonGroup as RadioButtonGroupComponent, RadioButtonGroupProps } from '.';

export default {
  title: 'Forms/RadioButtonGroup',
  components: RadioButtonGroupComponent,
  args: {
    name: 'radio',
    hasError: false,
  },
  // docs: {
  //   description: {
  //     component: '`<RadioButtonGroup>` for a form. Children must be 2 or more of `<RadioButton>`.',
  //   },
  // },
};

// Trying useField
const RadioButtonGroupComponentWithRadioOutlineCardBrandTemplate: Story<RadioButtonGroupProps> = (
  args
) => {
  const { name } = args;
  const [field] = useField(name);

  return (
    <Formik
      initialValues={{ radio: 'xero' }}
      onSubmit={(values) => alert(`form submitted with ${JSON.stringify(values)}`)}
    >
      <Form>
        <RadioButtonGroupComponent {...args} value={field.value} onChange={field.onChange}>
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export const RadioButtonGroupWithRadioOutlineCardBrand = RadioButtonGroupComponentWithRadioOutlineCardBrandTemplate.bind(
  {}
);

// Trying useFormik
const RadioButtonGroupComponentWithRadioOutlineCardBrandUseFormikTemplate: Story<RadioButtonGroupProps> = (
  args
) => {
  const formik = useFormik({
    initialValues: {
      radio: 'xero',
    },
    onSubmit: (values) => alert(`form submitted with ${JSON.stringify(values)}`),
  });

  const changeHandler = (values: any) => {
    formik.setFieldValue('radio', values);
  };

  return (
    <RadioButtonGroupComponent
      name="example"
      value={formik.values.radio}
      onChange={changeHandler}
      hasError={false}
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
    </RadioButtonGroupComponent>
  );
};

export const RadioButtonGroupWithRadioOutlineCardBrandUseFormik = RadioButtonGroupComponentWithRadioOutlineCardBrandUseFormikTemplate.bind(
  {}
);

RadioButtonGroupWithRadioOutlineCardBrandUseFormik.parameters = {
  docs: {
    description: {
      component: '`<RadioButtonGroup>` for a form. Children must be 2 or more of `<RadioButton>`.',
    },
  },
};
