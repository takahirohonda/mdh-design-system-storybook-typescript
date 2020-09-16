import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button2, ButtonProps } from './Button2'

export default {
  title: 'Example/Button2',
  component: Button2,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button2 {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
