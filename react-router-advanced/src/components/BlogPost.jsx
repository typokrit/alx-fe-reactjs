import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // dynamic param
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Blog Post ID: {id}</h1>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
};

export default BlogPost;
