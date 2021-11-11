import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  getWineNoteLoadingHandler,
  getWineNoteSuccessHandler,
} from '~/api/mocks/wine-note';
import { providerDecorator } from '~/helpers/storybook';
import WineNoteDetail from './index';

export default {
  title: 'pages/WineNoteDetail',
  component: WineNoteDetail,
  decorators: [
    providerDecorator({
      path: '/wine-note/:wineNoteId',
      initialEntries: ['/wine-note/10'],
    }),
  ],
} as ComponentMeta<typeof WineNoteDetail>;

const Template: ComponentStory<typeof WineNoteDetail> = (args) => (
  <WineNoteDetail {...args} />
);

export const Default = Template.bind({});
Default.storyName = '와인노트상세';
Default.parameters = {
  msw: [getWineNoteSuccessHandler],
};

export const Loading = Template.bind({});
Loading.storyName = '와인노트상세 로딩중';
Loading.parameters = {
  msw: [getWineNoteLoadingHandler],
};
