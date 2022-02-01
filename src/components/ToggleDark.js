import React, { useContext } from "react";
import { TodoContext } from './TodoContext'

function ToggleDark(props) {

  const { dark, setDark } = useContext(TodoContext)

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => setDark(!dark)}
      style={{ color: dark && 'white', borderColor: dark && 'white'}}
    >
        
      Toggle dark
    </button>
  );
}

export default ToggleDark;
