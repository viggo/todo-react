import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

function Form(props) {
  const [name, setName] = useState('');
  const { dark } = useContext(TodoContext)

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg" style={{color: dark && 'white' }}>
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg" style={{ borderColor: dark && 'white'}}>
        Add
      </button>
    </form>
  );
}

export default Form;
