import matter from "gray-matter";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "./components/Footer";
import Link from "next/link";
import iconTurnLeft from "../public/img/turn-to-left-25.png";

export default function MyBlog(props) {
  const router = useRouter();
  const realData = props.data.map((blog) => matter(blog));
  let listItems = realData.map((listItem) => listItem.data);
  function getNumFromDateString(date) {
    let dateNums = date.split(" ");
    let month = dateNums[1];
    let nMonth = 0;
    switch (month) {
      case "January":
        nMonth = 1;
        break;
      case "Febuary":
        nMonth = 2;
        break;
      case "March":
        nMonth = 3;
        break;
      case "April":
        nMonth = 4;
        break;
      case "May":
        nMonth = 5;
        break;
      case "June":
        nMonth = 6;
        break;
      case "July":
        nMonth = 7;
        break;
      case "August":
        nMonth = 8;
        break;
      case "September":
        nMonth = 9;
        break;
      case "October":
        nMonth = 10;
        break;
      case "November":
        nMonth = 11;
        break;
      case "December":
        nMonth = 12;
        break;
      default:
        throw Error("Invalid Date");
    }
    return Number(dateNums[2] + nMonth + dateNums[0]);
  }
  //Sort Items Based On Date
  listItems = listItems.sort((a, b) => {
    let aDate = getNumFromDateString(a.date);
    let bDate = getNumFromDateString(b.date);

    return bDate - aDate;
  });

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
        <div className="blogs-container">
          {listItems?.map((blog, i) => (
            <div
              className="blogPost"
              key={i}
              onClick={() => router.push(`/vitamins/${blog?.slug}`)}
            >
              <div className="relative cursor-pointer">
                <img src={blog?.img} />
                <div className="date">{blog?.date}</div>
                <div className="blogTitle">{blog?.title}</div>
                <div className="absolute bottom-5 right-5">
                  {blog?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
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
