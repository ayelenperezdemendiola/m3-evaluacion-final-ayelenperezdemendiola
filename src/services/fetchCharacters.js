const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = () => {return(fetch (ENDPOINT).then (resp => resp.json ()))};

export {fetchCharacters};

