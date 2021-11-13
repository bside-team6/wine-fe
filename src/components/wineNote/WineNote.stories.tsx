import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { wineNotes } from '~/api/mocks/wine-note';
import { providerDecorator } from '~/helpers/storybook';
import WineNote from './WineNote';

export default {
  title: 'components/WineNote',
  component: WineNote,
  args: {
    ...wineNotes[0], // timeline item format
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [providerDecorator()],
} as ComponentMeta<typeof WineNote>;

const Template: ComponentStory<typeof WineNote> = (args) => (
  <WineNote {...args} />
);

export const Default = Template.bind({});
Default.storyName = '기본';

export const NoDescription = Template.bind({});
NoDescription.storyName = '설명 없음';
NoDescription.args = {
  descript: undefined,
};

export const NoImage = Template.bind({});
NoImage.storyName = '사진 없음';
NoImage.args = {
  wineImages: [],
};
