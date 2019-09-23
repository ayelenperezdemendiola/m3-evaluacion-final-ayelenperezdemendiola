import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';
import Header from './Header';
const Home = (props) => {
    const { handleChangeName, characters, filterName } = props;
    return (
        <React.Fragment>
                <Header />
            <main className="app--main">
                <Filters
                    handleChangeName={handleChangeName}
                />
                <CharacterList
                    characters={characters}
                    filterName={filterName}
                />
            </main>
        </React.Fragment>
    )
}

Home.propTypes = {
    handleChangeName: PropTypes.func.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterName: PropTypes.string.isRequired
}

export default Home;