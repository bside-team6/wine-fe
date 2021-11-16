import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { wineNote } from '~/api/mocks/wine-note';
import { withProvider } from '~/helpers/storybook';
import SimpleSearch from './SimpleSearch';

export default {
  title: 'components/메인/SimpleSearch',
  component: SimpleSearch,
  args: {
    ...wineNote,
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [withProvider],
} as ComponentMeta<typeof SimpleSearch>;

const Template: ComponentStory<typeof SimpleSearch> = (args) => (
  <SimpleSearch {...args} />
);

export const Default = Template.bind({});
Default.storyName = '기본';
