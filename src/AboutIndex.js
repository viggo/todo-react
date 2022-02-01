import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutIndex() {
  return (
    <>
      <h2>Hvem er vi?</h2>
      <p>
        <Link to="Viggo">Viggo</Link>
      </p>
      <p>
        <Link to="Kent">Kent</Link>
      </p>
    </>
  );
}
