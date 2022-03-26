import React from 'react';
import Game from '../Game/Game';

const Games = ({ games }) => {
  return (
    <div className="row">
      {games.map((game) => (
        <Game key={game.id} game={game}></Game>
      ))}
    </div>
  );
};

export default Games;
