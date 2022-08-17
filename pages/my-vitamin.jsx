import matter from "gray-matter";
import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";
import iconTurnLeft from "../public/img/turn-to-left-25.png";
import { getNumFromDateString } from "../utils/blogFunction";
import PostItem from "./components/PostItem";
import { useEffect, useState } from "react";

export default function MyBlog(props) {
  const [typeOfPost, setTypeOfPost] = useState("fe");
  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    const realData =
      typeOfPost === "fe"
        ? props?.datafe?.map((blog) => matter(blog))
        : props?.databe?.map((blog) => matter(blog));
    let listItems = realData.map((listItem) => listItem.data);
    //Sort Items Based On Date
    listItems = listItems.sort((a, b) => {
      let aDate = getNumFromDateString(a.date);
      let bDate = getNumFromDateString(b.date);

      return bDate - aDate;
    });
    setListPosts(listItems);
  }, [typeOfPost]);

  return (
    // <Layout>
    <section id="index-page">
      {/* <Navbar /> */}
      <div className="main">
        <div
          className="flex justify-around pb-5 text-xl text-green-600 cursor-pointer"
          style={{ fontFamily: '"Noto Serif", serif' }}
        >
          <Link href="/">
            <div>
              Back to my Profile
              <Image className="mt-1" src={iconTurnLeft} alt="turn-left-icon" />
            </div>
          </Link>
        </div>
        <p className="welcome">Welcome to My Vitamin</p>
        <div className="flex justify-center">
          <div
            className="bg-gray-200 p-3 rounded-3xl cursor-pointer mr-2"
            onClick={() => setTypeOfPost("fe")}
          >
            Front End
          </div>
          <div
            className="bg-gray-200 p-3 rounded-3xl cursor-pointer"
            onClick={() => setTypeOfPost("be")}
          >
            Back End
          </div>
        </div>
        <div className="post-item text-4xl">
          {typeOfPost === "fe" ? "Front End" : "Back End"}
        </div>
        <PostItem listItems={listPosts} typeOfPost={typeOfPost} />
      </div>
      <Footer />
    </section>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");

  const feFiles = fs.readdirSync(`${process.cwd()}/content/frontend`, "utf-8");

  const feBlogs = feFiles.filter((fn) => fn.endsWith(".md"));

  const datafe = feBlogs.map((blog) => {
    const path = `${process.cwd()}/content/frontend/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  const beFiles = fs.readdirSync(`${process.cwd()}/content/backend`, "utf-8");

  const beBlogs = beFiles.filter((fn) => fn.endsWith(".md"));

  const databe = beBlogs.map((blog) => {
    const path = `${process.cwd()}/content/backend/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      datafe,
      databe,
    },
  };
};
