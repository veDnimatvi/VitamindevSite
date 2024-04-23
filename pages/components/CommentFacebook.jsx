import React, { useEffect } from "react";
import { initFacebookSDK } from "../../utils/blogFunction";

const CommentsFacebook = () => {
  useEffect(() => {
    initFacebookSDK();
  }, []);

  return (
    <React.Fragment>
      <div id="fb-root"></div>
      <div
        className="fb-comments"
        data-href="https://websitecuathien.vercel.app/"
        data-numposts="10"
        data-width="100%"
      ></div>
    </React.Fragment>
  );
};

export default CommentsFacebook;
