import React from 'react';
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import RickAndMortyDetailList from './RickAndMortyDetailList';
import { MemoryRouter } from 'react-router';
import detailData from '../data/detailData.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    return res(ctx.json(detailData));
  })
);

describe('Rick And Morty Detail View Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should display one character with details', async () => {
    const component = render(
      <MemoryRouter initialEntries={['/2']}>
        <RickAndMortyDetailList />
      </MemoryRouter>);

    screen.getByText('Loading...');

    const a = await screen.findByRole('link');
    expect(a).not.toBeEmptyDOMElement();
    expect(component).toMatchSnapshot();

  });
});

