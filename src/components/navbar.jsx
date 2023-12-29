import React, { useEffect, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { jwtDecode } from "jwt-decode";
const Navbar = () => {
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
  const handleClick = (e) => {
    e.preventDefault();
    const search_bar = document.querySelector("#search_bar");
    search_bar.value = "";
  };
  return (
    <div>
      <div className="flex flex-row justify-between bg-gray-100 flex flex-row items-center font-lighter text-gray-600 px-40 py-3 text-sm tracking-widest">
        <p>World Wide Completely Free Returns and Free Shipping</p>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <LocalPhoneIcon className="text-red-600" />
            <a href="./" className="ml-3 mr-3 pr-3 border-r border-black">
              <p>+00 123 456 789</p>
            </a>
          </div>
          <div className="flex flex-row items-center">
            <EmailIcon className="text-red-600" />
            <a href="./" className="ml-3 mr-3 pr-3 border-r border-black">
              <p>demo@example.com</p>
            </a>
          </div>
          <div className="flex flex-row items-center">
            <PersonIcon className="text-red-600" />
            <a href="/login" className="ml-3">
              <p>{user ? user.username : "Account"}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center px-40 justify-between my-5 items-center">
        <a href="/">
          <img src="./assets/images/logo1.svg" alt="Logo" className="w-40" />
        </a>
        <form action="/" className="mr-10">
          <input
            type="text"
            name="Search"
            id="search_bar"
            placeholder="Search"
            className="border-t-2 border-l-2 border-b-2 py-2 px-5 rounded-bl-lg rounded-tl-lg w-96 mt-3"
          />
          <button
            onClick={handleClick}
            className="bg-red-500 py-2 px-5 font-extralight text-white border border-red-500 rounded-br-lg rounded-tr-lg 
            hover:bg-gray-700 hover:border-gray-700 "
          >
            <SearchIcon />
          </button>
        </form>
        <div>
          <button href="/" className="scale-110 mr-3 ">
            <FavoriteBorderIcon />
          </button>
          <button href="/" className="scale-110">
            <ShoppingBagOutlinedIcon />
          </button>
        </div>
      </div>
      <div className="mx-40 mt-10 ">
        <ul className="py-3 flex flex-row items-center justify-around px-60 text-xs font-semibold text-white bg-red bg-red-500 rounded-tl-lg rounded-tr-lg">
          <li>
            <a
              href="/"
              className="hover:text-gray-100 flex flex-row items-center"
            >
              HOME{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              className="hover:text-gray-100 flex flex-row items-center"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:text-gray-100 flex flex-row items-center"
            >
              PAGES{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:text-gray-100 flex flex-row items-center"
            >
              SHOP{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:text-gray-100 flex flex-row items-center"
            >
              BLOG{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:text-gray-100 flex flex-row items-center"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
