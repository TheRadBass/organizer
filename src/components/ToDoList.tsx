import { FormEvent, useState } from "react";
import { ToDo } from "./Interfaces";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [task, setTask] = useState<string>("");

  const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <>
      <p>{task}</p>
      <form className="new-to-do-form">
        <label>
          Task:
          <input
            onChange={handleTask}
            type="text"
            id="task"
            name="task"
            maxLength={100}
          ></input>
        </label>
        <label>
          Priority:
          <select name="priority" id="priority">
            <option value={"low"}>Low</option>
            <option value={"medium"}>Medium</option>
            <option value={"high"}>High</option>
          </select>
        </label>
        <label>
          Due:
          <input type="date" name="date" id="date"></input>
        </label>
        <button type="submit">Add to-do</button>
      </form>
      <div className="to-dos-wrapper">
        {toDos.map((toDo) => (
          <div key={uuidv4()}>
            <p>{toDo.task}</p>
            <p>{toDo.priority}</p>
            <p>{String(toDo.dueDate)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
