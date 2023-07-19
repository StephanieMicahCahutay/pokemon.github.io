import React, { useState } from 'react';

function PokemonButton({ pokemon, onButtonClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="pokeball"
      onClick={() => onButtonClick(pokemon)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
    >
      <div className="pokeball__top"></div>
      <div className="pokeball__middle"></div>
      <div className="pokeball__bottom"></div>
      <img
        className="pokeball__pokemon"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </button>
  );
}

export default PokemonButton;
