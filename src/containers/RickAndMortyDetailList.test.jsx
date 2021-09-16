import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyDetailList from './RickAndMortyDetailList';
import { MemoryRouter } from 'react-router';

describe('Rick And Morty Detail View Container', () => {
  it('should display one character with details', async () => {
    const component = render(
      <MemoryRouter>
        <RickAndMortyDetailList />
      </MemoryRouter>);

    screen.getByText('Loading...');

    const a = await screen.findByRole('link');
    expect(a).not.toBeEmptyDOMElement();
    expect(component).toMatchSnapshot();

  });
});
