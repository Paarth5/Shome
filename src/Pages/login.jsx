import React from "react";
import { loginUser } from "../api";
const login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="/" onSubmit={loginUser}>
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

export default login;
