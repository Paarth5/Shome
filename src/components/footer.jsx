import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FooterAccordian from "./FooterAccordian";
const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="flex justify-between absolute w-full bottom-0 footer py-20 text-gray-400 px-10
    lg:px-20
    xl:px-40
    xxl:px-60
    "
    >
      <div className="footer-col">
        <img
          src=".\assets\images\logo2.png"
          alt="logo"
          className="mb-5 m-auto"
        />
        <p className="my-3 text-center">
          Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ
          incididunt ut labore
        </p>
        <div className="flex align-center justify-center">
          <div>
            <button
              className="bg-gray-600 p-1 text-white rounded-md  mr-3
        hover:bg-red-500"
            >
              <FacebookIcon />
            </button>
            <button
              className="bg-gray-600 p-1 text-white rounded-md  mr-3
        hover:bg-red-500"
            >
              <PinterestIcon />
            </button>
            <button
              className="bg-gray-600 p-1 text-white rounded-md  mr-3
        hover:bg-red-500"
            >
              <InstagramIcon />
            </button>
            <button
              className="bg-gray-600 p-1 text-white rounded-md  mr-3
        hover:bg-red-500"
            >
              <TwitterIcon />
            </button>
          </div>
        </div>
        <div className="lg:hidden mt-10">
          <FooterAccordian />
        </div>
      </div>

      <div className="footer-col hidden lg:block">
        <h2 className="text-2xl text-white mb-5">Services</h2>
        <ul>
          <a href="/" onClick={handleClick}>
            <li>Home monitoring</li>
          </a>
          <a href="/" onClick={handleClick} className="mt-2">
            <li>Air Filters</li>
          </a>
          <a href="/" onClick={handleClick} className="mt-2">
            <li>Professional installation</li>
          </a>
          <a href="/" onClick={handleClick} className="mt-2">
            <li>Smart Buildings</li>
          </a>
          <a href="/" onClick={handleClick} className="mt-2">
            <li>For contractors</li>
          </a>
        </ul>
      </div>
      <div className="footer-col hidden lg:block">
        <h2 className="text-2xl text-white mb-3">My Account</h2>
        <ul>
          <a href="/login">
            <li>My Account</li>
          </a>
          <a href="/" onClick={handleClick} className="mt-2">
            <li>Contact</li>
          </a>
          <a href="/" onClick={handleClick} className="mt-2">
            <li>Shopping cart</li>
          </a>
          <a href="/" onClick={handleClick} className="mt-2">
            <li>Shop</li>
          </a>
          <a href="/" onClick={handleClick} className="mt-2">
            <li>Services Login</li>
          </a>
        </ul>
      </div>
      <div className="footer-col hidden lg:block">
        <h1 className="text-2xl text-white mb-3">Contact Info</h1>
        <p>Address: Your address goes here.</p>
        <p>
          Phone/Fax:{" "}
          <a href="/" onClick={handleClick} className="mt-2">
            {" "}
            0123456789
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="/" onClick={handleClick} className="mt-2">
            demo@example.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
