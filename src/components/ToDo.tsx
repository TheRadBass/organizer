const ToDo = (props: any) => {
  const { task, priority, dueDate, id } = props.data;
  const deleteToDo = props.deleteToDo;
  const toggleCheck = props.toggleCheck;

  const handleCheck = () => {
    toggleCheck(id);
  };

  const handleDelete = () => {
    deleteToDo(id);
  };

  return (
    <>
      <p>{task}</p>
      <p>{priority}</p>
      <p>{String(dueDate)}</p>
      <button onClick={handleDelete}>Delete</button>
      <input onChange={handleCheck} type="checkbox"></input>
    </>
  );
};

export default ToDo;
