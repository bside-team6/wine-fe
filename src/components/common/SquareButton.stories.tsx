import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SquareButton from './SquareButton';

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

export const Medium = Template.bind({});
Medium.args = {
  variant: 'outlined',
  color: 'secondary',
  size: 'medium',
};
