// 2.Create a Counter component that shows a number with increment and decrement buttons.
//  Write tests using React Testing Library to verify that the counter updates correctly on button clicks.



import CounterOne from "@/Components/Day6Components/CounterOne";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('CounterOne Component', () => {
  it('renders initial count', () => {
    render(<CounterOne />);
    const countElement = screen.getByText('0');
    expect(countElement).toBeInTheDocument();
  });

  it('increments the count when "Increment" button is clicked', async () => {
    render(<CounterOne />);
    const incrementButton = screen.getByText('Increment');
    await userEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements the count when "Decrement" button is clicked', async () => {
    render(<CounterOne />);
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    await userEvent.click(incrementButton); 
    await userEvent.click(decrementButton); 

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('handles multiple increments and decrements correctly', async () => {
    render(<CounterOne />);
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    await userEvent.click(incrementButton); 
    await userEvent.click(incrementButton); 
    await userEvent.click(incrementButton); 
    await userEvent.click(decrementButton); 
    await userEvent.click(decrementButton); 

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
