import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register", data).then((res) => {
      alert(res.data);
      setData({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={submitHandler} autoComplete="off">
            <h3 className="text-center mb-4">Register</h3>
            <div className="mb-3">
              <input
                type="text"
                onChange={changeHandler}
                name="username"
                className="form-control"
                placeholder="User Name"
              />
            </div>
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
            <div className="mb-3">
              <input
                type="password"
                onChange={changeHandler}
                name="confirmpassword"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
