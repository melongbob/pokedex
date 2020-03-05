import React from 'react';
import './display-panel.styles.css';

export const DisplayPanel = (props) => (
    <div className='display'>
        <img className='sprite-image' alt={props.pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`} />
        <div className='description'>
            <h3>{props.pokemon.id}. {props.pokemon.name.toUpperCase()}</h3>
            <p>{props.pokemon.description}</p>
        </div>
    </div>
)