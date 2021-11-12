import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Confirm from './Confirm';

export default {
  title: 'components/Confirm',
  component: Confirm,
  args: {
    isOpen: true,
    title: '알림',
    content: `페이지를 이동하면\n작성중인 데이터는 저장되지 않습니다.`,
    ok: '확인하고 이동',
    cancel: '취소',
  },
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => (
  <Confirm {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'Confirm';
