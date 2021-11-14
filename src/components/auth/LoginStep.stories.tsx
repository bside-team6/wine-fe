import type { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginStep from './LoginStep';

export default {
  title: 'components/auth/LoginStep',
  component: LoginStep,
  args: {
    step: 1,
  },
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof LoginStep>;

const Template: ComponentStory<typeof LoginStep> = (args) => (
  <LoginStep {...args} />
);

export const Step1 = Template.bind({});
Step1.storyName = '스텝1';
Step1.args = {
  step: 1,
};

export const Step2 = Template.bind({});
Step2.storyName = '스텝2';
Step2.args = {
  step: 2,
};
