import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { FaRegWindowClose } from 'react-icons/fa';
import './Carts.css';

const Carts = ({ carts, handleRemoveCarts }) => {
  const randomGame = Math.floor(Math.random() * carts.length);

  //   For Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="carts p-2">
      <Card>
        <Card.Body>
          <Card.Title>Selected games: {carts.length} </Card.Title>
          {carts.map((game) => (
            <div
              key={game.id}
              className="d-flex justify-content-between align-items-center my-3"
            >
              <img src={game.image} width={50} height={50} alt={game.name} />
              <h6 style={{ marginBottom: '0' }}>{game.name}</h6>
              <FaRegWindowClose />
            </div>
          ))}
        </Card.Body>

        {/* onClick={handleShow} */}
        <Button onClick={handleShow} className="mb-2">
          Choose one from me
        </Button>
        {/* Modal for random item */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>This will be best choice for you</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img variant="top" src={carts[randomGame]?.image} />
              <Card.Body>
                <Card.Title>{carts[randomGame]?.name}</Card.Title>
                <Card.Text>USD: ${carts[randomGame]?.price}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
        <Button onClick={handleRemoveCarts} variant="danger">
          Reset
        </Button>
      </Card>
    </div>
  );
};

export default Carts;
