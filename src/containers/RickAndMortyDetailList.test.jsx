import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyDetailList from './RickAndMortyDetailList';
// import { MemoryRouter } from 'react-router';

describe('Rick And Morty Detail View Container', () => {
  it('should display one character with details', async () => {
    render(<RickAndMortyDetailList />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'character' });
    expect(ul).not.toBeEmptyDOMElement();
    
  });
});
