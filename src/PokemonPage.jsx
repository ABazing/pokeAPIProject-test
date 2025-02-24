import React from 'react';

export default function PokemonPage({pokemon}) {

    console.log(pokemon.name);

    return (
        <div className="pokemon-page">
        <h3>{pokemon.name}</h3>
        </div>
    );
}