import React from 'react'
import {Tile} from '../tile/tile.component.jsx'
import './tile-list.styles.css'

function getNationalDexId(url){
    var arr = url.split("/");
    return arr[6];
}  

export const TileList = ({pokemons, handleOnClick}) => (
    <div className='tile-list'>
        {pokemons.map(pokemon => (
            <Tile key={getNationalDexId(pokemon.url)} 
                id={getNationalDexId(pokemon.url)} 
                pokemon={pokemon}
                handleOnClick={handleOnClick}
            />
        ))}
    </div>
)