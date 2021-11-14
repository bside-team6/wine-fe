import type { ComponentMeta, ComponentStory } from '@storybook/react';
import RoundButton from './RoundButton';

export default {
  title: 'components/common/RoundButton',
  component: RoundButton,
  args: {
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    bold: true,
    children: '텍스트',
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => (
  <RoundButton {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};

export const WeightNormal = Template.bind({});
WeightNormal.args = {
  color: 'secondary',
  bold: false,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  color: 'primary',
  icon: 'arrow-up',
  iconPosition: 'right',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: 'contained',
  icon: 'write',
  iconPosition: 'left',
  children: '노트쓰러가기',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  variant: 'contained',
  icon: 'refresh',
  iconPosition: 'left',
  children: null,
};

export const Inactive = Template.bind({});
Inactive.args = {
  inactive: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: '이전글',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
