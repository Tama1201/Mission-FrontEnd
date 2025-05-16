import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  const [accounts, setAccounts] = useState([]);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    const existing = accounts.find(
      (acc) => acc.username === registerData.username
    );

    if (existing) {
      alert("Username already exists!");
      return;
    }

    setAccounts([...accounts, registerData]);

    alert("Registration successful!");
    setRegisterData({ username: "", email: "", phone: "", password: "" });
    setAction("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = accounts.find(
      (acc) =>
        acc.username === loginData.username &&
        acc.password === loginData.password
    );

    if (user) {
      alert(`Welcome, ${user.username}!`);
    } else {
      alert("Invalid username or password");
    }

    setLoginData({ username: "", password: "" });
  };

  const registerLink = () => setAction(" active");
  const loginLink = () => setAction("");

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            {/* <button
              type="button"
              onClick={registerLink}
              className="link-button"
            >
              Register
            </button> */}
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={registerLink}
                className="link-button"
              >
                Register
              </button>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({ ...registerData, username: e.target.value })
              }
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={registerData.phone}
              onChange={(e) =>
                setRegisterData({ ...registerData, phone: e.target.value })
              }
            />
            <FaPhoneSquareAlt className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" required /> I agree to the terms &
              conditions
            </label>
          </div>

          <button type="submit">Register</button>

          <div className="register-link">
            <p>
              Already have an account?{" "}
              <button type="button" onClick={loginLink} className="link-button">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
