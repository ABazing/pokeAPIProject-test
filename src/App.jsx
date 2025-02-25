import React, { useState } from 'react';
import PokemonList from './PokemonList';
import PokemonPage from './PokemonPage';
import './App.css';

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
    setCurrentPage('pokemonPage')
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (<>
          <div className="App">
            <PokemonList onSelect={handlePokemonSelect} setCurrentPage={setCurrentPage} setSelectedPokemon={setSelectedPokemon}/>
          </div>
          </>
        )
      case 'pokemonPage':
        return (<>
          {/* <div className="pokemon-page"> */}
            <PokemonPage pokemon={selectedPokemon} />
          {/* </div> */}
        </>
      )
    }
  }

  return (
    <>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
      </nav>
      {renderPage()}
    </>
  );
}

// export default App;
