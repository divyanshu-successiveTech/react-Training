// 4.Implement a UserProfile component that displays a user's name, email,
//  and phone number using props. Write tests using React Testing Library to ensure the component correctly renders the provided user data.

import UserProfile from "@/Components/Day6Components/UserProfile";
import { render, screen } from '@testing-library/react';

describe('UserProfile Component', () => {
  const sampleUser = {
    name: 'Divyanshu',
    email: 'Divyanshu@abc.com',
    phone: '1234567890',
  };

  it('renders the user name', () => {
    render(<UserProfile {...sampleUser} />);
    expect(screen.getByRole('heading', { name: sampleUser.name })).toBeInTheDocument();
  });

  it('renders the user email', () => {
    render(<UserProfile {...sampleUser} />);
    expect(screen.getByText(/email:/i)).toHaveTextContent(`Email: ${sampleUser.email}`);
  });

  it('renders the user phone number', () => {
    render(<UserProfile {...sampleUser} />);
    expect(screen.getByText(/phone:/i)).toHaveTextContent(`Phone: ${sampleUser.phone}`);
  });
});

