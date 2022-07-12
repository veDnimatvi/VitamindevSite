import React from "react";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import Footer from "../components/Footer";
import Image from "next/image";
import face from "../../public/img/facebook-30.png";
import twitter from "../../public/img/twitter-30.png";
import linkedin from "../../public/img/linkedin-30.png";

function Blog(props) {
  const { data, content } = matter(props.content);
  const SOCIAL_SHARE = {
    FACEBOOK: "https://www.facebook.com/sharer.php?u=",
    LINKEDIN: "https://www.linkedin.com/shareArticle?mini=true&url=",
    TWITTER: "https://twitter.com/intent/tweet?url=",
  };

  const socialShareFaceBook = (type) => {
    window.open(`${SOCIAL_SHARE[type]}${window.location.href}`);
  };
  return (
    // <Layout>
    <>
      <div id="blog-post-container">
        <div className="prose main">
          <h1 className="header">{data.title}</h1>
          <h3>Share to social</h3>
          <div className="social-share">
            <Image
              src={face}
              alt="icon face"
              onClick={() => socialShareFaceBook("FACEBOOK")}
            />
            <Image
              src={twitter}
              alt="icon twitter"
              onClick={() => socialShareFaceBook("TWITTER")}
            />
            <Image
              src={linkedin}
              alt="icon linkedin"
              onClick={() => socialShareFaceBook("LINKEDIN")}
            />
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
      <Footer />
    </>
    // </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const fs = require("fs");

  const { blog } = context.params;

  const content = fs.readFileSync(
    `${process.cwd()}/content/${blog}.md`,
    "utf8"
  );

  return {
    props: {
      content,
    },
  };
};

export default Blog;
