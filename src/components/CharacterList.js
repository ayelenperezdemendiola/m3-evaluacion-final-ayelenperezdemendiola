import React from 'react';
import { CharacterCard } from './CharacterCard';

const CharacterList = (props) => {
    const { characters, filterName } = props;
    return (
        <ul className="characters--list">
            {characters
                .filter(item => item.name.toUpperCase().includes(filterName.toUpperCase()))
                .map(item => {
                    return (
                        <li className="character" key={item.id}>
                            < CharacterCard
                                name={item.name}
                                image={item.image}
                                species={item.species}
                                id={item.id}
                            />
                        </li>
                    );
                })}
        </ul>
    );
}

export { CharacterList };