import { render, screen } from '@testing-library/react';
import App from './App';

test('renders api test data', () => {
  render(<App />);
  const linkElement = screen.getByText(/michael/i);
  expect(linkElement).toBeInTheDocument();
});
