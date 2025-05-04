import { render, screen } from '@testing-library/react';
import AddMovie from './AddMovie';
import userEvent from '@testing-library/user-event';

jest.mock('../Dialog/Dialog', () => ({ children, title, onClose }: any) => (
  <div>
    <h1>{title}</h1>
    {children}
    <button aria-label="Close dialog" onClick={onClose}>
      Close
    </button>
  </div>
));

jest.mock('../MovieForm/MovieForm', () => ({ onSubmit }: any) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit({ title: 'Test Movie' });
    }}
  >
    <input type="text" placeholder="Enter movie title" />
    <button type="submit">Submit</button>
  </form>
));

describe('AddMovie Component', () => {
  const mockOnSubmit = jest.fn();

  const renderComponent = () => render(<AddMovie onSubmit={mockOnSubmit} />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render Add Movie button', () => {
    renderComponent();

    const addButton = screen.getByRole('button', { name: 'Add Movie' });
    expect(addButton).toBeInTheDocument();
  });

  it('Should open dialog', async () => {
    renderComponent();

    const addButton = screen.getByRole('button', { name: 'Add Movie' });
    await userEvent.click(addButton);

    expect(
      screen.getByRole('heading', { name: 'Add Movie' })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Enter movie title')
    ).toBeInTheDocument();
  });

  it('Should close dialog', async () => {
    renderComponent();

    await userEvent.click(screen.getByRole('button', { name: 'Add Movie' }));

    await userEvent.click(screen.getByLabelText('Close dialog'));

    expect(
      screen.queryByRole('heading', { name: 'Add Movie' })
    ).not.toBeInTheDocument();
  });

  it('Should submit movie data and close dialog', async () => {
    renderComponent();

    await userEvent.click(screen.getByRole('button', { name: 'Add Movie' }));

    await userEvent.type(
      screen.getByPlaceholderText('Enter movie title'),
      'Test Movie'
    );
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({ title: 'Test Movie' });

    expect(
      screen.queryByRole('heading', { name: 'Add Movie' })
    ).not.toBeInTheDocument();
  });
});
