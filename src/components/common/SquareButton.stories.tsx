import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SquareButton, { SquareButtonGroup } from './SquareButton';

export default {
  title: 'components/SquareButton',
  component: SquareButton,
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'large',
    children: '텍스트',
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof SquareButton>;

const Template: ComponentStory<typeof SquareButton> = (args) => (
  <SquareButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: 'secondary',
  variant: 'outlined',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'outlined',
  color: 'secondary',
  size: 'medium',
};

export const WeightBold = Template.bind({});
WeightBold.args = {
  bold: true,
};

export const HorizontalButtonGroup = () => (
  <SquareButtonGroup align="horizontal">
    <SquareButton variant="contained" color="secondary" size="large">
      취소
    </SquareButton>
    <SquareButton variant="contained" color="primary" size="large">
      공유하기
    </SquareButton>
  </SquareButtonGroup>
);

export const VerticalButtonGroup = () => (
  <SquareButtonGroup align="vertical">
    <SquareButton variant="outlined" color="secondary">
      노트공유
    </SquareButton>
    <SquareButton variant="outlined" color="secondary">
      수정
    </SquareButton>
    <SquareButton variant="contained" color="secondary">
      삭제
    </SquareButton>
  </SquareButtonGroup>
);
