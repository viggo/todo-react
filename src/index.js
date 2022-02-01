import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoProvider } from './components/TodoContext';
import About from './About';
import AboutIndex from './AboutIndex';
import Hilsen from './Hilsen';
import NothingHere from './NothingHere';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App tasks={DATA} />} />
          <Route path="/about" element={<About />}>
            <Route index element={<AboutIndex />} />
            <Route path=":navn" element={<Hilsen />} />
          </Route>
          <Route path="*" element={<NothingHere />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
