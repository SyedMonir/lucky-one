import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Carts = () => {
  return (
    <div className="carts">
      <Card>
        {/* <Card.Img variant="top" src={} /> */}
        <Card.Body>
          <Card.Title>Selected games: </Card.Title>
          <Card.Text>USD: ${}</Card.Text>
          {/* <Button variant="primary">Add To Cart</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carts;
