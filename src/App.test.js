import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders AWS somewhere in the document', () => {
  const { getByText } = render(<App />);
  const aws = getByText(/AWS/i);
  expect(aws).toBeInTheDocument();
});