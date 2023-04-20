import { useState } from "react";
import { NewToDoProps, Priority } from "./Interfaces";
import { v4 as uuidv4 } from "uuid";

const NewToDo = (props: NewToDoProps) => {
  const [task, setTask] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Low");
  const [date, setDate] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [id, setId] = useState<string>(String(uuidv4()));
  const createNewToDo = props.createNewToDo;

  const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handlePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const validPriorities = ["Low", "Medium", "High"];
    if (validPriorities.includes(e.target.value)) {
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
    if (task !== "") {
      createNewToDo({
        task: task,
        priority: priority,
        dueDate: date,
        id: id,
        isChecked: false,
      });
      cleanNewToDoFields();
    } else {
      setErrorMessage("All fields must be filled");
    }
  };

  const cleanNewToDoFields = () => {
    setTask("");
    setPriority("Low");
    setDate("");
    setErrorMessage("");
    setId(String(uuidv4()));
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
