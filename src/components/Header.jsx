import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLock,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ham from "../assets/hamham.png";

const Header = () => {
  const skills = ["HTML/CSS", "Javascript", "React"];

  return (
    <div>
      <div className="flex justify-around h-[70px] items-center">
        <h1 className="text-3xl font-black">blog name</h1>
        <div className="flex gap-3">
          <button className="bg-gray-200 px-2 py-1 cursor-pointer">
            write
          </button>
          <button className="cursor-pointer">
            <FontAwesomeIcon icon={faLock} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 w-full h-[500px]"></div>
        <div className="flex justify-end relative w-[1280px] h-[250px]">
          <div className="flex flex-col absolute top-[-100px] left-[65px]">
            <div className="bg-white p-3">
              <img className="w-40" src={ham} alt="profile pic" />
            </div>
            <p className="text-4xl font-bold">hamuhamu</p>
            <div className="flex gap-1 items-center text-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" />
              <p>hokkaido, japan</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 mr-[65px] mt-6 text-right">
            <div className="flex justify-end gap-1 text-2xl text-gray-400">
              <FontAwesomeIcon icon={faGithub} className="cursor-pointer" />
              <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer" />
            </div>
            <p>junior frontend developer</p>
            <div className="flex gap-1 justify-end items-center">
              <FontAwesomeIcon icon={faHeart} className="cursor-pointer mr-1" />
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="pl-3 pr-3 pt-1 pb-1 bg-gray-300 rounded-lg font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
