import React, { useContext } from "react";
import { TodoContext } from './TodoContext'

function FilterButton(props) {
  const { dark } = useContext(TodoContext);

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
      style={{  borderColor: dark && 'white', color: dark && 'white', borderWidth: props.isPressed && '2px' }}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
