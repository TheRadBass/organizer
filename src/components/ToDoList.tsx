import { useState } from "react";
import { ToDo } from "./Interfaces";
import { v4 as uuidv4 } from "uuid";
import NewToDo from "./NewToDo";

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const createNewToDo = (data: ToDo) => {
    let currentTodos = [...toDos];
    currentTodos.push(data);
    setToDos(currentTodos);
  };

  return (
    <>
      <NewToDo createNewToDo={createNewToDo} />
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
