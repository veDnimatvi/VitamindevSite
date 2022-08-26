import React from "react";
import Image from "next/image";
import face from "../../public/img/facebook-icon.png";
import github from "../../public/img/github-icon.png";
import linkedin from "../../public/img/linkedin-icon.png";
import twitter from "../../public/img/twitter-icon.png";
import gmail from "../../public/img/gmail-icon.png";
import coffee from "../../public/img/coffee-icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex justify-center">
        <div className="mr-5 cursor-pointer">
          <a
            href="https://www.facebook.com/nt.thien.9899/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={face} alt="icon face" />
          </a>
        </div>
        <div className="mr-5 cursor-pointer">
          <a
            href="https://github.com/vitamindevplus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="icon github" />
          </a>
        </div>
        <div className="mr-5 cursor-pointer">
          <a
            href="https://twitter.com/vitamindev100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="icon twitter" />
          </a>
        </div>
        <div className="mr-5 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/vitamindev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt="icon linkedin" />
          </a>
        </div>
        <div className="mr-5 cursor-pointer">
          <a href="mailto:codertom100@gmail.com">
            <Image src={gmail} alt="icon linkedin" />
          </a>
        </div>
        <div className="cursor-pointer">
          <Image src={coffee} alt="icon linkedin" />
        </div>
      </div>
      <div className="text-center font-semibold">©2022 by Thiên Nguyễn</div>
    </div>
  );
}