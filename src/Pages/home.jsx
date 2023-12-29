import React from "react";
import HomeHero from "../components/homehero";
import Categories from "../components/categories";
import Featured from "../components/featured";
import BestSeller from "../components/bestseller";
import Blog from "../components/blog";
const Home = () => {
  return (
    <div>
      <HomeHero />
      <Categories />
      <Featured />
      {/* <BestSeller /> */}
      <Blog />
    </div>
  );
};

export default Home;
