import React, { Component } from 'react';
import { fetchCharacters } from '../services/rickAndMortyApi';
import CharacterList from '../components/characters/CharacterList';

export default class RickAndMortyList extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ loading: false, characters });
  }

  render() {
    const { loading, characters } = this.state;

    if(loading) 
      return <h1>Loading...</h1>;

    return (
      <ul aria-label="characters">
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterList characters={characters}/>
          </li>
        ))}
      </ul>
    );
  }
}
