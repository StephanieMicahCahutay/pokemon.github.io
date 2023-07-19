import React from 'react';

function Sort({ pokemonList, setPokemonList }) {
  function sortPokemonByHeight() {
    const sortedPokemonList = [...pokemonList].sort((a, b) => a.height - b.height);
    setPokemonList(sortedPokemonList);
  }

  return (
    <div className="sort-container">
      <button className="sort-button" onClick={sortPokemonByHeight}>
        <span className="sort-text">SORT BY HEIGHT</span>
      </button>
    </div>
  );
}

export default Sort;
