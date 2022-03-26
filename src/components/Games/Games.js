import React from 'react';
import Game from '../Game/Game';

const Games = ({ games, handleAddToCart }) => {
  return (
    <div className="row">
      {games.map((game) => (
        <Game
          key={game.id}
          handleAddToCart={handleAddToCart}
          game={game}
        ></Game>
      ))}
    </div>
  );
};

export default Games;
