import React, { useState, useEffect } from "react";
import { loginUser } from "../api";
import { jwtDecode } from "jwt-decode";

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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    if (token) {
      const parsedToken = JSON.parse(token);
      const decoded = jwtDecode(parsedToken.token);
      if (decoded) {
        setUser({ ...decoded });
      }
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("user_token");
    window.location.href = "/";
  };

  // Component
  return (
    <>
      {user ? (
        <div className="px-40 mt-20 last-comp text-center">
          <p className="text-xl">Already logged in as {user.fullName}</p>
          <button
            onClick={logout}
            className="px-20 bg-black text-white mt-3 py-4 
                hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      ) : (
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
            Login
          </h1>
          <form action="/" onSubmit={handleLogin}>
            <div
              className="flex flex-col 
            md:flex-col
            "
            >
              <label htmlFor="username" className="mt-7 mb-2 text-sm">
                Username:{" "}
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
                required
                className="border border-gray-300 px-5 py-3"
              />
              <label htmlFor="password" className="mt-7 mb-2 text-sm">
                Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                className="border border-gray-300 px-5 py-3"
              />
              <input
                type="submit"
                value="Login"
                className="w-full bg-black text-white mt-10 py-4 
                hover:bg-red-500"
              />
            </div>
            <p className=" text-right mt-2">
              Don’t have an account yet?{" "}
              <a href="/register" className="text-red-500">
                Create new for free!
              </a>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
