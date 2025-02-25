import React from 'react';

export default function PokemonPage({ pokemon }) {

    // console.log(pokemon.name);

    return (<>
        <h1>{pokemon.name.toUpperCase()}</h1>
        <div className="pokemon-page">
            <div className="stats-info">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-sprite" />
                <p>Height: {pokemon.height / 10}m / Weight: {pokemon.weight / 10}kg</p>

            </div>
            <div className="pokemon-info">
                <div className="types-info">
                    <h3>Type:</h3>
                    <ul>
                        {pokemon.types.map((type, index) => (
                            <p key={index}>{type.type.name}</p>
                        ))}
                    </ul>
                </div>
                <div className="moves-info">
                    <h3>Moves:</h3>
                    <ul>
                        {pokemon.moves.map((move, index) => (
                            <p key={index}>{move.move.name}</p>
                        ))}
                    </ul>
                </div>
                <div className="abilities-info">
                    <h3>Abilites:</h3>
                    <ul>
                        {pokemon.abilities.map((ability, index) => (
                            <p key={index}>{ability.ability.name}</p>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}