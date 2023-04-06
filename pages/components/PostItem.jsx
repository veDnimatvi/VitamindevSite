import React from "react";
import { useRouter } from "next/router";

const PostItem = ({ listItems }) => {
  const router = useRouter();
  return (
    <div>
      {!listItems?.length ? (
        <div className="text-center text-lg font-normal mt-10">
          Not posts found
        </div>
      ) : (
        listItems?.map((blog, i) => (
          <div
            className="post-item md:flex md:items-start"
            key={i}
            onClick={() => router.push(`/vitamins/${blog?.slug}`)}
          >
            <div className="md:ml-10">
              <div className="blogTitle">{blog?.title}</div>
              <div className="text-gray-900 font-semibold">
                {blog?.description}
              </div>
              <div className="text-gray-500">{blog?.category}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostItem;
