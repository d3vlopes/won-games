import { Story, Meta } from '@storybook/react/types-6-0'

import CardList, { CartListProps } from '.'
import mockItems from './mock'

export default {
  title: 'CardList',
  component: CardList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CardList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CardList {...args} hasButton />
  </div>
)
