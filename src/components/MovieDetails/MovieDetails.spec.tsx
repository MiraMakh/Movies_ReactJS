import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { MovieDetailsProps } from '../../models';

describe('MovieDetails Component', () => {
  const defaultProps: MovieDetailsProps = {
    imageUrl: `./src/assets/Bitmap.png`,
    title: 'Movie title',
    rating: 8.8,
    duration: '2h 34min',
    releaseYear: 2010,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  };

  it('should render the movie details', () => {
    render(<MovieDetails {...defaultProps} />);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeInTheDocument();

    const releaseYear = screen.getByText(`${defaultProps.releaseYear}`);
    expect(releaseYear).toBeInTheDocument();

    const duration = screen.getByText(defaultProps.duration);
    expect(duration).toBeInTheDocument();

    const rating = screen.getByText(`${defaultProps.rating}/10`);
    expect(rating).toBeInTheDocument();

    const description = screen.getByText(defaultProps.description);
    expect(description).toBeInTheDocument();
  });
});
