import React from "react";
import { registerUser } from "../api";

const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const user = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        username: formData.get("username"),
        password: formData.get("password"),
      };
      const token = await registerUser(user);
      localStorage.setItem("user_token", JSON.stringify(token));
      window.location.href = "/";
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  return (
    <div
      className="xxl:px-80 last-comp
        xl:px-60
        lg:px-40
        md: px-20
        sm:px-10
        xs: px-3
      "
    >
      <h1 className="text-4xl font-bold text-center mt-20 border-b pb-5">
        Create New Account
      </h1>
      <form action="/" onSubmit={handleRegister}>
        <div className="flex flex-col ">
          <div
            className="flex justify-evenly flex-col
          lg:flex-row
          xl:flex-row
          xxl:flex-row
          "
          >
            <div className="flex flex-col">
              <label htmlFor="firstname" className="mt-7 mb-2 text-sm">
                First Name:{" "}
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First-Name"
                className="border border-gray-300 px-5 py-3"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname" className="mt-7 mb-2 text-sm">
                Last Name:{" "}
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="border border-gray-300 px-5 py-3"
                placeholder="LastName"
                required
              />
            </div>
          </div>
          <label htmlFor="email" className="mt-7 mb-2 text-sm">
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 px-5 py-3"
            placeholder="Email"
            required
          />
          <label htmlFor="username" className="mt-7 mb-2 text-sm">
            Username:{" "}
          </label>
          <input
            type="text"
            className="border border-gray-300 px-5 py-3"
            name="username"
            id="username"
            placeholder="UserName"
            required
          />
          <label htmlFor="password" className="mt-7 mb-2 text-sm">
            Password:{" "}
          </label>
          <input
            type="password"
            className="border border-gray-300 px-5 py-3"
            name="password"
            id="password"
            placeholder="Password"
            required
            // minLength={8}
          />
          <button
            className="w-full bg-black text-white mt-10 py-4 
                hover:bg-red-500"
          >
            Create Account
          </button>
        </div>
        <p className="text-right">
          Already have an account?{" "}
          <a href="/login" className="text-red-500">
            Login now!
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
