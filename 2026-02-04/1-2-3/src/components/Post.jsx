import React from "react";
import ProfileCard from "./ProfileCard";

function Post({ author, content }) {
  return (
    <div>
      <h3>{author}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Post;
