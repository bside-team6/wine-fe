import React from 'react';
import { wineNotes } from 'api/mocks/wine-note';
import { providerDecorator } from 'helpers/storybook';
import WineNote from './WineNote';

export default {
  title: 'Components/WineNote',
  component: WineNote,
  args: {
    ...wineNotes[0], // timeline item format
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [providerDecorator()],
};

const Template = (args) => <WineNote {...args} />;

export const Default = Template.bind({});
Default.storyName = '기본';

export const NoDescription = Template.bind({});
NoDescription.storyName = '설명 없음';
NoDescription.args = {
  descript: null,
};

export const NoImage = Template.bind({});
NoImage.storyName = '사진 없음';
NoImage.args = {
  wineNoteWineImagePath: '',
};
