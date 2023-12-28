import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <img src=".\assets\images\logo1.svg" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ
          incididunt ut labore
        </p>
        <button>
          <FacebookIcon />
        </button>
        <button>
          <PinterestIcon />
        </button>
        <button>
          <InstagramIcon />
        </button>
        <button>
          <TwitterIcon />
        </button>
      </div>

      <div>
        <h2>Services</h2>
        <ul>
          <a href="/" onClick={handleClick}>
            <li>Home monitoring</li>
          </a>
          <a href="/" onClick={handleClick}>
            <li>Air Filters</li>
          </a>
          <a href="/" onClick={handleClick}>
            <li>Professional installation</li>
          </a>
          <a href="/" onClick={handleClick}>
            <li>Smart Buildings</li>
          </a>
          <a href="/" onClick={handleClick}>
            <li>For contractors</li>
          </a>
        </ul>
      </div>
      <div>
        <h2>My Account</h2>
        <ul>
          <a href="/" onClick={handleClick}>
            <li>My Account</li>
          </a>
          <a href="/" onClick={handleClick}>
            <li>Contact</li>
          </a>
          <a href="/" onClick={handleClick}>
            <li>Shopping cart</li>
          </a>
          <a href="/" onClick={handleClick}>
            <li>Shop</li>
          </a>
          <a href="/" onClick={handleClick}>
            <li>Services Login</li>
          </a>
        </ul>
      </div>
      <div>
        <h1>Contact Info</h1>
        <p>Address: Your address goes here.</p>
        <p>
          Phone/Fax:{" "}
          <a href="/" onClick={handleClick}>
            {" "}
            0123456789
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="/" onClick={handleClick}>
            demo@example.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
