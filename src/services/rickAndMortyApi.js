// export const fetchCharacters = async () => {
//   const res = await fetch('https://rickandmortyapi.com/api/character');
//   const results  = res.json();
//   console.log(results, 'these are the results');
//   return results;
// };

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
