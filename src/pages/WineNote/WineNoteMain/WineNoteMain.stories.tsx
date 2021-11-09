import type { ComponentMeta, ComponentStory } from '@storybook/react';
import WineNoteMain from './index';
import {
  getPopularWineNotesEmptyHandler,
  getPopularWineNotesLoadingHandler,
  getPopularWineNotesSuccessHandler,
  getWineNotesEmptyHandler,
  getWineNotesLoadingHandler,
  getWineNotesSuccessHandler,
} from '~/api/mocks/wine-note';
import { providerDecorator } from '~/helpers/storybook';

export default {
  title: 'pages/WineNoteMain',
  component: WineNoteMain,
  args: {},
  decorators: [providerDecorator()],
} as ComponentMeta<typeof WineNoteMain>;

const Template: ComponentStory<typeof WineNoteMain> = (args) => (
  <WineNoteMain {...args} />
);

export const Default = Template.bind({});
Default.storyName = '와인노트 메인 (타임라인)';
Default.parameters = {
  msw: [getWineNotesSuccessHandler('real'), getPopularWineNotesSuccessHandler],
};

export const LoadingTimeline = Template.bind({});
LoadingTimeline.storyName = '와인노트 타임라인 로딩중';
LoadingTimeline.parameters = {
  msw: [getWineNotesLoadingHandler, getPopularWineNotesEmptyHandler],
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

export const LoadingPopularNote = Template.bind({});
LoadingPopularNote.storyName = '이달의 인기노트 로딩중';
LoadingPopularNote.parameters = {
  msw: [getWineNotesSuccessHandler(), getPopularWineNotesLoadingHandler],
};
