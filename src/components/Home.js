import React from 'react';
import FilterByName from './FilterByName';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

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

Home.propTypes = {
    handleChangeName: PropTypes.func.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterName: PropTypes.string.isRequired
}

export default Home;