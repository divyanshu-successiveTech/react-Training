import LoginFormSubmission from "@/Components/Day6Components/LoginFormSubmission";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LoginFormSubmission Component', () => {
  it('renders input fields and a submit button', () => {
    render(<LoginFormSubmission />);
    
    expect(screen.getByPlaceholderText('Enter UserName')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('updates input values when user types', async () => {
    render(<LoginFormSubmission />);
    const usernameInput = screen.getByPlaceholderText('Enter UserName');
    const passwordInput = screen.getByPlaceholderText('Enter Password');

    await userEvent.type(usernameInput, 'testuser');
    await userEvent.type(passwordInput, 'testpass');

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('testpass');
  });

  it('calls console.log with correct values on submit and clears inputs', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<LoginFormSubmission />);
    
    const usernameInput = screen.getByPlaceholderText('Enter UserName');
    const passwordInput = screen.getByPlaceholderText('Enter Password');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await userEvent.type(usernameInput, 'ABC');
    await userEvent.type(passwordInput, '123');

    await userEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith('ABC', '123');
    expect(usernameInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');

    consoleSpy.mockRestore(); 
  });
});
