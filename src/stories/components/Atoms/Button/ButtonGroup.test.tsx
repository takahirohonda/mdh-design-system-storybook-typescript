import React from 'react'
import { mount } from 'enzyme'
import { Button } from '.'
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup'
import { ButtonSize } from '../../../../enums'

const setUp = (customProps?: Partial<ButtonGroupProps>) => mount(
  <ButtonGroup {...customProps}>
    <Button />
    <Button />
  </ButtonGroup>
)

describe('<ButtonGroup />', () => {
  test('renders correctly', () => {
    const wrapper = setUp()
    const buttons = wrapper.find(Button)

    expect(buttons.length).toBe(2)
  })

  test("setting fullWidth prop to false doesn't add class", () => {
    const wrapper = setUp({ fullWidth: false })
    const container = wrapper.find('.buttonGroup')

    expect(container.hasClass('fullWidth')).toBeFalsy()
  })

  test('setting fullWidth prop to true adds correct class', () => {
    const wrapper = setUp({ fullWidth: true })
    const container = wrapper.find('.buttonGroup')

    expect(container.hasClass('fullWidth')).toBeTruthy()
  })
})
