import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="todoapp stack-large">
      <main>
        <h2>Hvem er vi?</h2>
        <p>Viggo</p>
        <p>Kent</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
