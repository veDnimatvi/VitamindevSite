import React, { useEffect } from "react";

const CommentsFacebook = () => {
  useEffect(() => {
    const facebookScript = document.createElement("script");
    facebookScript.async = true;
    facebookScript.src =
      "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0&appId=1039695453955007";
    document.body.appendChild(facebookScript);
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
