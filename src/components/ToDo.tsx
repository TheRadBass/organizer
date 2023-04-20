const ToDo = (props: any) => {
  const { task, priority, dueDate, id } = props.data;
  const deleteToDo = props.deleteToDo;
  const toggleCheck = props.toggleCheck;

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.disabled = true;
    toggleCheck(id);
    setTimeout(() => {
      e.target.disabled = false;
    }, 1000);
  };

  const handleDelete = () => {
    deleteToDo(id);
  };

  return (
    <>
      <p>{task}</p>
      <p>{priority}</p>
      {dueDate !== "" && <p>{String(dueDate)}</p>}
      <button onClick={handleDelete}>Delete</button>
      <input onChange={handleCheck} type="checkbox"></input>
    </>
  );
};

export default ToDo;
