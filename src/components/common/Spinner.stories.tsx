import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Spinner from './Spinner';

export default {
  title: 'components/공통/Spinner',
  component: Spinner,
  args: {
    align: 'center',
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'Spinner';
