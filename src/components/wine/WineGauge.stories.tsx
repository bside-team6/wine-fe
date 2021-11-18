import { css } from '@emotion/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import WineGauge from './WineGauge';

export default {
  title: 'components/와인상세/WineGauge',
  component: WineGauge,
  args: {
    label: '당도',
    minTick: '덜 달아요',
    maxTick: '달아요',
    value: 3,
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (StoryFn) => (
      <div
        css={css`
          width: 573px;
        `}
      >
        {StoryFn()}
      </div>
    ),
  ],
} as ComponentMeta<typeof WineGauge>;

const Template: ComponentStory<typeof WineGauge> = (args) => (
  <WineGauge {...args} />
);

export const Default = Template.bind({});
Default.storyName = '기본';
