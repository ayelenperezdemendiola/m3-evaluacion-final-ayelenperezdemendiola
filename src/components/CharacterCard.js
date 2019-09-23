import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
    const { name, image, species, id } = props;

    return (
        <Link to={`/character/${id}`}>
            <div className="character__card">
                <div className="character__img--container">
                    <img className="character__img" alt={name} src={image} />
                </div>
                <h2 className="character__name">{name}</h2>
                <p className="character__species">{species}</p>
            </div>
        </Link>
    );
}
CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
export default CharacterCard;