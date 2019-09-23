import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
    const { routerProps, characters } = props;
    console.log(routerProps);
    const { id } = routerProps.match.params;
    const characterId = parseInt(id);
    const myCharacter = characters.find(item => item.id === parseInt(characterId));
    return (
        <React.Fragment>
            <Header />
            <div className="detail--general--container">
                <Link className="link--back" to="/"><p className="back--add">{`< Volver`}</p></Link>
                {myCharacter ?
                    <div className="detail--container">
                        <div className="detail--img__container">
                            <img alt={myCharacter.name} src={myCharacter.image} className="detail--img" />
                        </div>
                        <div className="character--description">
                        <h2 className="detail--name">{myCharacter.name}</h2>
                        <ul className="detail--info">
                            <li className="info species">{`Especie: ${myCharacter.species}`}</li>
                            <li className="info planet">{`Planeta: ${myCharacter.origin.name}`}</li>
                            <li className="info episodes">{`Cantidad de episodios: ${myCharacter.episode.length}`}</li>
                            <li className="info life">{`Estado: ${myCharacter.status}`}</li>
                        </ul>
                        </div>
                    </div>
                    :
                    <p className="add--notFound">Lo sentimos, no encontramos tu personaje</p>
                }
            </div>
        </React.Fragment>
    );
}
CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default CharacterDetail;