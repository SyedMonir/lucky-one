import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Game.css';
import { FaCartPlus } from 'react-icons/fa';

const Game = ({ game, handleAddToCart }) => {
  const { name, price, image } = game;
  return (
    <div className="col-md-4 p-2">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>USD: ${price}</Card.Text>
          <Button onClick={() => handleAddToCart(game)} variant="primary">
            Add To Cart <FaCartPlus style={{ marginBottom: '5px' }} />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Game;
