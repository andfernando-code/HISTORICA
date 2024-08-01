import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, auth } from "../../Firebase";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create a new user with the provided email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
      setSuccess("User registered successfully!");
      // You can add additional logic here, such as redirecting the user or displaying a success message
    } catch (error) {
      console.log("Error signing up:", error);
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="form-about">
        <h1>HISTORICA<i className="fa-solid fa-gopuram"></i></h1>
        <p>Explore the entire history with us</p>
      </div>
      <div className="form-form">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2><br/>
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
          
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          
          <button type="submit" className="sign-button">Sign Up</button>
          
          <div className="link">
            <p><Link to="/Login">Already Registered? Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
