import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HiglightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Comprar',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: Story<HiglightProps> = (args) => <Highlight {...args} />
