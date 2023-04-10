const ToDo = (props: any) => {
  const { task, priority, dueDate, id } = props.data;
  const deleteToDo = props.deleteToDo;

  const handleDelete = () => {
    deleteToDo(id);
  };

  return (
    <>
      <p>{task}</p>
      <p>{priority}</p>
      <p>{String(dueDate)}</p>
      <p>{id}</p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default ToDo;
