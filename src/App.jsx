import React, { useState } from 'react';
import PokemonList from './PokemonList';
import './App.css';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="App">
      <PokemonList onSelected={handlePokemonSelect} />
    </div>
  );
}

export default App;
