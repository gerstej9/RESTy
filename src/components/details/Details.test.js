import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Details from './Details.js';


describe('Testing the Details section', () => {
  it('Should display atwo pokemon', async () => {

    render(<Details data={{url: 'Awesome Pokemon', method: 'POST', data: [{name:'Bulbasaur'}, {name: 'Beedrill'}]}} />);
    await waitFor(() => expect(screen.getByText('Awesome Pokemon', { exact: false })).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('POST', { exact: false })).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText('Bulbasaur', { exact: false })).toBeInTheDocument());
  });
});

