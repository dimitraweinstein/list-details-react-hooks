import React, { useEffect, useState } from 'react';
import Character from '../components/characters/Character';
import { fetchOneCharacter } from '../services/rickAndMortyApi';

const RickAndMortyDetailList = () => {
  const [ loading, setLoading ] = useState(true);
  
  if(loading) return <h1>Loading...</h1>;
};

export default RickAndMortyDetailList;
