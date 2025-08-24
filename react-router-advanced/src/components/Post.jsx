import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Blog Post ID: {postId}</h1>
      <p>This is the content for post {postId}.</p>
    </div>
  );
};

export default Post;
