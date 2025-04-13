import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';

const onCloseMock = jest.fn();

describe('Dialog Component', () => {
  it('Should render dialog with title and children', () => {
    render(
      <Dialog title="Test Title" onClose={onCloseMock}>
        <p>Test Body Content</p>
      </Dialog>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body Content')).toBeInTheDocument();
  });

  it('Should call onClose when close button is clicked', () => {
    render(
      <Dialog title="Test Title" onClose={onCloseMock}>
        <p>Test Body Content</p>
      </Dialog>
    );

    const closeButton = screen.getByLabelText('Close dialog');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
