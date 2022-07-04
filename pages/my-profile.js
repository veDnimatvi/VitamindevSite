import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../public/img/my-logo.svg";
import menuIcon from "../public/img/icons-menu.svg";
import img from "../public/img/new-avatar.jpg";
import face from "../public/img/facebook-100.png";
import github from "../public/img/github-100.png";
import linkedin from "../public/img/linkedin-100.png";
import twitter from "../public/img/twitter-100.png";

export default function MyProfile() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [isFirstLoad, setisFirstLoad] = useState(false);
  const handleMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile);
    setisFirstLoad(true);
  };

  useEffect(() => {
    const text = document.querySelector(".text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      )
      .join("");
  }, []);
  return (
    <>
      {openMenuMobile && (
        <>
          <div
            className="model"
            onClick={handleMenuMobile}
            aria-hidden="true"
          ></div>
        </>
      )}
      <div className="navbar container mx-auto flex justify-between">
        <div className="text-2xl flex items-center float-left cursor-pointer pl-8">
          <Image src={logo} alt="logo" />
          Vitamindev
        </div>
        <div className="float-right flex menu-desktop">
          <div className="text-xl cursor-pointer">Home</div>
          <div className="text-xl ml-28 cursor-pointer">About</div>
          <div className="text-xl ml-28 cursor-pointer">Resume</div>
          <div className="text-xl ml-28 cursor-pointer">Skills</div>
          <div className="text-xl ml-28 cursor-pointer">Blog</div>
          <div className="text-xl ml-28 cursor-pointer">Contact</div>
        </div>

        <div
          className="float-right menu-icon mr-4 pt-1"
          onClick={handleMenuMobile}
        >
          <Image src={menuIcon} alt="menu icon" />
        </div>
      </div>

      <div
        className={
          openMenuMobile
            ? "menu-open"
            : isFirstLoad
            ? "menu-close"
            : "menu-close-first"
        }
      >
        <div className="text-xl cursor-pointer mb-12 ml-16 mt-28">Home</div>
        <div className="text-xl cursor-pointer mb-12 ml-16">About</div>
        <div className="text-xl cursor-pointer mb-12 ml-16">Resume</div>
        <div className="text-xl cursor-pointer mb-12 ml-16">Skills</div>
        <div className="text-xl cursor-pointer mb-12 ml-16">Blog</div>
        <div className="text-xl cursor-pointer mb-12 ml-16">Contact</div>
      </div>

      <div className="introduce">
        <div className="flex justify-center">
          <div className="my-avatar">
            <Image
              className="logo2"
              src={img}
              alt="a"
              width={150}
              height={150}
            />
            <div className="text">
              <p className="font-bold text-white">
                Nguyễn Thanh Thiên - Web Developer -{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="text-6xl text-center text-white">
          I am <span className="text-orange-300">Thiên</span>
        </div>
        <div className="text-6xl text-center text-white">
          I am <span className="text-orange-300">a web developer</span> <br />
          in Hanoi !
        </div>
      </div>

      <div className="container mx-auto">
        <div className="about">
          <div className="about__title">
            <div className="text-3xl">About me</div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>
            <div>I want to be a web developer and web designer</div>
            <div>My hobbies are playing sports, playing music, traveling </div>
          </div>
          <div className="about__info pt-10">
            <div>Name: Nguyễn Thanh Thiên</div>
            <div>Born : August 09, 1999</div>
            <div>Email : codertom100@gmail.com</div>
            <div>Phone : 0345000921</div>

            <div className="wrapper">
              <div
                className="icon facebook"
                onClick={() =>
                  window.open("https://www.facebook.com/nt.thien.9899/")
                }
              >
                <div className="tooltip">Facebook</div>
                <span>
                  <Image className="logo2" src={face} alt="icon face" />
                </span>
              </div>
              <div
                className="icon github"
                onClick={() => window.open("https://github.com/vitamindevplus")}
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
                onClick={() =>
                  window.open("https://www.linkedin.com/in/vitamindev/")
                }
              >
                <div className="tooltip">Linkedin</div>
                <span>
                  <Image className="logo2" src={linkedin} alt="icon linkedin" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
