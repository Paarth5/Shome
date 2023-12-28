import React from "react";
import { registerUser } from "../api";

const login = () => {
  return (
    <div>
      <h1>Create New Account</h1>
      <form action="/" onSubmit={registerUser}>
        <label htmlFor="firstname">First Name: </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First-Name"
          required
        />
        <label htmlFor="lastname">Last Name: </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="LastName"
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
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
        <button>Create Account</button>
        <p>
          Already have an account? <a href="/login">Login now!</a>
        </p>
      </form>
    </div>
  );
};

export default login;
