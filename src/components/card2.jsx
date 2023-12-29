import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import CompareIcon from "@mui/icons-material/Compare";
const Card = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feat-card relative mb-10 w-72">
      <div className="zoomable-image border border-grey-500 p-3 border-2 rounded-lg h-64">
        <img src={props.img_src} alt={props.name} className="feat-card-img" />
      </div>
      <div className="card-hidden-btn absolute top-5 right-5">
        <button className="toggle-btn mb-2">
          <FavoriteIcon />
        </button>
        <button className="toggle-btn mb-2">
          <ShoppingCartIcon />
        </button>
        <button className="toggle-btn mb-2">
          <ZoomOutMapIcon />
        </button>
        <button className="toggle-btn mb-2">
          <CompareIcon />
        </button>
      </div>
      {props.discount && (
        <p className="absolute top-3 left-3 bg-red-500 rounded-lg px-2 text-white font-bold">
          -{props.discount}%
        </p>
      )}
      <a href="/" onClick={handleClick} className="text-gray-500 ">
        {props.gender}
      </a>
      <p className="font-bold my-1 text-xl">{props.name}</p>
      <p className="text-gray-500 text-lg">$ {props.price}</p>
    </div>
  );
};

export default Card;
