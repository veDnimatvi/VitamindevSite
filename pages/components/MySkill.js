import React from "react";
import Image from "next/image";
import html from "../../public/img/html-5.png";
import css from "../../public/img/css3.png";
import js from "../../public/img/javascript-100.png";
import sass from "../../public/img/sass-100.png";
import bootstrap from "../../public/img/bootstrap-100.png";
import mui from "../../public/img/material-ui-100.png";
import tailwind from "../../public/img/tailwind.svg";
import antd from "../../public/img/antd.png";
import typescript from "../../public/img/typescript-100.png";
import react from "../../public/img/react-100.png";
import vue from "../../public/img/vue-100.png";
import angular from "../../public/img/angularjs-100.png";
import java from "../../public/img/java-100.png";
import node from "../../public/img/nodejs-100.png";
import graphql from "../../public/img/graphql-100.png";
import figma from "../../public/img/figma-100.png";

export default function MySkill() {
  return (
    <>
      <div className="skill">
        <p className="skill__content">My skills</p>
      </div>
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
          <Image src={js} alt="js" />
          <p>Javascript</p>
        </div>
        <div className="list-skill__item">
          <Image src={typescript} alt="typescript" />
          <p>Typescript</p>
        </div>
        <div className="list-skill__item">
          <Image src={sass} alt="sass" />
          <p>Sass</p>
        </div>
        <div className="list-skill__item">
          <Image src={bootstrap} alt="bootstrap" />
          <p>bootstrap</p>
        </div>
        <div className="list-skill__item">
          <Image src={mui} alt="mui" />
          <p>Material UI</p>
        </div>
        <div className="list-skill__item">
          <Image src={tailwind} alt="tailwind" width={100} height={100} />
          <p>TailwindCss</p>
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
          <Image src={node} alt="node" width={100} height={100} />
          <p>NodeJs</p>
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
