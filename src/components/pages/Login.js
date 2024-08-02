// Login.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, auth } from "../../Firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Sign in the user with the provided email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      setSuccess("User logged in successfully!");
      // Redirect to home page after successful login
      navigate("/");
    } catch (error) {
      console.log("Error logging in:", error);
      let errorMessage = error.message;

      if (errorMessage.includes("auth/invalid-email")) {
        errorMessage = "Invalid email !";
      }
      else if (errorMessage.includes("auth/invalid-credential")) {
        errorMessage = "Incorrect Password !";
      }
      else if (errorMessage.includes("auth/network-request-failed")) {
        errorMessage = "Network Error !";
      }
      else if (errorMessage.includes("auth/missing-password")) {
        errorMessage = "Missing Password !";
      }

      setError(errorMessage);
    }
  };

  return (
    <div className="signup-container">
      <div className="form-about">
        <h1>
          HISTORICA<i className="fa-solid fa-gopuram"></i>
        </h1>
        <p>Explore the entire history with us</p>
      </div>
      <div className="form-form">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <br />
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="sign-button">
            Login
          </button>

          <div className="link">
            <p>
              <Link to="/sign-up">Didn't have an account? Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
