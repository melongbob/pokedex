import React, {Component} from 'react';
import{TileList} from './components/tile-list/tile-list.component.jsx';
import{SearchBox} from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      pokemons: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(entries => this.setState({pokemons: entries.results}));
  }

  render(){
    const {pokemons, searchField} = this.state;
    const filteredPokemons = pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title">Pokédex</h1>
        <SearchBox 
          placeholder="search pokemon" 
          handleChange={e => this.setState({searchField: e.target.value})} 
        />
        <TileList pokemons={filteredPokemons} />
      </div>
    );
  }
}

export default App;
