import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <nav className="main_nav_bar">
          This is just a navBar
          <ul>
            <li>
              <Link to={`todos`}>To-do's</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default App;
