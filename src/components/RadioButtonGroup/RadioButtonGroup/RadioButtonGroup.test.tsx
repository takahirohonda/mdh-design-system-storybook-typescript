import React from 'react';
import { shallow, mount } from 'enzyme';
import { RadioButton } from '../../RadioButton';
import { RadioButtonGroup } from './RadioButtonGroup';

describe('<RadioButtonGroup>', () => {
  it('renders correctly with RadioButton children', () => {
    const wrapper = mount(
      <RadioButtonGroup name="test" value="first" onChange={() => {}}>
        <RadioButton id="first" value="first" key="first">
          First
        </RadioButton>
        <RadioButton id="second" value="second" key="second">
          Second
        </RadioButton>
      </RadioButtonGroup>
    );

    const elem = wrapper.find('input');
    expect(elem).toHaveLength(2);
    expect(elem.first().prop('name')).toBe('test');
    expect(elem.last().prop('name')).toBe('test');
  });

  it('renders correctly when children is not RadioButton', () => {
    const wrapper = shallow(
      <RadioButtonGroup name="test" value="first" onChange={() => {}}>
        <p>check</p>
        <p>check</p>
      </RadioButtonGroup>
    );
    const elem = wrapper.find('p');
    expect(elem).toHaveLength(2);
    expect(elem.first().prop('name')).toBeFalsy();
    expect(elem.last().prop('name')).toBeFalsy();
  });
});
