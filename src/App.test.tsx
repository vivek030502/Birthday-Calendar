import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calendar component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Birthdays on/i);
  expect(linkElement).toBeInTheDocument();
});
