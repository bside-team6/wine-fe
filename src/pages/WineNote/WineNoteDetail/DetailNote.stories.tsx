import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { wineNote } from '~/api/mocks/wine-note';
import { withProvider } from '~/helpers/storybook';
import DetailNote from './DetailNote';

export default {
  title: 'pages/와인노트/와인노트상세/DetailNote',
  component: DetailNote,
  args: {
    ...wineNote,
  },
  decorators: [withProvider],
} as ComponentMeta<typeof DetailNote>;

const Template: ComponentStory<typeof DetailNote> = (args) => (
  <DetailNote {...args} />
);

export const Default = Template.bind({});
Default.storyName = '기본';

export const NoPrice = Template.bind({});
NoPrice.storyName = '값 없음';
NoPrice.args = {
  price: undefined,
};

export const NoDrinkDate = Template.bind({});
NoDrinkDate.storyName = '마신날 없음';
NoDrinkDate.args = {
  drinkDate: undefined,
};

export const NoFood = Template.bind({});
NoFood.storyName = '음식 없음';
NoFood.args = {
  matchingFoods: [],
};
