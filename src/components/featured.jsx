import React from "react";
import data from "../data/featured";
import Card from "./card";
const Featured = () => {
  return (
    <div>
      <div className="px-40 mt-20">
        <div>
          <h1 className="text-5xl font-bold text-center">Featured Items</h1>
          <p className="text-xl mt-5 text-center">
            There are many variations of passages of Lorem Ipsum available
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-10">
          {data.map((d) => {
            return <Card key={d.id} {...d} />;
          })}
        </div>
      </div>
      <div className="flex items-center justify-between my-20 bg-gray-100 py-10">
        <div className="ml-40">
          <p className="text-5xl text-red-500 font-thin">Saving 50%</p>
          <h1 className="text-7xl font-bold my-2">All Online Store</h1>
          <p className="text-2xl text-gray-500 my-4">
            OFFER AVAILABLE ALL SHOES & PRODUCTS
          </p>
          <button
            className="mt-5 text-xl font-bold text-white bg-red-500 px-10 py-5 border border-red-500 border-4
          hover:bg-white hover:text-red-500"
          >
            Shop Now
          </button>
        </div>
        <div>
          <img
            src=".\assets\images\poster_img.jpg"
            alt="Poster"
            className="mr-10 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
