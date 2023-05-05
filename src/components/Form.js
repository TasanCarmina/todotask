import React, { useState, useRef } from 'react';

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder={props.edit ? '' : 'Add Task'}
          value={input}
          name="text"
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit">{props.edit ? '' : 'Add Task'}</button>
      </form>
    </div>
  );
}

export default Form;
