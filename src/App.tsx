import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Link className="home-link" to="/">
          Organizer App
        </Link>
        <nav className="main-nav-bar">
          <div>
            <Link to={`todos`} className="nav-bar-button">
              To-do's
            </Link>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default App;
