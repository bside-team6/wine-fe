import React from 'react';
import Chip from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  args: {
    color: 'red',
    label: 'RED',
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Chip {...args} />;

export const Red = Template.bind({});

export const Orange = Template.bind({});
Orange.args = {
  color: 'orange',
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
};
