import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="col-12 m-0 px-5 d-flex justify-content-between bg-info">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <li>About</li>
        </NavLink>
        <NavLink to="/create-blogs">
          <li>Create Blogs</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
