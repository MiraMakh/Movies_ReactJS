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
    imageUrl: {
      control: { type: 'text' },
      description: 'Poster image of the movie',
    },
    title: {
      control: { type: 'text' },
      description: 'Title of the movie',
    },
    releaseYear: {
      control: { type: 'number' },
      description: 'The year the movie was released',
    },
    rating: {
      control: { type: 'number' },
      description: 'Movie rating out of 10',
    },
    duration: {
      control: { type: 'text' },
      description: 'Movie duration in hours and minutes',
    },
    description: {
      control: { type: 'text' },
      description: 'Brief description of the movie',
    },
  },
};

export default meta;

type Story = StoryObj<MovieDetailsProps>;

// Default Story
export const Default: Story = {
  args: {
    imageUrl: `./src/assets/Bitmap.png`,
    title: 'Movie title',
    rating: 8.8,
    duration: '2h 34min',
    releaseYear: 2010,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
};

// Long Description Story
export const LongDescription: Story = {
  args: {
    imageUrl: `./src/assets/Bitmap.png`,
    title: 'Movie title',
    rating: 8.8,
    duration: '2h 34min',
    releaseYear: 2010,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
};
