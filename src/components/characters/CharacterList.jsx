import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ }) => {
  
};

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
