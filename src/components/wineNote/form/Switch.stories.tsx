import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Switch from './Switch';

export default {
  title: 'components/와인노트/form/Switch',
  component: Switch,
  args: {
    checked: true,
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.storyName = '기본';

export const WithLabel = Template.bind({});
WithLabel.storyName = '라벨 있음';
WithLabel.args = {
  label: '라벨',
  checked: false,
};
