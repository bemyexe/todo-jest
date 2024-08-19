import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../app';

describe('Handle Add todo', () => {
  it('should add new todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Write a new todo/i);
    const button = screen.getByTitle(/add/i);

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(screen.getByText(/new task/i)).toBeInTheDocument();
  });

  it('if input empty should not add new todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Write a new todo/i);
    const button = screen.getByTitle(/add/i);

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    const todos = screen.queryAllByRole('listitem');
    expect(todos).toHaveLength(0);
  });
});
