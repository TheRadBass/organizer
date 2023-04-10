export type Priority = "Low" | "Medium" | "High";

export interface ToDo {
  task: string;
  priority: Priority;
  dueDate: string;
}

export interface NewToDoProps {
  createNewToDo: (toDo: ToDo) => void;
}
