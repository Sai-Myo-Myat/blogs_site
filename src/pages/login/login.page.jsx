import { useState } from "react";
import { useAuth } from "../../context/auth_context";
import { useNavigate } from "react-router";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    auth.login(user);
    navigate("/");
  };
  return (
    <div className="d-flex">
      <form
        className="container col-5 d-flex flex-column justify-content-between "
        style={{ height: "45vh" }}
        onSubmit={onSubmitHandler}
      >
        <h2 className="text-info">Login</h2>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={user.name}
          className="form-control "
          placeholder="username or phone number"
        />
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={user.password}
          className="form-control"
          placeholder="password"
        />
        <button type="submit" className="col-3 btn btn-info text-light">
          Login
        </button>
        <div className="d-flex justify-content-between container">
          <span className="text-primary">Forgot Password?</span>
          <span className="text-success fw-bold ">Create account</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
