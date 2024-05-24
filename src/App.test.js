import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for toBeInTheDocument matcher
import App from './App';

test('renders login header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /login/i });
  expect(headerElement).toBeInTheDocument();
});
