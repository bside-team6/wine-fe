import React from 'react';
import DetailNote from './DetailNote';
import { wineNote } from 'api/mocks/wine-note';

export default {
  title: 'Pages/WineNoteDetail/DetailNote',
  component: DetailNote,
  args: {
    ...wineNote,
  },
};

const Template = (args) => <DetailNote {...args} />;

export const Default = Template.bind({});
Default.storyName = '기본';

export const NoPrice = Template.bind({});
NoPrice.storyName = '값 없음';
NoPrice.args = {
  price: null,
};

export const NoDrinkDate = Template.bind({});
NoDrinkDate.storyName = '마신날 없음';
NoDrinkDate.args = {
  drinkDate: null,
};

export const NoFood = Template.bind({});
NoFood.storyName = '음식 없음';
NoFood.args = {
  wineNoteFood: null,
};
