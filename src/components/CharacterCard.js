import React from 'react';

const CharacterCard = (props) => {
    const { name, image, species } = props;

    return (
        <div className="character__card">
            <div className="character__img--container">
                <img className="character__img" alt={name} src={image} />
            </div>
            <h2 className="character__name">{name}</h2>
            <p className="character__species">{species}</p>
        </div>
    );
}

export { CharacterCard };