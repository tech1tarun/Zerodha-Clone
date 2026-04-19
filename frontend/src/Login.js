import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/login",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setInputValue({
          ...inputValue,
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        handleError(error.response.data.message);
      } else {
        handleError("Login failed. Please try again.");
      }
    }
  };

  return (
  <div className="container vh-100 d-flex justify-content-center align-items-center">
    <div style={{ width: "100%", maxWidth: "400px" }}>
      
      <h3 className="mb-3 text-center">Login now</h3>
      <p className="text-muted text-center">Access your account</p>

      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>

        <p className="mt-3 text-center">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>

      </form>

      <ToastContainer />
    </div>
  </div>
);
};

export default Login;
