import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../app';

describe('Handle Toggle todo', () => {
  it('should toggle todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Write a new todo/i);
    const button = screen.getByTitle(/add/i);

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
