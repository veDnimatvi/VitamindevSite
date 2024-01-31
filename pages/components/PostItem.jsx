import React from "react";
import { useRouter } from "next/router";

const PostItem = ({ listItems }) => {
  const router = useRouter();
  return (
    <div>
      {!listItems?.length ? (
        <div className="mt-10 text-lg font-normal text-center">
          Not posts found
        </div>
      ) : (
        listItems?.map((blog, i) => (
          <div
            className="rounded p-8 shadow-[rgba(0, 0, 0, 0.35)] shadow-xl cursor-pointer md:flex md:items-start"
            key={i}
            onClick={() => router.push(`/vitamins/${blog?.slug}`)}
          >
            <div className="md:ml-10">
              <div className="blogTitle">{blog?.title}</div>
              <div className="font-semibold text-gray-900">
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
