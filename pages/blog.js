import matter from "gray-matter";
import Footer from "./components/Footer";
import { getNumFromDateString } from "../utils/blogFunction";
import PostItem from "./components/PostItem";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function MyBlog(props) {
  const [listPosts, setListPosts] = useState([]);
  const [listSearchs, setListSearchs] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

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

  const searchArticle = (value) => {
    setIsFirstLoad(false);
    if (value === "") {
      setListSearchs(listPosts);
    } else {
      const newList = listPosts.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setListSearchs(newList);
    }
  };

  return (
    // <Layout>
    <section id="index-page" className="flex h-screen flex-col justify-between">
      <Header />

      <div className="main mb-auto">
        <div className="mx-auto mt-20 container">
          <div className="text-4xl font-bold">All Posts</div>
          <div className="w-32 h-1 bg-orange-300 rounded"></div>
          <input
            className="input-search w-full md:w-1/2"
            type="text"
            placeholder="Search articles"
            onChange={(e) => searchArticle(e.target.value)}
          />
          <hr className="my-5" />
        </div>
        <PostItem listItems={isFirstLoad ? listPosts : listSearchs} />
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
