import React from "react";
import Image from "next/image";
import html from "../../public/img/html-5.png";
import css from "../../public/img/css3.png";
import js from "../../public/img/javascript-100.png";
import sass from "../../public/img/sass-100.png";
import mui from "../../public/img/material-ui-100.png";
import antd from "../../public/img/antd.png";
import typescript from "../../public/img/typescript-100.png";
import react from "../../public/img/react-100.png";
import vue from "../../public/img/vue-100.png";
import angular from "../../public/img/angularjs-100.png";
import java from "../../public/img/java-100.png";
import nextjs from "../../public/img/nextjs-100.png";
import graphql from "../../public/img/graphql-100.png";
import figma from "../../public/img/figma-100.png";
import spring from "../../public/img/spring-100.png";
import mariadb from "../../public/img/mariadb-100.png";

export default function MySkill() {
  return (
    <>
      <div className="list-skill">
        <div className="list-skill__item">
          <Image src={html} alt="html" />
          <p>HTML5</p>
        </div>
        <div className="list-skill__item">
          <Image src={css} alt="css" />
          <p>CSS3</p>
        </div>
        <div className="list-skill__item">
          <Image src={sass} alt="sass" />
          <p>Sass</p>
        </div>
        <div className="list-skill__item">
          <Image src={js} alt="js" />
          <p>Javascript</p>
        </div>
        <div className="list-skill__item">
          <Image src={typescript} alt="typescript" />
          <p>Typescript</p>
        </div>
        <div className="list-skill__item">
          <Image src={mui} alt="mui" />
          <p>Material UI</p>
        </div>

        <div className="list-skill__item">
          <Image src={antd} alt="antd" width={100} height={100} />
          <p>Ant Design</p>
        </div>
        <div className="list-skill__item">
          <Image src={react} alt="react" width={100} height={100} />
          <p>ReactJS</p>
        </div>
        <div className="list-skill__item">
          <Image src={nextjs} alt="nextjs" width={100} height={100} />
          <p>NextJS</p>
        </div>
        <div className="list-skill__item">
          <Image src={vue} alt="vue" width={100} height={100} />
          <p>VueJS</p>
        </div>
        <div className="list-skill__item">
          <Image src={angular} alt="angular" width={100} height={100} />
          <p>AngularJS</p>
        </div>
        <div className="list-skill__item">
          <Image src={java} alt="java" width={100} height={100} />
          <p>Java</p>
        </div>
        <div className="list-skill__item">
          <Image src={spring} alt="spring" width={100} height={100} />
          <p>Spring Boot</p>
        </div>
        <div className="list-skill__item">
          <Image src={mariadb} alt="mariadb" width={100} height={100} />
          <p>MariaDB</p>
        </div>
        <div className="list-skill__item">
          <Image src={graphql} alt="graphql" width={100} height={100} />
          <p>Qraphql</p>
        </div>
        <div className="list-skill__item">
          <Image src={figma} alt="figma" width={100} height={100} />
          <p>Figma</p>
        </div>
      </div>
    </>
  );
}
