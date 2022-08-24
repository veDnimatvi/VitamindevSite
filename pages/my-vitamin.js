import matter from "gray-matter";
import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";
import iconTurnLeft from "../public/img/turn-to-left-25.png";
import { getNumFromDateString } from "../utils/blogFunction";
import PostItem from "./components/PostItem";
import { useEffect, useState } from "react";

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
