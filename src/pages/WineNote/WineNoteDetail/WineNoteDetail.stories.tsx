import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  getRelatedWineNotesEmptyHandler,
  getRelatedWineNotesSuccessHandler,
  getWineNoteSuccessHandler,
} from '~/api/mocks/wine-note';
import { withLazy, withProvider } from '~/helpers/storybook';
import WineNoteDetail from './index';

const LazyWineNoteDetail = (
  args: React.ComponentProps<typeof WineNoteDetail>,
) => withLazy(<WineNoteDetail {...args} />);

export default {
  title: 'pages/와인노트/와인노트상세',
  component: LazyWineNoteDetail,
  decorators: [withProvider],
  parameters: {
    provider: {
      path: '/wine-note/:wineNoteId',
      initialEntries: ['/wine-note/10'],
    },
  },
} as ComponentMeta<typeof WineNoteDetail>;

const Template: ComponentStory<typeof WineNoteDetail> = (args) => (
  <LazyWineNoteDetail {...args} />
);

export const Default = Template.bind({});
Default.storyName = '와인노트상세';
Default.parameters = {
  msw: [getRelatedWineNotesSuccessHandler, getWineNoteSuccessHandler],
};

export const NoRelated = Template.bind({});
NoRelated.storyName = '관련와인노트 없음';
NoRelated.parameters = {
  msw: [getRelatedWineNotesEmptyHandler, getWineNoteSuccessHandler],
};

export const isAuthenticated = Template.bind({});
isAuthenticated.storyName = '회원';
isAuthenticated.parameters = {
  msw: [getRelatedWineNotesSuccessHandler, getWineNoteSuccessHandler],
  provider: {
    isAuthenticated: true,
  },
};
