import React from 'react';
import { render, screen } from '@testing-library/react';
import TicTacToeGame from './TicTacToeGame';
import ChessGame from './ChessGame';

test('renders learn react link', () => {
  render(<TicTacToeGame/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
