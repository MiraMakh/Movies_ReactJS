import { render, screen } from '@testing-library/react';
import AddMovie from './AddMovie';
import userEvent from '@testing-library/user-event';

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

  /* @TODO: Add sumbit data test */
});
