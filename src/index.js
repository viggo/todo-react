import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoProvider } from "./components/TodoContext";


const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App tasks={DATA} />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
