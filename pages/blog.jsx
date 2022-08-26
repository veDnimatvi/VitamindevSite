import matter from "gray-matter";
import Footer from "./components/Footer";
import { getNumFromDateString } from "../utils/blogFunction";
import PostItem from "./components/PostItem";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useRouter } from "next/router";

export default function MyBlog(props) {
  const router = useRouter();

  const [listPosts, setListPosts] = useState([]);
  const [backupListPosts, setBackupListPosts] = useState([]);
  const [listSearchs, setListSearchs] = useState([]);
  const [keySearchs, setKeySearchs] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const asPathName = router?.asPath?.split("?");
    const realData = props?.data?.map((blog) => matter(blog));
    let listItems = realData.map((listItem) => listItem.data);
    //Sort Items Based On Date
    listItems = listItems.sort((a, b) => {
      let aDate = getNumFromDateString(a.date);
      let bDate = getNumFromDateString(b.date);

      return bDate - aDate;
    });
    setBackupListPosts(listItems);
    if (asPathName?.length > 1) {
      let pageNumber = Number(asPathName?.[1]?.split("=")[1]);
      setCurrentPage(pageNumber);
      setListPosts(listItems.slice((pageNumber - 1) * 10, pageNumber * 10));
    } else {
      setListPosts(listItems.slice(0, 10));
    }

    setTotalPage(Math.ceil(listItems?.length / 10));
  }, []);

  const searchArticle = (value) => {
    setKeySearchs(value);
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

  const changePage = (page) => {
    setCurrentPage(page);
    router.replace({
      pathname: "/blog",
      query: { page: page },
    });

    setListPosts(backupListPosts.slice((page - 1) * 10, page * 10));
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

        {!keySearchs && (
          <div className="flex justify-between font-semibold text-lg mt-10">
            <div
              className={
                currentPage === 1
                  ? "cursor-pointer disable-div"
                  : "cursor-pointer"
              }
              onClick={() => changePage(currentPage - 1)}
            >
              Previous
            </div>
            <div>
              {currentPage} of {totalPage}
            </div>
            <div
              className={
                currentPage === totalPage
                  ? "cursor-pointer disable-div"
                  : "cursor-pointer"
              }
              onClick={() => changePage(currentPage + 1)}
            >
              Next
            </div>
          </div>
        )}
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