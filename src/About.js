import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <div className="todoapp stack-large">
      <main>
        <Outlet />
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
