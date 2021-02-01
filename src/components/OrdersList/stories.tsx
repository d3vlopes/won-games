import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersList from '.'

export default {
  title: 'OrdersList',
  component: OrdersList
} as Meta

export const Default: Story = () => <OrdersList />
