import React from 'react';
import { shallow } from 'enzyme';
import { RadioButton, RadioButtonProps } from './RadioButton';

const setUp = (customProps?: Partial<RadioButtonProps>) => {
  const defaultProps: RadioButtonProps = {
    id: 'radioButtonId',
    children: 'This is a radio button',
  };
  const props = { ...defaultProps, ...customProps };

  return shallow(<RadioButton {...props} />);
};

describe('<RadioButton>', () => {
  it('renders correctly with className', () => {
    const className = 'radioButtonTest';
    const wrapper = setUp({ className });
    expect(wrapper.find('div').hasClass(className)).toBe(true);
    expect(wrapper.find('#radioButtonId')).toHaveLength(1);
    expect(wrapper.find('label').text()).toBe('This is a radio button');
  });

  it('renders correctly for checked', () => {
    const checked = 'checked';

    const wrapper = setUp({ checked: true });

    expect(wrapper.find('circle').at(0).hasClass(checked)).toBe(true);
    expect(wrapper.find('circle').at(1).exists()).toBe(true);
  });
});
