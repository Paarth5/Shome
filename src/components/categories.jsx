import React from "react";
import data from "../data/categories";
import CategoryCard from "./categoryCard";
const Categories = () => {
  return (
    <div className="px-40 flex justify-between items-center mt-20">
      {data.map((d) => {
        return <CategoryCard key={d.id} {...d} />;
      })}
    </div>
  );
};

export default Categories;
