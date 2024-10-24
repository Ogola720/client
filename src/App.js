import React from "react";
import Login from "./Login"; // Import the Login component
import Signup from "./Signup"; // Import the Signup component
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Authentication Section</h1>
      
      {/* Login Component */}
      <div>
        <h2>Login</h2>
        <Login /> {/* Render the Login component */}
      </div>

      {/* Signup Component */}
      <div>
        <h2>Signup</h2>
        <Signup /> {/* Render the Signup component */}
      </div>
    </div>
  );
};

export default App;
