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
    <div className="feat-card">
      <div className="zoomable-image">
        <img src={props.img_src} alt={props.name} className="feat-card-img" />
      </div>
      <div className="card-hidden-btn">
        <button className="toggle-btn">
          <FavoriteIcon />
        </button>
        <button className="toggle-btn">
          <ShoppingCartIcon />
        </button>
        <button className="toggle-btn">
          <ZoomOutMapIcon />
        </button>
        <button className="toggle-btn">
          <CompareIcon />
        </button>
      </div>
      {props.discount && <p>-{props.discount}%</p>}
      <a href="/" onClick={handleClick}>
        {props.gender}
      </a>
      <p>{props.name}</p>
      <p>$ {props.price}</p>
    </div>
  );
};

export default Card;
