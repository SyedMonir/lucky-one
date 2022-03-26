import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Carts from '../Carts/Carts';
import Games from '../Games/Games';
import './Shop.css';

const Shop = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('games.json')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <Container>
      <section id="shops" className="row">
        <div className="col-md-9">
          <Games games={games} />
        </div>
        <div className="col-md-3">
          <Carts />
        </div>
      </section>
    </Container>
  );
};

export default Shop;
