import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="category-card-cont h-96 relative">
      <img
        src={props.img_src}
        alt={props.head}
        className="h-full w-full object-cover zooming-img"
      />
      <div className="absolute top-5 left-0 right-0 bottom-0 text-white flex flex-col  items-center">
        <h2 className="z-10 text-3xl font-bold">{props.head}</h2>
        <p className="z-10 text-xl font-md">{props.price}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
