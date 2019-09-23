import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import { FilterByName } from './components/Filter';
import { CharacterList } from './components/CharacterList';
import { CharacterDetail } from './components/CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true,
      filterName: ''
    }
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    fetchCharacters()
      .then(charactersData => {
        return (
          this.setState({
            characters: charactersData.results,
            loading: false
          })
        );
      })
  }

  handleChangeName = (event) => {
    const currentName = event.currentTarget.value;
    return (
      this.setState({
        filterName: currentName

      })
    );
  }

  render() {
    const { characters, filterName } = this.state;
    return (
      <div className="app">
        <h1 className="app--title">Rick and Morty</h1>
        <FilterByName
        handleChangeName={ this.handleChangeName }
        />
        <CharacterList 
        characters={ characters }
        filterName={ filterName }
        />
        <CharacterDetail
        />
      </div>
    );
  }
}

export default App;
