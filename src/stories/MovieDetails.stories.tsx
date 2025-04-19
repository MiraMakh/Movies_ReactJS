import { Meta, StoryObj } from '@storybook/react';
import { MovieDetails } from '../components';
import { MovieDetailsProps } from '../models';

const meta: Meta<typeof MovieDetails> = {
  title: 'Components/MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    poster_path: {
      control: { type: 'text' },
      overview: 'Poster image of the movie',
    },
    title: {
      control: { type: 'text' },
      overview: 'Title of the movie',
    },
    release_date: {
      control: { type: 'number' },
      overview: 'The year the movie was released',
    },
    vote_average: {
      control: { type: 'number' },
      overview: 'Movie vote_average out of 10',
    },
    runtime: {
      control: { type: 'number' },
      overview: 'Movie runtime in hours and minutes',
    },
    overview: {
      control: { type: 'text' },
      overview: 'Brief overview of the movie',
    },
  },
};

export default meta;

type Story = StoryObj<MovieDetailsProps>;

// Default Story
export const Default: Story = {
  args: {
    poster_path: `./src/assets/Bitmap.png`,
    title: 'Movie title',
    vote_average: 8.8,
    runtime: 128,
    release_date: 2010,
    overview:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
};

// Long Description Story
export const LongDescription: Story = {
  args: {
    poster_path: `./src/assets/Bitmap.png`,
    title: 'Movie title',
    vote_average: 8.8,
    runtime: 128,
    release_date: 2010,
    overview:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
};
