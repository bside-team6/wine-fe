import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';
import WineNoteMain from './index';
import { successResponse } from '~/api/mocks';
import { popularWineNotes, wineNotes } from '~/api/mocks/wine-note';
import { providerDecorator } from '~/helpers/storybook';
import { ITimelineWineNoteList } from '~/types';

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
  msw: [
    rest.get(`/api/v1/wine-note-timeline`, (req, res, ctx) => {
      return res(
        ctx.delay('real'),
        ctx.json(
          successResponse<ITimelineWineNoteList>({
            totalElements: 6,
            totalPages: 1,
            currentPage: 0,
            wineNoteTimeLineResultList: wineNotes,
          }),
        ),
      );
    }),
    rest.get(`/api/v1/wine-note-popular`, (req, res, ctx) => {
      return res(
        ctx.delay('real'),
        ctx.json(successResponse(popularWineNotes)),
      );
    }),
  ],
};

export const LoadingTimeline = Template.bind({});
LoadingTimeline.storyName = '와인노트 타임라인 로딩중';
LoadingTimeline.parameters = {
  msw: [
    rest.get(`/api/v1/wine-note-timeline`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
    rest.get(`/api/v1/wine-note-popular`, (req, res, ctx) => {
      return res(ctx.delay('real'), ctx.json(successResponse([])));
    }),
  ],
};

export const NoTimeline = Template.bind({});
NoTimeline.storyName = '와인노트 없음';
NoTimeline.parameters = {
  msw: [
    rest.get(`/api/v1/wine-note-timeline`, (req, res, ctx) => {
      return res(
        ctx.delay('real'),
        ctx.json(
          successResponse<ITimelineWineNoteList>({
            totalElements: 0,
            totalPages: 0,
            currentPage: 0,
            wineNoteTimeLineResultList: [],
          }),
        ),
      );
    }),
    rest.get(`/api/v1/wine-note-popular`, (req, res, ctx) => {
      return res(ctx.delay('real'), ctx.json(successResponse([])));
    }),
  ],
};

export const NoPopularNote = Template.bind({});
NoPopularNote.storyName = '이달의 인기노트 없음';
NoPopularNote.parameters = {
  msw: [
    rest.get(`/api/v1/wine-note-timeline`, (req, res, ctx) => {
      return res(
        ctx.json(
          successResponse<ITimelineWineNoteList>({
            totalElements: 6,
            totalPages: 1,
            currentPage: 0,
            wineNoteTimeLineResultList: wineNotes,
          }),
        ),
      );
    }),
    rest.get(`/api/v1/wine-note-popular`, (req, res, ctx) => {
      return res(ctx.delay('real'), ctx.json(successResponse([])));
    }),
  ],
};

export const LoadingPopularNote = Template.bind({});
LoadingPopularNote.storyName = '이달의 인기노트 로딩중';
LoadingPopularNote.parameters = {
  msw: [
    rest.get(`/api/v1/wine-note-timeline`, (req, res, ctx) => {
      return res(
        ctx.json(
          successResponse<ITimelineWineNoteList>({
            totalElements: 6,
            totalPages: 1,
            currentPage: 0,
            wineNoteTimeLineResultList: wineNotes,
          }),
        ),
      );
    }),
    rest.get(`/api/v1/wine-note-popular`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  ],
};
