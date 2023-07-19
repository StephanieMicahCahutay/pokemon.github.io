import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonButton from './PokemonButton';
import PokemonDisplay from './PokemonDisplay';
import Sort from './Sort';

function PokemonApp() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const randomOffset = Math.floor(Math.random() * 1000);
      const result = await axios(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${randomOffset}`);
      const pokemonData = await Promise.all(result.data.results.map(async (pokemon) => {
        const res = await axios(pokemon.url);
        return res.data;
      }));
      setPokemonList(pokemonData);
    }
    fetchData();
  }, []);

  function handlePokemonButtonClick(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className="container">
      <div className="title-container">
        <h1>Choose your</h1>
        <h1 className="title">Pokémon!</h1>
      </div>
      <div>
      <Sort pokemonList={pokemonList} setPokemonList={setPokemonList} />
      <div className="pokemon-buttons-container">
        {pokemonList.map((pokemon, index) => (
          <PokemonButton
            key={index}
            pokemon={pokemon}
            onButtonClick={handlePokemonButtonClick}
          />
        ))}
      </div>
      </div>
      <div>
        {selectedPokemon && <PokemonDisplay pokemon={selectedPokemon} />}
      </div>
    </div>
  );
}

export default PokemonApp;
