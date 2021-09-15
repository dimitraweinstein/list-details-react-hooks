import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyList from '../containers/RickAndMortyList';

describe('Rick And Morty List Container', () => {
  it('should display a list of characters on a page', async () => {
    render(<RickAndMortyList />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
