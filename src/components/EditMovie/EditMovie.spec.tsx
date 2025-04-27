import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditMovie from './EditMovie';
import { MovieDetailsProps } from '../../models';

describe('EditMovie Component', () => {
  const mockOnSubmit = jest.fn();
  const sampleMovie: MovieDetailsProps = {
    title: 'Inception',
    releaseYear: 17,
    imageUrl: 'test',
    rating: 8.8,
    genre: 'Sci-Fi',
    duration: '148',
    description: 'test',
  };

  const renderComponent = () =>
    render(<EditMovie initialMovie={sampleMovie} onSubmit={mockOnSubmit} />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render Edit Movie button', () => {
    renderComponent();

    const editButton = screen.getByRole('button', { name: 'Edit Movie' });
    expect(editButton).toBeInTheDocument();
  });

  it('Should open dialog', async () => {
    const user = userEvent.setup();
    renderComponent();

    const editButton = screen.getByRole('button', { name: 'Edit Movie' });
    await user.click(editButton);

    const dialogTitle = screen.getByRole('heading', { name: 'Edit Movie' });
    expect(dialogTitle).toBeInTheDocument();
  });

  it('Should close dialog ', async () => {
    const user = userEvent.setup();
    renderComponent();

    const editButton = screen.getByRole('button', { name: 'Edit Movie' });
    await user.click(editButton);

    const closeButton = screen.getByLabelText('Close dialog');
    await user.click(closeButton);

    expect(
      screen.queryByRole('heading', { name: 'Edit Movie' })
    ).not.toBeInTheDocument();
  });

  /* @TODO: Add sumbit data test */
});
