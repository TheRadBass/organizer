import { useState } from "react";
import { NewToDoProps, Priority } from "./Interfaces";

const NewToDo = (props: NewToDoProps) => {
  const [task, setTask] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Low");
  const [date, setDate] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const createNewToDo = props.createNewToDo;

  const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handlePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (
      e.target.value === "Low" ||
      e.target.value === "Medium" ||
      e.target.value === "High"
    ) {
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
      //   currentTodos.push({ task: task, priority: priority, dueDate: date });
      createNewToDo({ task: task, priority: priority, dueDate: date });
      cleanNewToDoFields();
      setErrorMessage("");
    } else {
      setErrorMessage("All fields must be filled");
    }
  };

  const cleanNewToDoFields = () => {
    setTask("");
    setPriority("Low");
    setDate("");
  };

  return (
    <>
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
      {errorMessage !== "" ? (
        <p style={{ color: "red" }}>{errorMessage}</p>
      ) : null}
    </>
  );
};

export default NewToDo;
