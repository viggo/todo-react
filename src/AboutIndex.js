import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext  } from './components/TodoContext';

export default function AboutIndex() {
  const { dark } = useContext(TodoContext)
  return (
    <>
      <h2>Hvem er vi?</h2>
      <p>
        <Link to="Viggo" style={{ color: dark && 'white'}}>Viggo</Link>
      </p>
      <p>
        <Link to="Kent" style={{ color: dark && 'white'}}>Kent</Link>
      </p>
    </>
  );
}
