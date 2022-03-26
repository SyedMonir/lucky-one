import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Game.css';

const Game = ({ game }) => {
  const { name, price, image } = game;
  return (
    <div className="col-md-4 p-2">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>USD: ${price}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Game;
