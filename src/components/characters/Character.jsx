import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, status, species }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      {name} - {species} - {status}
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
