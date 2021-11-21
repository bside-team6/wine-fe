import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { wineNotes } from '~/api/mocks/wine-note';
import { withProvider } from '~/helpers/storybook';
import WineNote from './WineNote';

export default {
  title: 'components/와인노트/WineNote',
  component: WineNote,
  args: {
    ...wineNotes[0], // timeline item format
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [withProvider],
} as ComponentMeta<typeof WineNote>;

const Template: ComponentStory<typeof WineNote> = (args) => (
  <WineNote {...args} />
);

export const Default = Template.bind({});
Default.storyName = '기본';

export const LongDescription = Template.bind({});
LongDescription.storyName = '긴 설명';
LongDescription.args = {
  descript:
    '잘 익은 레드 베리와 살구, 패션 프루츠 시트러스 등의 상큼한 과실향과 함께 라벤더와 바이올렛 등의 아로마가 더해진다. 입 안에서는 풍성한 꽃향기와 둥글고 우아한 타닌감이 균형감 있으면서 드라이한 피니쉬를 보여주는 로제 와인이다.',
};

export const NoImage = Template.bind({});
NoImage.storyName = '사진 없음';
NoImage.args = {
  wineImages: [],
};

export const isTimelineNote = Template.bind({});
isTimelineNote.storyName = '타임라인 노트';
isTimelineNote.args = {
  isTimeline: true,
};
