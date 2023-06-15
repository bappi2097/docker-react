import { render, screen } from '@testing-library/react';
import App from './App';

test('renders It\'s amazing link', () => {
  render(<App />);
  const linkElement = screen.getByText(/It's amazing/i);
  expect(linkElement).toBeInTheDocument();
});


test('new test', () => {
  render(<App />);
  const linkElement = screen.getByText(/It's amazing/i);
  expect(linkElement).toBeInTheDocument();
});

