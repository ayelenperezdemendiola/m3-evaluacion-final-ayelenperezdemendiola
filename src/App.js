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

  componentDidMount(){
    this.getCharacters();
  }

  getCharacters=()=>{
  fetchCharacters()
    .then (charactersData => {
      return (
        this.setState({
          characters: charactersData.results,
          loading: false
        })
      );
    })}

  render() {
    return (
      <div className="App">
   hola
      </div>
    );
  }
}

export default App;
