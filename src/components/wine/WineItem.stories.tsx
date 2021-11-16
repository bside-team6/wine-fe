import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { wines } from '~/api/mocks/wine';
import { withProvider } from '~/helpers/storybook';
import WineItem from './WineItem';

export default {
  title: 'components/와인리스트/WineItem',
  component: WineItem,
  args: {
    ...wines[0],
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [withProvider],
} as ComponentMeta<typeof WineItem>;

const Template: ComponentStory<typeof WineItem> = (args) => (
  <WineItem {...args} />
);

export const Default = Template.bind({});
Default.storyName = '기본';
