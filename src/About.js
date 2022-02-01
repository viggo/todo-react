import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { TodoContext  } from './components/TodoContext';
import ToggleDark from './components/ToggleDark';

export default function About() {
  const { dark } = useContext(TodoContext)
  return (
    <div className="todoapp stack-large" style={{ backgroundColor: dark && 'black', color: dark && 'white'}}>
      <main>
        <Outlet />
      </main>
      <nav>
        <Link to="/" style={{ color: dark && 'white'}}>Home</Link>
      </nav>
      <ToggleDark />
    </div>
  );
}
