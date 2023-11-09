import React, { useState, useContext } from "react";
import axios from "axios";
import { store } from "./App";
import { Redirect } from "react-router";

const Login = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => setToken(res.data.token));
  };

  if (token) {
    return <Redirect to="/myprofile" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={submitHandler} autoComplete="off">
            <h3 className="text-center mb-4">Login</h3>
            <div className="mb-3">
              <input
                type="email"
                onChange={changeHandler}
                name="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={changeHandler}
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="text-center">
              {" "}
              {/* Center the button */}
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
