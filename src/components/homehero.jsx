import React from "react";
const Homehero = () => {
  return (
    <div
      className="flex bg-blue-500 xl:px-10
    lg:px-20
    xl:flex-row
    xxl:px-60 justify-between h-5/6 py-10 flex-col"
    >
      <div className="flex flex-col justify-center align-center home-hero-col text-white md:m-auto text-left md:text-center  xl:m-0 xl:text-left ml-10">
        <div className="mb-8">
          <p className="md:text-7xl font-bold text-5xl">EXCLUSIVE</p>
          <p className="md:text-7xl font-bold text-5xl">NEW SHOES</p>
        </div>

        <p className="text-2xl xl:mb-16">UP TO 30% OFF ALL SHOES & PRODUCTS</p>
        <button
          className="max-w-40 border py-3 font-bold border-2 border-white
        hover:bg-red-500 hover:border-red-500 my-10 md:m-auto xl:m-0  xl:my-0"
        >
          SHOP NOW
        </button>
      </div>
      <div className="home-hero-col m-auto hidden md:block">
        <img
          src=".\assets\images\shoes.png"
          alt="Shoes"
          className="home-hero-img"
        />
      </div>
    </div>
  );
};

export default Homehero;
