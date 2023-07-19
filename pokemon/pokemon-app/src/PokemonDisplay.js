import React from 'react';

function PokemonDisplay({ pokemon }) {
  return (
    <div>
      <div className="label">
        <h2 className="pokemon-name">Hello, I am <span className="name">{pokemon.name}</span>!</h2>
      </div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="label">
        <p><span className="details">Height: {pokemon.height}</span></p>
        <p><span className="details">Type: {pokemon.types[0].type.name}</span></p>
        <p><span className="details">Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</span></p>
      </div>
    </div>
  );
}

export default PokemonDisplay;
