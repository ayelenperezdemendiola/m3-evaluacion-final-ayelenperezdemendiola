import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import CharacterDetail from './components/CharacterDetail';
import Home from './components/Home';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

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
    const { characters, filterName, loading } = this.state;
    return (
      <div className="app">
        {loading && <p className="loading--add">Cargando personajes</p>}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Home
                handleChangeName={this.handleChangeName}
                characters={characters}
                filterName={filterName}
              />
            );
          }}
          />
          <Route path="/character/:id" render={(routerProps)=>{return (
            <CharacterDetail
            routerProps={routerProps}
            characters={characters}
            />
          );
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
