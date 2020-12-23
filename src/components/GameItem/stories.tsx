import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta

export const Default: Story = () => <GameItem />
