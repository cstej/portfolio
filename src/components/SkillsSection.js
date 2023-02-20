import React from "react";
import style from "./SkillsSection.module.css";
import reactIcon from "../assets/react-js-icon.svg";
import htmlIcon from "../assets/html5-line-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import tailwindIcon from "../assets/tailwind-css-icon.svg";
import javascriptIcon from "../assets/javascript-icon.svg";
import nodejsIcon from "../assets/node-js-icon.svg";
import mongodbIcon from "../assets/mongodb-icon.svg";

const SkillsSection = () => {
  return (
    <div className="max-w-[1190px] mx-auto py-[30px] md:py-[50px] lg:py-[100px] px-5">
      <div>
        <span className="text-center mb-4 font-extrabold text-3xl md:text-4xl text-white block tracking-wide">
          Skills & Tools
        </span>
        <span className="text-center block text-lg sm:text-xl md:text-2xl text-primarygray mb-6">
          For those who know what they're looking for..
        </span>
      </div>
      <div>
        <ul
          className={`${style.list} flex flex-wrap  items-center justify-center text-white`}
        >
          <li class="p-4 rounded-lg flex items-end justify-center m-2">
            <div className="flex flex-col items-center">
              <img className="w-[45px] h-[45px]" src={reactIcon} alt="" />
              <span class="font-bold block mt-3 mb-1 ">React</span>
            </div>
          </li>
          <li class="p-4 rounded-lg flex items-end justify-center m-2">
            <div className="flex flex-col items-center">
              <img
                className="w-[45px] h-[45px] text-center"
                src={htmlIcon}
                alt=""
              />
              <span class="font-bold block mt-3 mb-1">Html</span>
            </div>
          </li>
          <li class="p-4 rounded-lg flex items-end justify-center m-2">
            <div className="flex flex-col items-center">
              <img className="w-[45px] h-[45px]" src={cssIcon} alt="" />
              <span class="font-bold block mt-3 mb-1 ">Css</span>
            </div>
          </li>
          <li class="p-4 rounded-lg flex items-end justify-center m-2">
            <div className="flex flex-col items-center">
              <img className=" w-[45px] h-[45px]" src={javascriptIcon} alt="" />
              <span class="font-bold block mt-3 mb-1 ">JavaScript</span>
            </div>
          </li>
          <li class="p-4 rounded-lg flex items-end justify-center m-2">
            <div className="flex flex-col items-center">
              <img className=" w-[45px] h-[45px]" src={tailwindIcon} alt="" />
              <span class="font-bold block mt-3 mb-1 ">Tailwind</span>
            </div>
          </li>
          <li class="p-4 rounded-lg flex items-end justify-center m-2">
            <div className="flex flex-col items-center">
              <img className=" w-[45px] h-[45px]" src={mongodbIcon} alt="" />
              <span class="font-bold block mt-3 mb-1 ">MongoDB</span>
            </div>
          </li>
          <li class="p-4 rounded-lg flex items-end justify-center m-2">
            <div className="flex flex-col items-center">
              <img className=" w-[45px] h-[45px]" src={nodejsIcon} alt="" />
              <span class="font-bold block mt-3 mb-1 ">NodeJS</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
