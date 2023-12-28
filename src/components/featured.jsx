import React from "react";
import data from "../data/featured";
import Card from "./card";
const featured = () => {
  return (
    <div>
      <div>
        <h1>Featured Items</h1>
        <p>There are many variations of passages of Lorem Ipsum available</p>
      </div>
      <div>
        {data.map((d) => {
          return <Card {...d} />;
        })}
      </div>
      <div>
        <div>
          <p>Saving 50%</p>
          <h1>All Online Store</h1>
          <p>OFFER AVAILABLE ALL SHOES & PRODUCTS</p>
          <button>Shop Now</button>
        </div>
        <div>
          <img src=".\assets\images\poster_img.jpg" alt="Poster" />
        </div>
      </div>
    </div>
  );
};

export default featured;
