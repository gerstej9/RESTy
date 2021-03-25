import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from './Results.js';


describe('Testing the results section', () => {
  it('Should display atwo pokemon', async () => {

    render(<Results data={{results: [{name:'Bulbasaur'}, {name: 'Beedrill'}]}} />);
    await waitFor(() => expect(screen.getByText('Bulbasaur', { exact: false })).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Beedrill', { exact: false })).toBeInTheDocument());
  });
});

describe('Testing the results section loader', () => {
  it('Should display atwo pokemon', async () => {

    render(<Results data={{isLoading: true, results: [{name:'Bulbasaur'}, {name: 'Beedrill'}]}} />);
    expect(screen.getByTestId('loader')).toBeTruthy();
  });
});

describe('Testing the results section display of results after loader', () => {
  it('Should display atwo pokemon', async () => {

    render(<Results data={{isLoading: true, results: [{name:'Bulbasaur'}, {name: 'Beedrill'}]}} />);
    expect(screen.getByTestId('loader')).toBeTruthy();
    render(<Results data={{isLoading: false, results: [{name:'Bulbasaur'}, {name: 'Beedrill'}]}} />);
    await waitFor(() => expect(screen.getByText('Bulbasaur', { exact: false })).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Beedrill', { exact: false })).toBeInTheDocument());
  });
});