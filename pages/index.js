import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../public/img/my-logo.svg";
import menuIcon from "../public/img/icons-menu.svg";
import img from "../public/img/new-avatar.jpg";
import face from "../public/img/facebook-100.png";
import github from "../public/img/github-100.png";
import linkedin from "../public/img/linkedin-100.png";
import twitter from "../public/img/twitter-100.png";
import MySkill from "./components/MySkill";

export default function MyProfile() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [isFirstLoad, setisFirstLoad] = useState(false);
  const handleMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile);
    setisFirstLoad(true);
  };

  const closeMenu = () => setOpenMenuMobile(false);

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
      <div className="navbar-sticky">
        <div className="container flex justify-between mx-auto navbar">
          <div className="flex items-center float-left pl-8 text-2xl cursor-pointer">
            <Image src={logo} alt="logo" />
            Vitamindev
          </div>
          <div className="flex float-right menu-desktop ">
            <div className="text-xl cursor-pointer">
              <a href="#home">Home</a>
            </div>
            <div className="ml-20 text-xl cursor-pointer">
              <a href="#about">About</a>
            </div>
            <div className="ml-20 text-xl cursor-pointer">
              <a href="#resume">Resume</a>
            </div>
            <div className="ml-20 text-xl cursor-pointer">
              <a href="#skill">Skills</a>
            </div>
            <div className="ml-20 text-xl cursor-pointer">
              <a href="#project">Project</a>
            </div>
            <div className="ml-20 text-xl cursor-pointer">
              <a href="#blog">Blog</a>
            </div>
            <div className="ml-20 text-xl cursor-pointer">
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div
            className="float-right pt-1 mr-4 menu-icon"
            onClick={handleMenuMobile}
          >
            <Image src={menuIcon} alt="menu icon" />
          </div>
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
        <div className="mb-12 ml-16 text-xl cursor-pointer mt-28">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer">
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer">
          <a href="#resume" onClick={closeMenu}>
            Resume
          </a>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer">
          <a href="#skill" onClick={closeMenu}>
            Skills
          </a>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer">
          <a href="#project" onClick={closeMenu}>
            Project
          </a>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer">
          <a href="#blog" onClick={closeMenu}>
            Blog
          </a>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer">
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>

      <div className="introduce" id="home">
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
            <div className="text-3xl" id="about">
              About me
            </div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>
            <div>I want to be a web developer and web designer</div>
            <div>My hobbies are playing sports, playing music, traveling </div>
          </div>
          <div className="pt-10 about__info">
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

      <div className="container mx-auto">
        <div className="resume">
          <div>
            <div className="text-3xl" id="resume">
              Resume
            </div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>
          </div>
          <div>
            <div className="time-line">
              <div className="wapper time-line__left">
                <div className="time-line__content">
                  <h2>08/2017 - 7/2021</h2>
                  <p>
                    I am Student at Hanoi University of Industry. My major is
                    software engineering
                  </p>
                </div>
              </div>
              <div className="wapper time-line__right">
                <div className="time-line__content">
                  <h2>12/2019 - 10/2020</h2>
                  <p>I started to learn javascript, reactjs framework</p>
                </div>
              </div>
              <div className="wapper time-line__left">
                <div className="time-line__content">
                  <h2>12/2020 - 03/2021</h2>
                  <p>
                    I am an intern at Front end (ReactJs) developer position at
                    Hivetech Company
                  </p>
                </div>
              </div>
              <div className="wapper time-line__right">
                <div className="time-line__content">
                  <h2>04-2021 - now</h2>
                  <p>
                    I am a junior at at Front end developer position at Hivetech
                    Company.Here I learn and work with many front end frameworks
                    like reactjs, vuejs, angularjs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="skills">
          <div className="mb-10">
            <div className="text-3xl" id="skill">
              My Skills
            </div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>
          </div>
          <MySkill />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="project">
          <div className="mb-10">
            <div className="text-3xl" id="project">
              Outstanding Projects
            </div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>
          </div>

          <div className="project-item">
            <p className="text-2xl text-orange-300">DTC(Đầu tư công)</p>
            <div>
              DTC system - government a system - management of public projects
              of the country under the "secret" ministry. Technologies is VueJS
            </div>
          </div>
          <div className="project-item">
            <p className="text-2xl text-fuchsia-400">TCMA(Telekom)</p>
            <div>
              TCMA is a dynamic e-commerce site for telecommunications products
              and management systems. Technologies is ReactJS, Apollo GraphQL
            </div>
          </div>
          <div className="project-item">
            <p className="text-2xl text-green-500">MS(Mobile Skips)</p>
            <div>
              MS is The skip bin hire industry system manager in Australia for
              mobileskips.com.au. Technologies is AngularJS
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="blog">
          <div>
            <div className="text-3xl" id="blog">
              Latest post on my blog
            </div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}
