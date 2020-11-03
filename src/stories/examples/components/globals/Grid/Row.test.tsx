import React from 'react';
import { mount } from 'enzyme';
import { Row } from './Row';
import { Col } from './Col';

describe('<Row />', () => {
  test('renders correctly', () => {
    const wrapper = mount(<Row><Col><h1>Content within a grid!</h1></Col></Row>);

    expect(wrapper.hasClass('row'));
    expect(wrapper.text()).toBe('Content within a grid!');
  });
});
