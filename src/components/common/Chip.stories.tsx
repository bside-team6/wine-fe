import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { WINE_TYPE } from '~/types';
import Chip from './Chip';

export default {
  title: 'components/common/Chip',
  component: Chip,
  args: {
    wineType: WINE_TYPE.RED,
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const RED = Template.bind({});

export const ROSE = Template.bind({});
ROSE.args = {
  wineType: WINE_TYPE.ROSE,
};

export const WHITE = Template.bind({});
WHITE.args = {
  wineType: WINE_TYPE.WHITE,
};

export const SPARKLING = Template.bind({});
SPARKLING.args = {
  wineType: WINE_TYPE.SPARKLING,
};

export const CHAMPAGNE = Template.bind({});
CHAMPAGNE.args = {
  wineType: WINE_TYPE.CHAMPAGNE,
};

export const FORTIFIED = Template.bind({});
FORTIFIED.args = {
  wineType: WINE_TYPE.FORTIFIED,
};

export const SWEET = Template.bind({});
SWEET.args = {
  wineType: WINE_TYPE.SWEET,
};
