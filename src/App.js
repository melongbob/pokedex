import React, {Component} from 'react';
import{TileList} from './components/tile-list/tile-list.component.jsx';
import{SearchBox} from './components/search-box/search-box.component.jsx';
import{DisplayPanel} from './components/display-panel/display-panel.component.jsx';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      pokemons: [],
      searchField: '',
      display: {
        name:'',
        id:0,
        sprite:'',
        description:''
      }
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(entries => this.setState({pokemons: entries.results}));
  }

  handleOnClick(id){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(response => response.json())
      .then(entry => {
        const pokemon = {
          name: entry.name,
          id: entry.id,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          description: entry.flavor_text_entries[1].flavor_text
        }
        this.setState({display: pokemon});
      })
      .catch(err => console.log(err));
  }

  render(){
    const {pokemons, searchField} = this.state;
    const filteredPokemons = pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title">Pokédex</h1>
        <DisplayPanel pokemon={this.state.display} />
        <SearchBox 
          placeholder="search pokemon" 
          handleChange={e => this.setState({searchField: e.target.value})} 
        />
        <TileList pokemons={filteredPokemons} handleOnClick={this.handleOnClick}/>
      </div>
    );
  }
}

export default App;
