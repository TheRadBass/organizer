export type Priority = "Low" | "Medium" | "High";

export interface ToDoData {
  task: string;
  priority: Priority;
  dueDate: string;
  id: string;
}

export interface NewToDoProps {
  createNewToDo: (toDo: ToDoData) => void;
}

export interface ToDoDataObject {
  [object: string]: ToDoData;
}
