import Image from "next/image";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import img from "../public/img/new-avatar.jpg";

const About = () => {
  const listSkills = [
    {
      bg: "rgb(216, 44, 32)",
      name: "HTML",
    },
    {
      bg: "rgb(21, 114, 182)",
      name: "CSS",
    },
    {
      bg: "rgb(204, 102, 153)",
      name: "Sass",
    },
    {
      bg: "rgb(247, 224, 24)",
      name: "Javascript",
    },
    {
      bg: "rgb(0, 122, 204)",
      name: "Typescript",
    },
    {
      bg: "rgb(97, 218, 251)",
      name: "ReactJs",
    },
    {
      bg: "rgb(89, 61, 136)",
      name: "Redux",
    },
    {
      bg: "rgb(0, 0, 0)",
      name: "NextJs",
    },
    {
      bg: "rgb(79, 192, 141)",
      name: "VueJs",
    },
    {
      bg: "rgb(221, 0, 49)",
      name: "AngularJs",
    },
    {
      bg: "rgb(1, 112, 254)",
      name: "AntDesign",
    },
    {
      bg: "rgb(0, 129, 203)",
      name: "MUI",
    },
    {
      bg: "rgb(225, 0, 152)",
      name: "Graphql",
    },
    {
      bg: "rgb(242, 78, 30)",
      name: "Figma",
    },
    {
      bg: "rgb(237, 139, 0)",
      name: "Java",
    },
    {
      bg: "rgb(109, 179, 63)",
      name: "SpringBoot",
    },
    {
      bg: "rgb(1, 82, 158)",
      name: "Mariadb",
    },
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
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <div className="container mx-auto">
        <div className="mb-20 mx-10">
          <div className="text-4xl font-bold">About me</div>
          <div className="w-40 h-1 bg-orange-300 rounded"></div>
        </div>

        <div className="md:flex mx-10">
          <div className="md:mx-5 about-left flex flex-col justify-center">
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
                  <p className="font-bold text-black">
                    Nguyễn Thanh Thiên - Web Developer -{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="text-center text-2xl font-semibold">
              Nguyễn Thanh Thiên
            </div>
            <div className="text-center text-xl">Web Developer</div>
            <div className="text-center text-xl">Hà nội</div> */}
          </div>
          <div className="md:mx-32 about-right">
            <p className="text-lg mb-6">
              Tôi là Thiên, chủ nhân của blog này. Hiện đang sinh sống và làm
              việc tại Thành phố Hà nội. Ở blog này tôi chia sẻ những gì mình
              biết đến mọi người. Vì tôi biết cách tiếp thu kiến thức tốt nhất
              là chia sẻ. Tôi có hơn 1 năm kinh nghiệm trong lập trình front-end
              với đa dạng framework của javascript như ReactJS, AngularJs và
              VueJS
            </p>

            <p className="text-lg mb-6">
              Tôi là một người thích sáng tạo, kỷ luật, ham học hỏi. Trong tương
              lai tôi muốn học thêm về ngôn ngữ Java để có thể làm được cả
              frontend và backend.
            </p>
            <p className="text-lg mb-6">
              Sở thích của tôi là chơi thể thao, xem phim, nghe nhạc, học nhạc,
              du lịch bụi, nhiếp ảnh phong cảnh. Chúng ta có thể kết bạn với
              nhau. Info tôi để ở phần footer bên dưới.
            </p>
            <p className="text-lg mb-6">Download MyCV</p>
            <div className="text-xl mb-3">My Skills</div>
            <div className="flex flex-wrap">
              {listSkills &&
                listSkills?.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white"
                      style={{ background: item.bg }}
                    >
                      {item.name}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
