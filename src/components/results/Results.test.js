import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from './Results.js';

describe('Testing the results section', () => {
  it('Shuold display two pokemon', async () => {

    render(<Results data={{results: [{name:'Bulbasaur'}, {name: 'Beedrill'}]}} />);

    await waitFor(() => expect(screen.getByText('Bulbasaur')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Beedrill')).toBeInTheDocument());
  });
});