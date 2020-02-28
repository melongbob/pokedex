import React from 'react'
import './tile.styles.css'

export const Tile = props => (
    <div className='tile-container'>
        <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
        <h1> {props.pokemon.name} </h1>
    </div>
)