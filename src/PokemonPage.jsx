import React from 'react';

export default function PokemonPage({pokemon}) {

    // console.log(pokemon.name);

    return (
        <div className="pokemon-page">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} className="pokemon-sprite"/>
            <div className ="discription">
                {/* <h3>Type:</h3>
                <ul>
                    {pokemon.types.map((type, index) => (
                        <li key={index}>{type.type.name}</li>
                    ))}
                </ul> */}
                <p>Height:{pokemon.height}</p>
                <p>Weight:{pokemon.weight}</p>
                <h3>Type:</h3>
                <ul>
                    {pokemon.types.map((type, index) => (
                        <li key={index}>{type.type.name}</li>
                    ))}
                </ul>
                <h3>Moves</h3>
                <ul>
                    {pokemon.moves.map((move, index) => (
                        <li key={index}>{move.move.name}</li>
                    ))}
                </ul>
                <h3>Abilites</h3>
                <ul>
                    {pokemon.abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}