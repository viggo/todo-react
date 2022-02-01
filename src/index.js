import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { TodoProvider } from "./components/TodoContext";

=======
import About from './About';
import AboutIndex from './AboutIndex';
import Hilsen from './Hilsen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> b4f37f64 (La på en about route)

const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
];

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <TodoProvider>
      <App tasks={DATA} />
    </TodoProvider>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App tasks={DATA} />} />
        <Route path="/about" element={<About />}>
          <Route index element={<AboutIndex />} />
          <Route path=":navn" element={<Hilsen />} />
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> b4f37f64 (La på en about route)
  </React.StrictMode>,
  document.getElementById('root')
);
