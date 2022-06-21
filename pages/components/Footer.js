import React from "react";
import Image from "next/image";
import img from "../../public/img/avatar.jpg";
import face from "../../public/img/facebook-100.png";
import github from "../../public/img/github-100.png";
import linkedin from "../../public/img/linkedin-100.png";
import twitter from "../../public/img/twitter-100.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo-footer">
        <Image
          width={100}
          height={100}
          className="logo2"
          src={img}
          alt="logo footer"
        />
      </div>
      <div className="my-name">Thiên Nguyễn</div>
      <div className="my-email">codertom100@gmail.com</div>
      <div className="wrapper">
        <div
          className="icon facebook"
          onClick={() => window.open("https://www.facebook.com/nt.thien.9899/")}
        >
          <div className="tooltip">Facebook</div>
          <span>
            <Image className="logo2" src={face} alt="icon face" />
          </span>
        </div>
        <div
          className="icon github"
          onClick={() => window.open("https://github.com/vitamindev100")}
        >
          <div className="tooltip">GitHub</div>
          <span>
            <Image className="logo2" src={github} alt="icon github" />
          </span>
        </div>
        <div
          className="icon twitter"
          onClick={() => window.open("https://twitter.com/vitamindev100")}
        >
          <div className="tooltip">Twitter</div>
          <span>
            <Image className="logo2" src={twitter} alt="icon twitter" />
          </span>
        </div>
        <div
          className="icon linkedin"
          onClick={() => window.open("https://www.linkedin.com/in/vitamindev/")}
        >
          <div className="tooltip">Linkedin</div>
          <span>
            <Image className="logo2" src={linkedin} alt="icon linkedin" />
          </span>
        </div>
      </div>
    </div>
  );
}
