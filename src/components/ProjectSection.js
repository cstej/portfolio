import React from "react";
import "../css/projectSection.css";
const ProjectSection = () => {
  const projects = [
    {
      name: "Taskify",
      githubLink: "https://github.com/cstej/taskify-client",
      deployedLink: "https://taskify-client.netlify.app/",
      color: "#D5E770",
    },
    {
      name: "Shorty",
      githubLink: "https://github.com/cstej/shorty-client",
      deployedLink: "https://shortyclient.netlify.app/",
      color: "#F6BD41",
    },
    {
      name: "Webpage Replicas",
      githubLink: "https://github.com/cstej/Webpage-Replicas",
      deployedLink: "https://github.com/cstej/Webpage-Replicas",
      color: "#D5E770",
    },
  ];

  return (
    <div className="scroll-smooth">
      <div className="max-w-[1190px] mx-auto mx aut h-[1px] bg-[#121b23]"></div>
      <div className="max-w-[1190px] mx-auto pt-[30px] md:pt-[50px] lg:pt-[100px] px-5">
        <div id="project" className="flex items-center justify-between">
          <span className="font-extrabold text-3xl md:text-4xl text-white block tracking-wide">
            Project
          </span>
          <span className="text-center block text-lg sm:text-xl md:text-2xl text-primarygray ">
            For those who know what they're looking for..
          </span>
        </div>
      </div>

      <div className="max-w-[1190px] mx-auto my-10 flex flex-wrap justify-center items-center gap-10">
        {projects.map((project, index) => {
          return (
            <div
              className={`md:min-w-[350px]  lg:min-w-[400px]  projitem flex flex-col  p-10 min-h-[280px] rounded-md bg-[${project.color}]`}
            >
              <div className="projtitle my-auto cursor-pointer">
                <span>0{`${index + 1}`}.</span>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-2xl w-1/2">{project.name}</p>
                  <span className="">
                    <img
                      className=""
                      width={"35px"}
                      alt=""
                      src="https://img.icons8.com/fluency-systems-filled/48/000000/long-arrow-right.png"
                    />
                  </span>
                </div>
                <div className="line w-[full] mt-3 mb-2 py-[1px] bg-black"></div>
              </div>
              <div className="projlink flex items-center justify-evenly ">
                <span className="cursor-pointer">
                  <a href={project.githubLink}>
                    <i className="fab fa-github text-[40px] text-black hover:text-white" />
                  </a>
                </span>
                <span className="cursor-pointer inline">
                  <a href={project.deployedLink}>
                    <i className="fa-solid fa-square-arrow-up-right text-[40px] text-black hover:text-white" />
                  </a>
                </span>
              </div>
            </div>
          );
        })}

        {/* <div className="projitem flex flex-col  p-10 h-[300px] rounded-md bg-[#D5E770]">
          <div className="projtitle my-auto cursor-pointer">
            <span>01.</span>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-2xl w-1/2">
                Social Media Marketing
              </p>
              <span className="">
                <img
                  className=""
                  width={"35px"}
                  alt=""
                  src="https://img.icons8.com/fluency-systems-filled/48/000000/long-arrow-right.png"
                />
              </span>
            </div>
            <div className="line w-[full] mt-3 mb-2 py-[1px] bg-black"></div>
          </div>
          <div className="projlink flex items-center justify-evenly ">
            <span className="cursor-pointer">
              <i className="fab fa-github text-[40px] text-black hover:text-white" />
            </span>
            <span className="cursor-pointer inline">
              <i className="fa-solid fa-square-arrow-up-right text-[40px] text-black hover:text-white" />
            </span>
          </div>
        </div>
        <div className="projitem flex flex-col  p-10 h-[300px] rounded-md bg-[#F6BD41]">
          <div className="projtitle my-auto cursor-pointer">
            <span>01.</span>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-2xl w-1/2">
                Social Media Marketing
              </p>
              <span className="">
                <img
                  className=""
                  width={"35px"}
                  alt=""
                  src="https://img.icons8.com/fluency-systems-filled/48/000000/long-arrow-right.png"
                />
              </span>
            </div>
            <div className="line w-[full] mt-3 mb-2 py-[1px] bg-black"></div>
          </div>
          <div className="projlink flex items-center justify-evenly ">
            <span className="cursor-pointer">
              <i className="fab fa-github text-[40px] text-black hover:text-white" />
            </span>
            <span className="cursor-pointer inline">
              <i className="fa-solid fa-square-arrow-up-right text-[40px] text-black hover:text-white" />
            </span>
          </div>
        </div>
        <div className="projitem flex flex-col  p-10 h-[300px] rounded-md bg-[#FEF9F6]">
          <div className="projtitle my-auto cursor-pointer">
            <span>01.</span>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-2xl w-1/2">
                Social Media Marketing
              </p>
              <span className="">
                <img
                  className=""
                  width={"35px"}
                  alt=""
                  src="https://img.icons8.com/fluency-systems-filled/48/000000/long-arrow-right.png"
                />
              </span>
            </div>
            <div className="line w-[full] mt-3 mb-2 py-[1px] bg-black"></div>
          </div>
          <div className="projlink flex items-center justify-evenly ">
            <span className="cursor-pointer">
              <i className="fab fa-github text-[40px] text-black hover:text-white" />
            </span>
            <span className="cursor-pointer inline">
              <i className="fa-solid fa-square-arrow-up-right text-[40px] text-black hover:text-white" />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectSection;
