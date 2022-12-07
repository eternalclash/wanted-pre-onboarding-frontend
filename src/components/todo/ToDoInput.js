import React from 'react';
import { useContext, useRef } from 'react';
import { createTodo } from '../../api/todo';
import { dispatchContext } from '../../context/ToDoContext';

const ToDoInput = () => {
    const inputRef = useRef();

    const dipatch = useContext(dispatchContext);
    const handleCreatedTodo = (e) => {
      e.preventDefault();
      if (!inputRef.current.value) {
        return;
      }
      createTodo(inputRef.current.value)
        .then((res) => {
          inputRef.current.value = "";
          dipatch({ type: "ADD", todo: res.data });
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
  
    return (
      <form onSubmit={handleCreatedTodo} >
        <input autoFocus placeholder="todo List"  ref={inputRef} />
        <button>추가</button>
      </form>
    );
  };


export default ToDoInput;