import React from "react";
import data from "../data/categories";
import CategoryCard from "./categoryCard";
const categories = () => {
  return (
    <div>
      {data.map((d) => {
        return <CategoryCard key={d.id} {...d} />;
      })}
    </div>
  );
};

export default categories;
