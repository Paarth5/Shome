import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
const BlogCard = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-96 m-auto mb-10">
      <img src={props.img_src} alt={props.head} className="rounded-lg mb-10" />
      <div className="mb-5 flex align-center">
        <CalendarMonthIcon className="text-red-500 mr-2" />
        <a href="/" onClick={handleClick}>
          {props.date}
        </a>
        <PersonIcon className="text-red-500 mx-2" />
        <a href="/" onClick={handleClick}>
          {props.author}
        </a>
      </div>
      <h2 className="text-xl font-bold">{props.head}</h2>
      <button
        className="mt-7 text-lg  font-bold text-white bg-black px-7 py-2
          hover:bg-red-500 hover:text-white"
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
