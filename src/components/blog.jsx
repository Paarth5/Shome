import React from "react";
import blogData from "../data/blogData";
import BlogCard from "./blogCard";
const blog = () => {
  return (
    <div>
      <h1>Latest Blog</h1>
      <p>There are many variations of passages of Lorem Ipsum available</p>
      <div>
        {blogData.map((d) => {
          return <BlogCard {...d} />;
        })}
      </div>
    </div>
  );
};

export default blog;
