import { render, waitFor, screen, fireEvent} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import { rest } from 'msw';
import { setupServer } from 'msw/node'

test('renders form and displays results', async () => {
  render(<App />);

  let textField = screen.getByTestId('form-input')
  userEvent.type(textField, 'https://pokeapi.co/api/v2/pokemon');
  let button = screen.getByText('Submit');
  let GET = screen.getByText('GET');

  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  fireEvent.click(GET);

  let results = await screen.findByTestId('results');

  expect(results).toBeInTheDocument();

  let bulbasaur = await screen.findByText(/bulbasaur/i);

  expect(bulbasaur).toBeInTheDocument();

});

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        { name: 'Bulbasaur' },
        { name: "Beedrill" }
      ],
      count: 0,
    }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('testing the App', () => {
  it('should fetch and display pokemon data', async () => {
    render(<App />);

    let button = screen.getByText('Submit');
  
    expect(button).toBeInTheDocument();
  
    fireEvent.click(button);

    await waitFor(() => expect(screen.getByText('Bulbasaur' , {exact: false})).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Beedrill', {exact: false})).toBeInTheDocument());
  })
})