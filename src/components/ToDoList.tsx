import { useState } from "react";
import { ToDo } from "./Interfaces";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const singleToDo: ToDo = {
    task: "Wash the dishes",
    priority: "high",
    dueDate: String(Date.now()),
  };

  const handleButton = () => {
    const currentToDos = [...toDos];
    currentToDos.push(singleToDo);
    setToDos(currentToDos);
  };

  return (
    <div className="to-dos">
      {toDos.map((toDo) => (
        <div key={uuidv4()}>
          <p>{toDo.task}</p>
          <p>{toDo.priority}</p>
          <p>{String(toDo.dueDate)}</p>
        </div>
      ))}
      <button onClick={handleButton}>Generate ToDos</button>
    </div>
  );
};

export default ToDoList;
