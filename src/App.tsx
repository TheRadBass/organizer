import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <nav className="main_nav_bar">This is just a navBar</nav>
        <div>This is the home page</div>
        <p>Not much to see here yet</p>
      </div>
      <ToDoList />
    </>
  );
};

export default App;
