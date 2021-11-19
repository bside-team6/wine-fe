import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withProvider } from '~/helpers/storybook';
import Pagination from './Pagination';

export default {
  title: 'components/와인리스트/Pagination',
  component: Pagination,
  args: {
    first: true,
    last: false,
    number: 0,
    size: 16,
    totalElements: 400,
    totalPages: Math.ceil(400 / 16),
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [withProvider],
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'Pagination';
