import React from 'react';
import { shallow } from 'enzyme';
import { Col } from './Col';

describe('<Col />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Col><h1>Column child!</h1></Col>);

    expect(wrapper.hasClass('col')).toBeTruthy();
    expect(wrapper.text()).toBe('Column child!');
  });
});
