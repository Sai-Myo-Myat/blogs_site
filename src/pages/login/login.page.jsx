const Login = () => {
  return (
    <div className="d-flex">
      <form className="container col-5 ">
        <h2 className="text-info">Login</h2>
        <input
          type="text"
          className="form-control mb-3 mt-35"
          placeholder="username or phone number"
        />
        <input
          type="password"
          className="form-control my-3"
          placeholder="password"
        />
        <div className="d-flex justify-content-between container">
          <span className="text-primary">Forgot Password?</span>
          <span className="text-success fw-bold ">Create account</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
