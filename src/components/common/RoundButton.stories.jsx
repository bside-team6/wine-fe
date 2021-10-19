import React from 'react';
import RoundButton from './RoundButton';

export default {
  title: 'Components/RoundButton',
  component: RoundButton,
  args: {
    color: 'primary',
    children: '텍스트',
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <RoundButton {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const DropdownClose = Template.bind({});
DropdownClose.args = {
  dropdown: 'close',
};

export const DropdownOpen = Template.bind({});
DropdownOpen.args = {
  dropdown: 'open',
};
