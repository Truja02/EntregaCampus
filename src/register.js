import React from "react";
import {useHistory} from "react-router-dom"
import './App.css';

function Register({setIsLoggedIn}) {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userData","loggedin");
  setIsLoggedIn(true)
        history.push("/")
    }

  return (
    <div className="App">
<h1>Register</h1>
<form onSubmit={handleSubmit}>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />
  </div>
  <button type="submit">Register</button>
</form>
<a href="/login">Login</a>
    </div>
  );
}

export default Register;
