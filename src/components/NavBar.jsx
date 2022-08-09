import React from "react";

export const NavBar = () => {
  return (
    <div className="container  mx-auto flex justify-between h-16 items-center px-5">
      <div className="text-2xl font-semibold text-blue-600">_cstej</div>
      <div className="flex text-md  gap-5 sm:gap-10 pl-10 font-medium">
        <span className="cursor-pointer active-nav">Project</span>
        <span className="cursor-pointer	">About</span>
        <span className="cursor-pointer	">Blog</span>
      </div>
    </div>
  );
};
