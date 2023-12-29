import React from "react";
import { loginUser } from "../api";
const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const user = {
        username: formData.get("username"),
        password: formData.get("password"),
      };
      const token = await loginUser(user);
      localStorage.setItem("user_token", JSON.stringify(token));
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="/" onSubmit={handleLogin}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="UserName"
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Login" />
        <p>
          Don’t have an account yet?{" "}
          <a href="/register">Create new for free!</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
