import React, { useState } from "react";
import Image from "next/image";
import face from "../../public/img/facebook-icon.png";
import github from "../../public/img/github-icon.png";
import linkedin from "../../public/img/linkedin-icon.png";
import gmail from "../../public/img/gmail-icon.png";
import coffee from "../../public/img/coffee-icon.png";
import Modal from "./Modal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
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
            href="https://github.com/codeninzza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="icon github" />
          </a>
        </div>
        <div className="mr-5 cursor-pointer">
          <a
            href="www.linkedin.com/in/codeninzza/"
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
        <div
          className="cursor-pointer"
          onClick={() => setShowModal(!showModal)}
        >
          <Image src={coffee} alt="icon linkedin" />
        </div>
      </div>
      <div className="text-center font-semibold">©2022 by Thiên Nguyễn</div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </div>
  );
}
