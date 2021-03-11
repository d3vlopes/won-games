import { Story, Meta } from '@storybook/react/types-6-0'
import Loading, { LoadingProps } from '.'

export default {
  title: 'Loading',
  component: Loading,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    },
    layout: 'centered'
  },
  args: {
    color: 'primary'
  }
} as Meta

export const Default: Story<LoadingProps> = (args) => <Loading {...args} />
