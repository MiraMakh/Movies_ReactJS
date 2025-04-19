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
      overview: 'The unique ID of the movie tile.',
    },
    poster_path: {
      control: { type: 'text' },
      overview: 'Poster image URL of the movie.',
    },
    title: {
      control: { type: 'text' },
      overview: 'Title of the movie displayed on the tile.',
    },
    release_date: {
      control: { type: 'number' },
      overview: 'The release year of the movie.',
    },
    genres: {
      control: { type: 'object' },
      overview: 'A list of genres associated with the movie.',
    },
    onClick: {
      action: 'onClick',
      overview: 'Callback triggered when the tile is clicked.',
    },
    onEdit: {
      action: 'onEdit',
      overview:
        'Callback triggered when "Edit" is clicked in the context menu.',
    },
    onDelete: {
      action: 'onDelete',
      overview:
        'Callback triggered when "Delete" is clicked in the context menu.',
    },
    isActive: {
      control: { type: 'boolean' },
      overview: 'Indicates whether the tile is active.',
    },
  },
};

export default meta;

type Story = StoryObj<MovieTileProps>;
const movie = {
  id: 1,
  poster_path: `./src/assets/Bitmap.png`,
  title: 'Movie title',
  release_date: 2010,
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
