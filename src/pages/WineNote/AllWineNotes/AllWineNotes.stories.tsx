import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  getPopularWineNotesEmptyHandler,
  getPopularWineNotesSuccessHandler,
  getWineNotesEmptyHandler,
  getWineNotesSuccessHandler,
} from '~/api/mocks/wine-note';
import { providerDecorator } from '~/helpers/storybook';
import AllWineNotes from './index';

export default {
  title: 'pages/AllWineNotes',
  component: AllWineNotes,
  args: {},
  decorators: [providerDecorator()],
} as ComponentMeta<typeof AllWineNotes>;

const Template: ComponentStory<typeof AllWineNotes> = (args) => (
  <AllWineNotes {...args} />
);

export const Default = Template.bind({});
Default.storyName = '와인노트 메인 (타임라인)';
Default.parameters = {
  msw: [getWineNotesSuccessHandler('real'), getPopularWineNotesSuccessHandler],
};

export const NoTimeline = Template.bind({});
NoTimeline.storyName = '와인노트 없음';
NoTimeline.parameters = {
  msw: [getWineNotesEmptyHandler, getPopularWineNotesEmptyHandler],
};

export const NoPopularNote = Template.bind({});
NoPopularNote.storyName = '이달의 인기노트 없음';
NoPopularNote.parameters = {
  msw: [getWineNotesSuccessHandler(), getPopularWineNotesEmptyHandler],
};
