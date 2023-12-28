import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
const BlogCard = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <img src={props.img_src} alt={props.head} />
      <div>
        <CalendarMonthIcon />
        <a href="/" onClick={handleClick}>
          {props.date}
        </a>
        <PersonIcon />
        <a href="/" onClick={handleClick}>
          {props.author}
        </a>
      </div>
      <h2>{props.head}</h2>
      <button>Read More</button>
    </div>
  );
};

export default BlogCard;
