import React, { useState, useEffect } from 'react';

function PokemonList({ onSelect }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pokeList = [];
      for (let i = 1; i <= 151; i++) {
        pokeList.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
      }
      const results = await Promise.all(pokeList);
      setPokemons(results);
    }
    fetchData();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemons.map(pokelist => {
        console.log(pokelist.name)
        return(<>
          <div>
            <img src={pokelist.sprites.front_default} alt={pokelist.name}/>
            <h3>{pokelist.name}</h3>
          </div>
        </>
      )
        //return(<h3>{pokelist.name}</h3>)
      })}
    </div>
  );
}

export default PokemonList;
