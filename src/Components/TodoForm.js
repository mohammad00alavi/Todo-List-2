import React, { useState } from "react";
import { v4 as uuid} from "uuid";

export default function TodoForm(props) {
  const [task, setTask] = useState({ tasks: "" });

  function handleChange(evt) {
    setTask({
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.createTodo({ ...task, id: uuid(), completed: false });
    setTask({ tasks: "" });
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        id="task"
        name="task"
        value={task.tasks}
        onChange={handleChange}
        required
      />
      <button className="addTaskBtn">Add Task</button>
    </form>
  );
}
