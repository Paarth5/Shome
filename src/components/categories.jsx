import React from "react";
import data from "../data/categories";
import CategoryCard from "./categoryCard";
const Categories = () => {
  return (
    <div className="px-10 flex flex-wrap justify-between align-center mt-20 lg:px-20 xl:px-40">
      {data.map((d) => {
        return <CategoryCard key={d.id} {...d} />;
      })}
    </div>
  );
};

export default Categories;
