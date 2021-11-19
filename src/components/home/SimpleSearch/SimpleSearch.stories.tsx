import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { wineNote } from '~/api/mocks/wine-note';
import { withLazy, withProvider } from '~/helpers/storybook';
import SimpleSearch from './SimpleSearch';

const LazySimpleSearch = (args: React.ComponentProps<typeof SimpleSearch>) =>
  withLazy(<SimpleSearch {...args} />);

export default {
  title: 'components/메인/SimpleSearch',
  component: LazySimpleSearch,
  args: {
    ...wineNote,
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [withProvider],
} as ComponentMeta<typeof SimpleSearch>;

const Template: ComponentStory<typeof SimpleSearch> = (args) => (
  <LazySimpleSearch {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'SimpleSearch';
