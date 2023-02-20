import React from "react";
import "../css/navbar.css";
import bolt from "../assets/lightning-bolt.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className=" header w-full sticky top-0  px-5 z-50">
      <div className="container max-w-[1172px] mx-auto flex justify-between items-center min-h-[85px]">
        <div className="  font-extrabold text-[28px]  text-[#fff] flex-1 ">
          cstej
          <img className="inline-block max-w-[28px] " src={bolt} alt="" />
        </div>
        <div className="">
          <ul className="relative flex font-semibold items-center text-base sm:text-lg lg:text-xl tracking-wide">
            <li className="navitem p-4 lg:px-6 text-white cursor-pointer  hover:text-yellow-300">
              <Link
                activeClass="active"
                to="default"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="navitem p-4 lg:px-6 text-white cursor-pointer  hover:text-yellow-300">
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li className="ml-2">
              <a
                className=" inline-block px-6 py-2 border-2 border-blue-600 text-blue-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                href="https://drive.google.com/file/d/1QTKggk7BF9uhHoV9R_kccU_k3btl5rsk/view"
                target="_blank"
                rel="noreferrer"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
