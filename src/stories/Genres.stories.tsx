import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Genres } from '../components';
import { GenresProps } from '../models';
import { useState } from 'react';

const meta: Meta<typeof Genres> = {
  title: 'Components/Genres',
  component: Genres,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    genres: {
      control: { type: 'object' },
      description: 'Array of genre names to display as buttons',
    },
    selectedGenre: {
      control: { type: 'text' },
      description: 'The currently selected genre',
    },
    onSelect: {
      action: 'onSelect',
      description: 'Callback triggered when a genre is selected',
    },
  },
};

export default meta;

// Default story with "All" selected
export const Default: StoryObj<GenresProps> = {
  args: {
    genres: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
    selectedGenre: 'All',
    onSelect: (genre: string) => console.log(`Selected genre: ${genre}`),
  },
};

// Interactive story with onSelect
export const Interactive: StoryFn<GenresProps> = (args) => {
  const [selectedGenre, setSelectedGenre] = useState<string>(
    args.selectedGenre || 'All'
  );

  return (
    <Genres
      genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
      selectedGenre={selectedGenre}
      onSelect={(genre: string) => setSelectedGenre(genre)}
    />
  );
};
