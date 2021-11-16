import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { wineNotes } from '~/api/mocks/wine-note';
import { withProvider } from '~/helpers/storybook';
import WineNoteSlide from './WineNoteSlide';

export default {
  title: 'pages/메인/WineNoteSlide',
  component: WineNoteSlide,
  args: {
    ...wineNotes[0], // timeline item format
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [withProvider],
} as ComponentMeta<typeof WineNoteSlide>;

const Template: ComponentStory<typeof WineNoteSlide> = (args) => (
  <WineNoteSlide {...args} />
);

export const Default = Template.bind({});
Default.storyName = '기본';

export const ShortDescription = Template.bind({});
ShortDescription.storyName = '짧은 description';
ShortDescription.args = {
  descript: '안녕하세요 옴뇸뇸',
};
