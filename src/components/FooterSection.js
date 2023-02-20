import React from "react";

const FooterSection = () => {
  return (
    <div>
      <div className="max-w-[1190px] mx-auto mx aut h-[1px] bg-[#121b23]"></div>
      <div className="max-w-[1190px] mx-auto py-[30px]  px-5 flex justify-between font-bold">
        <div className="text  text-white">
          Made with <span className="text-red-800">&#10084;</span>
        </div>
        <div className="text  text-white">
          Mail:{" "}
          <a
            href="mailto:cstejendra@gmail.com"
            className="font-normal text-yellow-300"
          >
            cstejendra@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
