import React from "react";
import { useRouter } from "next/router";

const PostItem = ({ listItems }) => {
  const router = useRouter();
  return (
    <div>
      {listItems?.map((blog, i) => (
        <div
          className="post-item"
          key={i}
          onClick={() => router.push(`/vitamins/${blog?.slug}`)}
        >
          <div className="blogTitle my-3">{blog?.title}</div>
          <div className="text-gray-500">{blog?.date}</div>
        </div>
      ))}
    </div>
  );
};

export default PostItem;
