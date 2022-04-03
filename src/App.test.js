import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders filter by ABV', () => {
  render(<App />);
  const linkElement = screen.getByText(/Filter by ABV/i);
  expect(linkElement).toBeInTheDocument();
});

test('Search Bar is appearing', () => {
  render(<App />);
  const searchBar = screen.getByPlaceholderText(/Search by name/i);
  expect(searchBar).toBeInTheDocument();
});