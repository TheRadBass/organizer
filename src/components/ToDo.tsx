const ToDo = (props: any) => {
  const { task, priority, dueDate, id } = props.data;
  const deleteToDo = props.deleteToDo;
  const toggleCheck = props.toggleCheck;

  const priorityColors = {
    High: "rgb(209, 67, 67)",
    Medium: "rgb(234, 210, 29)",
    Low: "rgb(61, 128, 45)",
  };

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
    <div className="to-do">
      <p className="to-do-task">{task}</p>
      <p
        className="to-do-priority"
        style={{
          backgroundColor: `${priorityColors[priority as keyof Object]}`,
        }}
      >
        {priority}
      </p>
      <p className="to-do-duedate">{String(dueDate)}</p>
      <button className="delete-to-do-button" onClick={handleDelete}>
        Delete
      </button>
      <input
        className="to-do-checkbox"
        onChange={handleCheck}
        type="checkbox"
      ></input>
    </div>
  );
};

export default ToDo;
