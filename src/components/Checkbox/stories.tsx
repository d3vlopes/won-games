import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    // Retorna a função na aba action
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <Checkbox isChecked {...args} />
)
