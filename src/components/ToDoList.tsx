import { useState } from "react";
import { ToDoData, ToDoDataObject } from "./Interfaces";
import NewToDo from "./NewToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDoDataObject>({});

  const createNewToDo = (data: ToDoData) => {
    let currentTodos = { ...toDos };
    currentTodos[data.id] = data;
    setToDos(currentTodos);
  };

  const deleteToDo = (toDoId: string) => {
    let currentTodos = { ...toDos };
    delete currentTodos[toDoId];
    setToDos(currentTodos);
  };

  return (
    <>
      <NewToDo createNewToDo={createNewToDo} />
      <div className="to-dos-wrapper">
        {Object.keys(toDos).map((todo) => (
          <ToDo
            key={toDos[todo].id}
            data={toDos[todo]}
            deleteToDo={deleteToDo}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoList;
