import React from "react";

const CategoryCard = (props) => {
  return (
    <div>
      <img src={props.img_src} alt={props.head} />
      <h2>{props.head}</h2>
      <p>{props.price}</p>
    </div>
  );
};

export default CategoryCard;
