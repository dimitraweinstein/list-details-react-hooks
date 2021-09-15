import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Character from '../components/characters/Character';
import { fetchOneCharacter } from '../services/rickAndMortyApi';

const RickAndMortyDetailList = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  
  useEffect(() => (
    fetchOneCharacter(id)
      .then((character) => {
        setCharacter(character);
        // console.log(character);
      })
      .finally(() => setLoading(false))
  ), []);
  // console.log(character, 'this is character');
  if(loading) return <h1>Loading...</h1>;
  
  return (
    <Character
      image={character.image}
      name={character.name}
      species={character.species}
      status={character.status}
    />
  );
};

export default RickAndMortyDetailList;
