import { useState } from "react";
import { ToDoData, ToDoDataObject } from "./Interfaces";
import NewToDo from "./NewToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDoDataObject>({});
  const [isCreating, setIsCreating] = useState(false);

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
      <button onClick={() => setIsCreating(!isCreating)}>
        Create New To Do
      </button>
      {isCreating && <NewToDo createNewToDo={createNewToDo} />}
      <div className="to-dos-info">
        <div className="task-info">Task</div>
        <div className="priority-info">Priority</div>
        <div className="duedate-info">Due Date</div>
        <div className="delete-info">Delete</div>
        <div className="check-info">Check</div>
      </div>
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
