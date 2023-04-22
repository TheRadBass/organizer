import { useState } from "react";
import { ToDoData, ToDoDataObject } from "./Interfaces";
import NewToDo from "./NewToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDoDataObject>({});

  const toggleCheck = (toDoId: string) => {
    let currentTodos = { ...toDos };
    let toDoStatus = !currentTodos[toDoId].isChecked;
    currentTodos[toDoId].isChecked = toDoStatus;
    setToDos(currentTodos);
  };

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
        {Object.keys(toDos).length !== 0 ? (
          Object.keys(toDos).map((todo) => (
            <ToDo //Fix props type in ToDo, it's "any" at the moment.
              key={toDos[todo].id}
              data={toDos[todo]}
              deleteToDo={deleteToDo}
              toggleCheck={toggleCheck}
            />
          ))
        ) : (
          <h3 id="empty-to-dos-text">
            Looks like you have no pending to-do's! 🙌
          </h3>
        )}
      </div>
    </>
  );
};

export default ToDoList;
