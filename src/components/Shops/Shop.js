import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Games from '../Games/Games';
import './Shop.css';

const Shop = () => {
  // Load Data
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('games.json')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  // Cart
  const [carts, setCarts] = useState([]);
  const handleAddToCart = (game) => {
    const addedGames = [...carts, game];
    setCarts(addedGames);
    // console.log(addedGames);
  };

  // Remove From Cart
  const handleRemoveCarts = () => setCarts([]);

  return (
    <main>
      <section className="parent-container">
        <h3>New To The Syed Games Store</h3>
        <section id="shops" className="row">
          <div className="col-md-9">
            <Games handleAddToCart={handleAddToCart} games={games} />
          </div>
          <div className="col-md-3">
            <Carts carts={carts} handleRemoveCarts={handleRemoveCarts} />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Shop;
