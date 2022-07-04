import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../public/img/my-logo.svg";
import menuIcon from "../public/img/icons-menu.svg";
import img from "../public/img/new-avatar.jpg";

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

      <div className="introduce container mx-auto">
        <div className="avatar-group flex justify-center">
          <div className="my-avatar">
            <Image
              className="logo2"
              src={img}
              alt="a"
              width={150}
              height={150}
            />
            <div className="text">
              <p className="font-bold text-black">
                Nguyễn Thanh Thiên - Web Developer -{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="introduce__title">
          <div className="font-bold text-xl">Hello !</div>
          <div className="md:text-2xl lg:text-6xl">
            I am <span className="text-orange-300">Thiên</span>
          </div>
          <div className="md:text-2xl lg:text-6xl">
            I am <span className="text-orange-300">a web developer</span> <br />
            in Hanoi !
          </div>
        </div>
      </div>
    </>
  );
}
