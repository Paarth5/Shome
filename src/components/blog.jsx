import React from "react";
import blogData from "../data/blogData";
import BlogCard from "./blogCard";
const Blog = () => {
  return (
    <div>
      <h1>Latest Blog</h1>
      <p>There are many variations of passages of Lorem Ipsum available</p>
      <div>
        {blogData.map((d) => {
          return <BlogCard key={d.id} {...d} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
