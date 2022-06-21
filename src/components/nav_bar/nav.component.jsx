import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => {
  console.log(isActive);
  return {
    color: isActive ? "#36435A" : "#fff",
  };
};

const Nav = () => {
  return (
    <div
      className="fixed-top bg-info d-flex align-items-center "
      style={{ height: "10vh" }}
    >
      <div className="col-6">
        <h3 className="text-secondary m-0 py-0 px-3 fw-bold">Blogs Site</h3>
      </div>
      <ul className="col-6 m-0 px-5 py-2 d-flex justify-content-between">
        <NavLink
          to="/"
          className="text-decoration-none fw-bold"
          style={activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-decoration-none fw-bold"
          style={activeLink}
        >
          {" "}
          About
        </NavLink>
        <NavLink
          to="/create-blogs"
          className="text-decoration-none fw-bold"
          style={activeLink}
        >
          Create Blogs
        </NavLink>
        <NavLink
          to="/login"
          className="text-decoration-none fw-bold"
          style={activeLink}
        >
          Login
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
