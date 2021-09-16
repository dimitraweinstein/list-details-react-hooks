import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) =>
  (
    <ul aria-label="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <Link to={`/${character.id}`}>
            <Character
              image={character.image}
              name={character.name}
              species={character.species}
              status={character.status}
            />
          </Link>
        </li>
      ))}
    </ul>
  );

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  ),
};

export default CharacterList;
