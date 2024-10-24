// Signup.js
import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    setSuccess(null); // Reset success state

    if (username === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up, please try again');
      }

      const data = await response.json();
      console.log(data.message); // Handle successful signup
      setSuccess("Signup successful! You can now log in.");
      // You can redirect to the login page after successful signup, if needed
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button type="submit">Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
      {success && <p style={{ color: "green" }}>{success}</p>} {/* Display success message */}
    </form>
  );
};

export default Signup;
