import React from "react";
import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../auth/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        alert("all fields are mandatory");
        return;
      }
      await AuthService.login(email, password).then(
        (val) => {
          navigate("/events");
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert("email or password is wrong");
          navigate("/login");
          window.location.reload();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Login</h1>
      <form onSubmit={handleLogin} class="login-form form">
        <div className="input error-input">
          
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
         
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="send-btn btn"> Submit </button>
        <div className="form-link-holder">
          Don't you have an account?
          <Link to={"/signup"}> SignUp</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
