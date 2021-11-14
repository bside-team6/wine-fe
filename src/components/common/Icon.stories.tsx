import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from './Icon';

export default {
  title: 'components/common/Icon',
  component: Icon,
  args: {
    name: 'filter',
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (StoryFn) => (
    <div
      css={{
        color: '#ffffff',
        background: '#7430e4',
        display: 'flex',
        alignItems: 'center',
        width: 500,
      }}
    >
      {StoryFn()}
    </div>
  ),
];
