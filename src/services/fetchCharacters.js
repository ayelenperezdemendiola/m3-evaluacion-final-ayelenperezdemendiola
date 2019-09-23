const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetchCharacters = () => {return(fetch (ENDPOINT).then (resp => resp.json ()))};

export {fetchCharacters};

