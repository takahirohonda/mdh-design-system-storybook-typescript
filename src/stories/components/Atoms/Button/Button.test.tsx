import React from 'react'
import { shallow } from 'enzyme'
import { ButtonProps, Button } from './Button'

const setUp = (customProps?: Partial<ButtonProps>) => shallow(
  <Button {...customProps}>
    <h1>Button Child!</h1>
  </Button>
)

describe('<Button />', () => {
  describe('rendered as button (<button>)', () => {
    const setUpButton = (customProps?: Partial<ButtonProps>) => setUp(customProps)

    test('renders correctly', () => {
      const wrapper = setUpButton()
      const button = wrapper.find('button')
      const a = wrapper.find('a')

      expect(button.exists()).toBeTruthy()
      expect(a.exists()).toBeFalsy()
      expect(wrapper.text()).toBe('Button Child!')
    })

    test('button is disabled when isDisabled prop is set', () => {
      const wrapper = setUpButton({ isDisabled: true })

      expect(wrapper.prop('disabled')).toBeTruthy()
    })

    test('onClick is called when button is clicked', () => {
      const mockOnClick = jest.fn()
      const wrapper = setUpButton({ onClick: mockOnClick })

      expect(mockOnClick).not.toHaveBeenCalled()
      wrapper.simulate('click')
      expect(mockOnClick).toHaveBeenCalled()
    })

    test('setting fullWidth prop adds correct class', () => {
      const wrapper = setUpButton({ fullWidth: true })

      expect(wrapper.hasClass('fullWidth')).toBeTruthy()
    })

    test('setting tooltip prop adds title', () => {
      const tooltip = 'Click on me and stuff happens'
      const wrapper = setUpButton({ tooltip })

      expect(wrapper.prop('title')).toBe(tooltip)
    })
  })

  describe('rendered as link (<a>)', () => {
    const setUpLink = (customProps?: Partial<ButtonProps>) => {
      const defaultProps: ButtonProps = {
        link: 'make me a link'
      }
      const props = { ...defaultProps, ...customProps }

      return setUp(props)
    }

    test('renders correctly', () => {
      const wrapper = setUpLink()
      const button = wrapper.find('button')
      const a = wrapper.find('a')

      expect(button.exists()).toBeFalsy()
      expect(a.exists()).toBeTruthy()
      expect(wrapper.prop('href')).toBe('make me a link')
      expect(wrapper.prop('target')).toBe('_self')
      expect(wrapper.prop('rel')).toBe(undefined)
      expect(wrapper.text()).toBe('Button Child!')
    })

    test('setting fullWidth prop adds correct class', () => {
      const wrapper = setUpLink({ fullWidth: true })

      expect(wrapper.hasClass('fullWidth')).toBeTruthy()
    })

    test('setting tooltip prop adds title', () => {
      const tooltip = 'Click on me and stuff happens'
      const wrapper = setUpLink({ tooltip })

      expect(wrapper.prop('title')).toBe(tooltip)
    })

    test('setting target to _blank sets rel correctly', () => {
      const wrapper = setUpLink({ target: '_blank' })

      expect(wrapper.prop('rel')).toBe('noopener noreferrer')
    })
  })
})
