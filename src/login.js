import React from "react";
import './App.css';
import {useHistory} from "react-router-dom"

function Login({setIsLoggedIn}) {
    const history = useHistory();

    const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("userData","loggedin");
  setIsLoggedIn(true)
  history.push("/")

}
  return (
    <div className="App">
<h1>Login</h1>
<form onSubmit={handleSubmit}>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />
  </div>
  <button type="submit">Login</button>
</form>
<a href="/signup">Register</a>
    </div>
  );
}

export default Login;
