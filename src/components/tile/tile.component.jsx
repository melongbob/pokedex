import React from 'react'
import './tile.styles.css'

export const Tile = ({pokemon, id, handleOnClick}) => (
    <div className='tile-container' onClick={() => {handleOnClick(id)}}>
        <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <h1> {pokemon.name} </h1>
    </div>
)