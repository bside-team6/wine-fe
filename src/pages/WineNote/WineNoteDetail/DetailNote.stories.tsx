import type { ComponentMeta, ComponentStory } from '@storybook/react';
import DetailNote from './DetailNote';
import { wineNote } from '~/api/mocks/wine-note';

export default {
  title: 'pages/WineNoteDetail/DetailNote',
  component: DetailNote,
  args: {
    ...wineNote,
  },
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
  wineNoteFoodList: [],
};
