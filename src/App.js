import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';

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
          filterName : currentName

        })
      );
  }

  render() {
    const { characters, filterName } = this.state;
    return (
      <div className="app">
        <h1 className="app--title">Rick and Morty</h1>
        <input type="text" className="filter--name" onChange={this.handleChangeName}/>
        <ul className="characters--list">
          {characters
          .filter (item=>item.name.toUpperCase().includes(filterName.toUpperCase()))
          .map(item => {
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
