import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map((character) => {
      <li key={character.id}>
        <Character {...characters} />
      </li>
    })}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        images: PropTypes.string.isRequired
      }
    )
  )
};

export default CharacterList;
