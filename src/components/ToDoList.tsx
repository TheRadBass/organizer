import { useState } from "react";
import { Priority, ToDo } from "./Interfaces";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [task, setTask] = useState<string>("");
  const [priority, setPriority] = useState<Priority>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handlePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (
      e.target.value === "Low" ||
      e.target.value === "Medium" ||
      e.target.value === "High"
    ) {
      setErrorMessage("");
      setPriority(e.target.value as Priority);
    } else {
      setErrorMessage(
        `The given priority "${e.target.value}" is not a valid priority`
      );
    }
  };

  return (
    <>
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
          <select onChange={handlePriority} name="priority" id="priority">
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
        </label>
        <label>
          {errorMessage}
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
