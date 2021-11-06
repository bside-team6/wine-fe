import { rest } from 'msw';
import WineNoteDetail from './index';
import { successResponse } from '~/api/mocks';
import { wineNote } from '~/api/mocks/wine-note';
import { providerDecorator } from '~/helpers/storybook';

export default {
  title: '~/pages/WineNoteDetail',
  component: WineNoteDetail,
  decorators: [
    providerDecorator({
      path: '/wine-note/:wineNoteId',
      initialEntries: ['/wine-note/10'],
    }),
  ],
};

const Template = (args) => <WineNoteDetail {...args} />;

export const Default = Template.bind({});
Default.storyName = '와인노트상세';
Default.parameters = {
  msw: [
    rest.get(`/api/v1/wine-note/:wineNoteId`, (req, res, ctx) => {
      // const { wineNoteId } = req.params
      return res(ctx.delay('real'), ctx.json(successResponse(wineNote)));
    }),
  ],
};

export const Loading = Template.bind({});
Loading.storyName = '와인노트상세 로딩중';
Loading.parameters = {
  msw: [
    rest.get(`/api/v1/wine-note/:wineNoteId`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  ],
};
