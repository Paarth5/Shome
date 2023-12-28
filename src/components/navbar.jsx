import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAuth } from "../authContext";
const Navbar = () => {
  const { user } = useAuth();
  const handleClick = (e) => {
    e.preventDefault();
    const search_bar = document.querySelector("#search_bar");
    search_bar.value = "";
  };
  return (
    <div>
      <div>
        <p>World Wide Completely Free Returns and Free Shipping</p>
        <div>
          <LocalPhoneIcon />
          <a href="./">
            <p>+00 123 456 789</p>
          </a>
        </div>
        <div>
          <EmailIcon />
          <a href="./">
            <p>demo@example.com</p>
          </a>
        </div>
        <div>
          <PersonIcon />
          <a href="/login">
            <p>{user ? user.username : "Account"}</p>
          </a>
        </div>
      </div>
      <div>
        <img src="./assets/images/logo1.svg" alt="Logo" />
        <form action="/">
          <input type="text" name="Search" id="search_bar" />
          <button onClick={handleClick}>
            <SearchIcon />
          </button>
        </form>
        <div>
          <button href="/">
            <FavoriteBorderIcon />
          </button>
          <button href="/">
            <ShoppingBagOutlinedIcon />
          </button>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">
              Home <KeyboardArrowDownIcon />
            </a>
          </li>

          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">
              PAGES <KeyboardArrowDownIcon />
            </a>
          </li>
          <li>
            <a href="/">
              SHOP <KeyboardArrowDownIcon />
            </a>
          </li>
          <li>
            <a href="/">
              BLOG <KeyboardArrowDownIcon />
            </a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
