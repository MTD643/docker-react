import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Lunden\'s name somewhere in the document', () => {
  const { getByText } = render(<App />);
  const lunden = getByText(/Lunden/i);
  expect(lunden).toBeInTheDocument();
});