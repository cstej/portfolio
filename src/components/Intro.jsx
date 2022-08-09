import React from "react";
import introImg from "./undraw_back_to_school_inwc.svg";

const Intro = () => {
  return (
    <section aria-label="introduction-container" className="container mx-auto">
      <div
        className="rounded-md bg-cyan-200 m-5
      p-5 flex items-center flex-col md:flex-row md:justify-around"
      >
        <div className="md:w-2/4">
          <heading className="text-3xl">
            <span>👋</span>
            <span className=" text-5xl">Hi,</span> I'am Tejendra
          </heading>
          <p className="pt-5 text-slate-500 md:w-2/3">
            <span className="text-blue-600 text-2xl font-semibold">I'</span>am a
            aspiring Full stack web developer from India. My Prefered tools are
            React JS, Node Js, HTML, CSS.
          </p>
          <div className="mt-5 flex  justify-space items-center invisible md:visible">
            <i className="pr-5 fab fa-github text-3xl"></i>
            <i class="fa-brands fa-instagram text-3xl"></i>
          </div>
        </div>
        <img src={introImg} alt="" className="md:w-2/5 -mt-10 md:mt-0" />
      </div>
    </section>
  );
};

export default Intro;
