import React, { useState, useEffect, } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/rickAndMortyApi';

const RickAndMortyList = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => (
    fetchCharacters()
      .then((characters) => {
        setCharacters(characters);
        console.log(characters, 'the othere one');
      })
      .finally(() => setLoading(false))
  ), []);
  
  if(loading) return <h1>Loading...</h1>;
  
  return (
    <CharacterList
      characters={characters}
    />
  );
};

export default RickAndMortyList;
