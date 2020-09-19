import React, { useState } from "react";

export default function Todo(props) {
  const [task, setTask] = useState({ isEditing: false, task: props.task });

  function handleChange(evt) {
    const inputValue = evt.target.value;
    setTask({ ...task, task: inputValue });
  }
  function handleRemove() {
    props.removeTodo(props.id);
  }
  function toggleForm() {
    setTask({ ...task, isEditing: !task.isEditing });
  }
  function handleUpdate(evt) {
    evt.preventDefault();
    props.updateTodo(props.id, task.task);
    setTask({...task, isEditing: false });
  }
  function handleToggle(evt) {
    props.toggleTodo(props.id);
  }

  let result;
  if (task.isEditing) {
    result = (
      <div className="TodoEdit">
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={task.task}
            name="task"
            onChange={handleChange}
          />
          <button className="updateBtn btn">
            <i className="fas fa-check"></i>
          </button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          onClick={handleToggle}
          className={props.completed ? "completed" : null}
        >
          {props.task}
        </li>
        <button className="removeBtn btn" onClick={handleRemove}>
          <i className="far fa-trash-alt"></i>
        </button>
        <button className="editBtn btn" onClick={toggleForm}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    );
  }
  return result;
}
