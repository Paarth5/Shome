import React from "react";
const Homehero = () => {
  return (
    <div className="flex bg-blue-500 px-40 justify-between h-5/6 py-10">
      <div className="flex flex-col justify-center home-hero-col text-white">
        <div className="mb-8">
          <p className="text-7xl font-bold ">EXCLUSIVE</p>
          <p className="text-7xl font-bold ">NEW SHOES</p>
        </div>

        <p className="text-2xl mb-16">UP TO 30% OFF ALL SHOES & PRODUCTS</p>
        <button
          className="max-w-40 border py-3 font-bold border-2 border-white
        hover:bg-red-500 hover:border-red-500"
        >
          SHOP NOW
        </button>
      </div>
      <div className="home-hero-col">
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
