// 5.Create a Modal component that displays a dialog with content. Users should be able to open and close the modal. Write tests using 
// React Testing Library to verify that the modal appears and disappears when triggered.

import SampleModal from "@/Components/Day6Components/SampleModal";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SampleModal Component', () => {
  it('should not show modal content initially', () => {
    render(<SampleModal />);
    expect(screen.queryByText('heading')).toBeNull();
    expect(screen.queryByText('text')).toBeNull();
  });

  it('should open modal when button is clicked', async () => {
    render(<SampleModal />);
    const openButton = screen.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);
    expect(screen.getByText('heading')).toBeInTheDocument();
    expect(screen.getByText('text')).toBeInTheDocument();
  });
 
  it('should close modal when pressing Escape key', async () => {
    render(<SampleModal />);
    const openButton = screen.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);
    expect(screen.getByText('heading')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByText('heading')).toBeNull();
    });
  });
});
