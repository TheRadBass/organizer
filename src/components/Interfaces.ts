export type Priority = "Low" | "Medium" | "High";

export interface ToDoData {
  task: string;
  priority: Priority;
  dueDate: string;
  id: string;
  isChecked: boolean;
}

export interface NewToDoProps {
  createNewToDo: (toDo: ToDoData) => void;
}

export interface ToDoDataObject {
  [object: string]: ToDoData;
}
