export const fetchCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((json) =>
      json.results.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        image: character.image,
        species: character.species
      }))
    );
};

export const fetchOneCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((json) => ({
      id: json.id,
      name: json.name,
      status: json.status,
      image: json.image,
      species: json.species
    }));
};
