import React from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MovieTile } from '../components';
import { MovieTileProps } from '../models';

const meta: Meta<typeof MovieTile> = {
  title: 'Components/MovieTile',
  component: MovieTile,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: {
      control: { type: 'number' },
      description: 'The unique ID of the movie tile.',
    },
    imageUrl: {
      control: { type: 'text' },
      description: 'Poster image URL of the movie.',
    },
    title: {
      control: { type: 'text' },
      description: 'Title of the movie displayed on the tile.',
    },
    releaseYear: {
      control: { type: 'number' },
      description: 'The release year of the movie.',
    },
    genres: {
      control: { type: 'object' },
      description: 'A list of genres associated with the movie.',
    },
    onClick: {
      action: 'onClick',
      description: 'Callback triggered when the tile is clicked.',
    },
    onEdit: {
      action: 'onEdit',
      description:
        'Callback triggered when "Edit" is clicked in the context menu.',
    },
    onDelete: {
      action: 'onDelete',
      description:
        'Callback triggered when "Delete" is clicked in the context menu.',
    },
    isActive: {
      control: { type: 'boolean' },
      description: 'Indicates whether the tile is active.',
    },
  },
};

export default meta;

type Story = StoryObj<MovieTileProps>;
const movie = {
  id: 1,
  imageUrl: `./src/assets/Bitmap.png`,
  title: 'Movie title',
  releaseYear: 2010,
  genres: ['Documentary', 'Horror'],
};

// Movie
export const Default: Story = {
  args: {
    ...movie,
    isActive: false,
    onClick: (id) => console.log(`Tile clicked with ID ${id}`),
    onEdit: (id) => console.log(`Edit movie with ID ${id}`),
    onDelete: (id) => console.log(`Delete movie with ID ${id}`),
  },
};

// Allows dynamic updates
export const Interactive: StoryFn<MovieTileProps> = (args) => {
  return <MovieTile {...args} />;
};

Interactive.args = {
  ...movie,
  isActive: false,
};

Interactive.argTypes = {
  onClick: { action: 'Handle Tile Clicked' },
  onEdit: { action: 'Handle Edit Action' },
  onDelete: { action: 'Handle Delete Action' },
};
