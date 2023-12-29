import React from "react";
import blogData from "../data/blogData";
import BlogCard from "./blogCard";
const Blog = () => {
  return (
    <div className="mt-20 px-40 last-comp">
      <h1 className="text-5xl font-bold text-center">Latest Blog</h1>
      <p className="text-xl mt-5 text-center mb-10">
        There are many variations of passages of Lorem Ipsum available
      </p>
      <div className="flex justify-between">
        {blogData.map((d) => {
          return <BlogCard key={d.id} {...d} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
