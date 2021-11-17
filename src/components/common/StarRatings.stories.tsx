import type { ComponentMeta, ComponentStory } from '@storybook/react';
import StarRatings from './StarRatings';

export default {
  title: 'components/공통/StarRatings',
  component: StarRatings,
  args: {
    rating: 3,
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof StarRatings>;

const Template: ComponentStory<typeof StarRatings> = (args) => (
  <StarRatings {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'StarRatings';
