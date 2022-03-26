import React from 'react';
import { Container } from 'react-bootstrap';

const Bonus = () => {
  return (
    <div>
      <Container className="text-center my-5">
        <h3>How react works?</h3>
        <p>
          React is a library, for building user interfaces. First react create a
          virtual dom in memory. Its compare changes with dom then its update
          the necessary changes. Virtual dom is much faster then main dom.
        </p>

        <h3>Difference between Props Vs State</h3>
        <p>
          Props are used to pass data from one component to another component.
          State is passes only that component. Props cannot be modified but
          state can modified. Props are read-only but state is both read and
          write. State is like local data storage to that component. SetState
          property is used to update the state values in the component.
        </p>

        <h3>How useState Works?</h3>
        <p>
          A Hook is a react function that lets you use state and react features
          from a function based component. Hooks don't work inside classes.
          UseState is a hook for the functional component it's save state
          variables. When we declare a state variable with useState hook , it
          returns an array with two items. The first item is the current value,
          and the second is a function.
        </p>
      </Container>
    </div>
  );
};

export default Bonus;
