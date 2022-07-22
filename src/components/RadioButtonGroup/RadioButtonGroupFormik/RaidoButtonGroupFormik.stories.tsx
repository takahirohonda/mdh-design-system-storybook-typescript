import React from 'react';
import { Form, Formik } from 'formik';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioButton } from '../../RadioButton';

import {
  RadioButtonGroupFormik as RadioButtonGroupFormikComponent,
  RadioButtonGroupFormixProps,
} from '.';

export default {
  title: 'Forms/RadioButtonGroupFormik',
  components: RadioButtonGroupFormikComponent,
  args: {
    name: 'radio',
    hasError: false,
    onBlur: action('onBlur'),
  },
  docs: {
    description: {
      component: '`<RadioButtonGroupFormik>` is for using <RadioButtonGroup> with formik.',
    },
  },
};

const RadioButtonGroupFormikTemplate: Story<RadioButtonGroupFormixProps> = (args) => (
  <Formik initialValues={{ radio: 'first' }} onSubmit={action('form submitted')}>
    <Form>
      <RadioButtonGroupFormikComponent {...args}>
        <RadioButton id="first" value="first" key="first">
          <span className="radioButtonLabelText">Admin</span>
        </RadioButton>
        <RadioButton id="second" value="second" key="second">
          <span className="radioButtonLabelText">Manager</span>
        </RadioButton>
        <RadioButton id="third" value="third" key="third">
          <span className="radioButtonLabelText">Engineer</span>
        </RadioButton>
      </RadioButtonGroupFormikComponent>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export const RadioButtonGroupFormik = RadioButtonGroupFormikTemplate.bind({});
