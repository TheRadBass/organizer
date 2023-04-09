import { useState } from "react";
import { Priority, ToDo } from "./Interfaces";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [task, setTask] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Low");
  const [date, setDate] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

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

  const handleDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setDate(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (task !== "" && date !== "") {
      let currentTodos = toDos;
      currentTodos.push({ task: task, priority: priority, dueDate: date });
      setToDos(currentTodos);
      cleanNewToDo();
    } else {
      setErrorMessage("All fields must be filled");
    }
  };

  const cleanNewToDo = () => {
    setTask("");
    setPriority("Low");
    setDate("");
  };

  return (
    <>
      {errorMessage}
      <form className="new-to-do-form">
        <label>
          Task:
          <input
            value={task}
            onChange={handleTask}
            type="text"
            id="task"
            name="task"
            maxLength={100}
            required
          ></input>
        </label>
        <label>
          Priority:
          <select
            value={priority}
            onChange={handlePriority}
            name="priority"
            id="priority"
            required
          >
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
        </label>
        <label>
          Due:
          <input
            value={date}
            onChange={handleDueDate}
            type="date"
            name="date"
            id="date"
          ></input>
        </label>
        <button onClick={handleSubmit} type="submit">
          Add to-do
        </button>
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
