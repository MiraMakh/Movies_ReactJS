import { render, screen } from '@testing-library/react';
import MovieTile from './MovieTile';
import { MovieTileProps } from '../../models';
import userEvent from '@testing-library/user-event';
import { movies } from '../../constants';

const movie = movies[0];
const defaultProps: MovieTileProps = {
  id: movie.id,
  poster_path: movie.poster_path,
  title: movie.title,
  release_date: movie.release_date,
  genres: movie.genres,
  onClick: jest.fn(),
  onEdit: jest.fn(),
  onDelete: jest.fn(),
  isActive: false,
};

describe('MovieTile Component', () => {
  it('should render the movie tile component', () => {
    render(<MovieTile {...defaultProps} />);

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(
      screen.getByText(`${movie.release_date} ・ ${movie.genres.join(', ')}`)
    ).toBeInTheDocument();

    const image = screen.getByAltText(movie.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', movie.poster_path);
  });

  it('should handle click events', async () => {
    const mockOnClick = jest.fn();
    render(<MovieTile {...defaultProps} onClick={mockOnClick} />);

    const tile = screen.getByText(movie.title);
    await userEvent.click(tile);

    expect(mockOnClick).toHaveBeenCalledWith(movie.id);
  });

  it('should handle context menu toggling', async () => {
    render(<MovieTile {...defaultProps} />);

    const menuButton = screen.getByText('...');
    await userEvent.click(menuButton);

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();

    await userEvent.click(menuButton);
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });

  it('should handle Edit callback', async () => {
    const mockOnEdit = jest.fn();
    const mockOnDelete = jest.fn();

    render(
      <MovieTile
        {...defaultProps}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const menuButton = screen.getByText('...');
    await userEvent.click(menuButton);

    const editButton = screen.getByText('Edit');
    await userEvent.click(editButton);
    expect(mockOnEdit).toHaveBeenCalledWith(movie.id);
  });

  it('should handle Delete callback', async () => {
    const mockOnEdit = jest.fn();
    const mockOnDelete = jest.fn();

    render(
      <MovieTile
        {...defaultProps}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const menuButton = screen.getByText('...');
    await userEvent.click(menuButton);

    const deleteButton = screen.getByText('Delete');
    await userEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledWith(movie.id);
  });
});
