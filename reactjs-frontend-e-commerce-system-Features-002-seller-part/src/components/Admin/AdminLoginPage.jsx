// AdminLogin.jsx
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/userActions";
import { server } from "../../server";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    // Perform admin login logic
    axios
      .post(`${server}/admin/login`, { username, password })
      .then((res) => {
        // Assuming the backend returns a token upon successful login
        const token = res.data.token;

        // Dispatch the login action
        dispatch(login({ username, role: "Admin", token }));

        // Redirect to the admin dashboard
        history.push("/admin/dashboard");
      })
      .catch((error) => {
        // Handle login failure
        setError("Invalid username or password");
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLoginPage;
