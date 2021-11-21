import { useEffect, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import StarRatings from './StarRatings';

export default {
  title: 'components/공통/StarRatings',
  component: StarRatings,
  args: {
    value: 3,
    size: 50,
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof StarRatings>;

const Template: ComponentStory<typeof StarRatings> = ({ css, ...args }) => (
  <StarRatings {...args} />
);

export const Default = Template.bind({});
Default.storyName = '기본 (ReadOnly)';
Default.args = {
  // @ts-ignore
  onChange: null,
};

export const Controlled: ComponentStory<typeof StarRatings> = () => {
  const [value, setValue] = useState(3);

  useEffect(() => {
    console.log(`controlled value changed`, value);
  }, [value]);

  return <StarRatings size={50} value={value} onChange={setValue} />;
};
Controlled.storyName = '컨트롤 가능';
