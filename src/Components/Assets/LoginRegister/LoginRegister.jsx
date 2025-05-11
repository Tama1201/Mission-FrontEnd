import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="type" placeholder="username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="Password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? {""}
              <a href="#" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="type" placeholder="username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="Email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type="Please enter your phone number"
              placeholder="Phone Number"
              required
            />
            <FaPhoneSquareAlt className="icon" />
          </div>

          <div className="input-box">
            <input type="Password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I aggree to the terms & conditions
            </label>
          </div>

          <button type="submit">Register</button>

          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
