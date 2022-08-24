import matter from "gray-matter";
import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";
import iconTurnLeft from "../public/img/turn-to-left-25.png";
import { getNumFromDateString } from "../utils/blogFunction";
import PostItem from "./components/PostItem";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function MyBlog(props) {
  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    const realData = props?.data?.map((blog) => matter(blog));
    let listItems = realData.map((listItem) => listItem.data);
    //Sort Items Based On Date
    listItems = listItems.sort((a, b) => {
      let aDate = getNumFromDateString(a.date);
      let bDate = getNumFromDateString(b.date);

      return bDate - aDate;
    });
    setListPosts(listItems);
  }, []);

  return (
    // <Layout>
    <section id="index-page">
      <Header />

      <div className="main">
        <div className="mb-10">
          <div className="text-3xl font-bold">Blog</div>
          <div className="w-20 h-1 bg-orange-300 rounded"></div>
        </div>
        <PostItem listItems={listPosts} />
      </div>
      <Footer />
    </section>
    // </Layout>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data,
    },
  };
};
