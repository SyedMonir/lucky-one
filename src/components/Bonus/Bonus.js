import React from 'react';
import { Container } from 'react-bootstrap';

const Bonus = () => {
  return (
    <div>
      <Container className="text-center my-5">
        <h3>How react works?</h3>
        <p>
          First react create a virtual dom in memory. Its compare changes with
          dom then its update the necessary changes.
        </p>
      </Container>
    </div>
  );
};

export default Bonus;
