import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import Form from './Form.js';

describe('testing functionality of Form.js', () => {
  it('Needs to run make an api call on button submit', async () => {
    let handleUpdate = jest.fn();

    render(<Form updateResults={handleUpdate} />);

    let textField = screen.getByTestId('form-input')
    userEvent.type(textField, 'https://pokeapi.co/api/v2/pokemon');
    let button = screen.getByText('Submit');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    await waitFor(() => expect(handleUpdate).toHaveBeenCalled());
  });
});