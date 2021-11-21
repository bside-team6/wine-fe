import type { ComponentMeta, ComponentStory } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
  title: 'components/와인노트/form/RadioButton',
  component: RadioButton,
  args: {
    checked: false,
    children: '레드와인',
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'RadioButton';
