import React from "react";
import { Link } from "react-scroll";

import introImg from "../assets/introImg.svg";
import "../css/introSection.css";

const IntroSection = () => {
  return (
    <div className=" max-w-[1190px] mx-auto pt-[30px] md:pt-[50px] lg:pt-[60px] px-5">
      <div className="flex justify-between md:flex-row flex-col items-center">
        <div className="w-full ">
          <p
            className={`fade text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-primarygray text-center md:text-left`}
          >
            Hi there, I'm Tejendra 👋
          </p>
          <p className="fade-title text-yellow-300 font-bold text-3xl md:text-4xl mb-4 text-center md:text-left tracking-wide">
            Aspiring Full-Stack
            <br /> developer
          </p>
          <p className=" text-xl md:text-xl font-light text-white mb-6 text-center md:text-left ">
            Recent computer science graduate with full-stack development skills
            in HTML, CSS, JavaScript, React, Node.js, and MongoDB eager to
            create innovative web applications and tackle new challenges.
          </p>

          <div className="flex flex-col-reverse sm:flex-row mb-6 items-center justify-center md:justify-start gap-9 ">
            {/* <a href="/" className="button"></a> */}
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="button cursor-pointer"
            >
              View my Work
            </Link>
            <div
              className="flex gap-5
             items-center"
            >
              <a
                href="https://github.com/cstej"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fab fa-github text-[40px] text-primarygray hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/_cstej/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fab fa-instagram text-[40px] text-primarygray hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/cstej/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fab fa-linkedin text-[40px] text-primarygray hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-[90%]
        "
        >
          <img className=" max-w-[80%] mx-auto" src={introImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
