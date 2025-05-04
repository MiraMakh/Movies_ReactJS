import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { SearchForm } from '../components';
import { SearchFormProps } from '../models';

const meta: Meta<typeof SearchForm> = {
  title: 'Components/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    initialSearchQuery: {
      control: { type: 'text' },
      overview: 'Initial query to prefill the search box',
    },
    onSearch: {
      action: 'onSearch',
      overview: 'Callback function triggered when clicking search',
    },
  },
};

export default meta;

type Story = StoryObj<SearchFormProps>;

// Default Story SearchForm without any search query
export const Default: Story = {
  args: {
    initialSearchQuery: '',
    onSearch: (query: string) => console.log(`Searched query: ${query}`),
  },
};

// Story with Search Query Story
export const WithPreFilledQuery: Story = {
  args: {
    initialSearchQuery: 'Search iniliat',
    onSearch: (query: string) => console.log(`Searched query: ${query}`),
  },
};

// Interactive Story with dynamic SearchForm
export const Interactive: StoryFn<SearchFormProps> = (args) => {
  return <SearchForm {...args} />;
};

Interactive.args = {
  initialSearchQuery: 'Search',
};
Interactive.argTypes = {
  onSearch: { action: 'Search was performed with query' },
};
