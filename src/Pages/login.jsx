import React from "react";

const login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="">
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
        <button>Login</button>
        <p>
          Don’t have an account yet?{" "}
          <a href="/register">Create new for free!</a>
        </p>
      </form>
    </div>
  );
};

export default login;
