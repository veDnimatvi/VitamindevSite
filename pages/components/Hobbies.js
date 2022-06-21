import React from "react";
import Image from "next/image";
import guitar from "../../public/img/guitar-50.png";
import sport from "../../public/img/sport-50.png";
import travel from "../../public/img/traveler-50.png";
import paint from "../../public/img/paint-50.png";

export default function Hobbies() {
  return (
    <>
      <div className="skill">
        <p className="skill__content">My hobbies</p>
      </div>

      <div className="hobbies">
        <div className="hobbies__item">
          <Image src={guitar} alt="guitar" />
          Play Music
        </div>
        <div className="hobbies__item">
          <Image src={sport} alt="guitar" />
          Sport
        </div>
        <div className="hobbies__item">
          <Image src={travel} alt="guitar" />
          Travel
        </div>
        <div className="hobbies__item">
          <Image src={paint} alt="guitar" />
          Paint
        </div>
      </div>
    </>
  );
}
