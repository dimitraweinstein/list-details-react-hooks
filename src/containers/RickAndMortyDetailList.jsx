import React, { useEffect, useState } from 'react';
import Character from '../components/characters/Character';
import { fetchOneCharacter } from '../services/rickAndMortyApi';

const RickAndMortyDetailList = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  
  useEffect(() => (
    fetchOneCharacter()
      .then((character) => {
        setCharacter(character);
        console.log(character);
      })
      .finally(() => setLoading(false))
  ), []);
  
  if(loading) return <h1>Loading...</h1>;
  
  return (
    <Character character={character} />
  );
};

export default RickAndMortyDetailList;
