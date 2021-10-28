import React from 'react';
import Chip from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  args: {
    wineType: 'RED',
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    wineType: {
      options: [
        'RED',
        'ROSE',
        'WHITE',
        'SPARKLING',
        'CHAMPAGNE',
        'FORTIFIED',
        'SWEET',
      ],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const RED = Template.bind({});

export const ROSE = Template.bind({});
ROSE.args = {
  wineType: 'ROSE',
};

export const WHITE = Template.bind({});
WHITE.args = {
  wineType: 'WHITE',
};

export const SPARKLING = Template.bind({});
SPARKLING.args = {
  wineType: 'SPARKLING',
};

export const CHAMPAGNE = Template.bind({});
CHAMPAGNE.args = {
  wineType: 'CHAMPAGNE',
};

export const FORTIFIED = Template.bind({});
FORTIFIED.args = {
  wineType: 'FORTIFIED',
};

export const SWEET = Template.bind({});
SWEET.args = {
  wineType: 'SWEET',
};
