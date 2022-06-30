import React, { useEffect } from "react";
import Image from "next/image";
import img from "../../public/img/avatar.jpg";
import face from "../../public/img/facebook-100.png";
import github from "../../public/img/github-100.png";
import linkedin from "../../public/img/linkedin-100.png";
import twitter from "../../public/img/twitter-100.png";

import MySkill from "./MySkill";
import Hobbies from "./Hobbies";
import Navbar from "./Navbar";

export default function Main() {
  const arr = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1,
  ];
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
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>
      <Navbar />
      <div className="my-header">
        <div className="my-avatar">
          <Image className="logo2" src={img} alt="a" width={150} height={150} />
          <div className="text">
            <p className="font-bold">Nguyễn Thanh Thiên - Web Developer - </p>
          </div>
        </div>
        <div className="intro">
          <p>Nguyễn Thanh Thiên</p>
          <p>codertom100@gmail.com</p>
          <p>The first step is always the hardest!</p>
        </div>
        <div className="contact">
          <p className="contact__content">About me</p>
        </div>
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

        <div className="about-me">
          <p>I graduated from HaUI in 2021</p>
          <p>
            I have 1+ years of experience in Front End Developer and now I am
            becoming a Back End Developer
          </p>
        </div>

        {/* <div className="group-btn">
        <button className="group-btn__btn">Giới Thiệu</button>
        <button className="group-btn__btn">Blog</button>
      </div> */}

        <div className="square"></div>
        <div className="circle"></div>
        <div className="groupDot">
          {arr.map((item, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div>
        <div className="triangle"></div>

        <MySkill />
        <Hobbies />
      </div>
    </>
  );
}
