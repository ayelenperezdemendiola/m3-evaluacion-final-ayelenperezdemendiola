import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true
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

  render() {
    const { characters } = this.state;
    return (
      <div className="app">
        <h1 className="app--title">Rick and Morty</h1>
        <ul className="characters--list">
          {characters.map(item => {
            return (
              <li className="character" key={item.id}>
                <div className="character__img--container">
                  <img className="character__img" alt={item.name} src={item.image} />
                </div>
                <h2 className="character__name">{item.name}</h2>
                <p className="character__species">{item.species}</p>
              </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
