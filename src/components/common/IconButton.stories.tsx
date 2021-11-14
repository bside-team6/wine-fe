import type { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from './IconButton';

export default {
  title: 'components/common/IconButton',
  component: IconButton,
  args: {
    name: 'filter',
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'IconButton';
