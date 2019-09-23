import React from 'react';
import { FilterByName } from './Filter';
import { CharacterList } from './CharacterList';

const Home = (props) => {
    const { handleChangeName, characters, filterName } = props;
    return (
        <React.Fragment>
            <h1 className="app--title">Rick and Morty</h1>
            <FilterByName
                handleChangeName={handleChangeName}
            />
            <CharacterList
                characters={characters}
                filterName={filterName}
            />
        </React.Fragment>
    )
}

export { Home };