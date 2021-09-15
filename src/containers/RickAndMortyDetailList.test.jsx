import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyDetailList from './RickAndMortyDetailList';
// import { MemoryRouter } from 'react-router';

describe('Rick And Morty Detail View Container', () => {
  it('should display one character with details', async () => {
    render(<RickAndMortyDetailList />);

    screen.getByText('Loading...');

    const div = await screen.findByRole('div', { name: 'character' });
    expect(div).not.toBeEmptyDOMElement();
    
  });
});
