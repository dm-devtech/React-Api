import { render, screen } from '@testing-library/react';
import App from './App';

test('renders column header', () => {
  render(<App />);
  const linkElement = screen.getByText(/email/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders api test data', () => {
  render(<App />);
  const linkElement = screen.getByText(/michael/i);
  expect(linkElement).toBeInTheDocument();
});
