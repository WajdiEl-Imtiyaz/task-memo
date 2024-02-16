import React, { useState, useEffect } from "react";
import { AlignJustifyIcon } from "lucide-react";

const Tab = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const divs = [];
  for (let i = 0; i < 20; i++) {
    divs.push(
      <div
        key={i}
        className={`h-12 border-b border-slate-800 flex items-center justify-center ${
          i < 5 ? "editable" : ""
        }`}
      ></div>
    );
  }

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="m-0 p-0 relative">
      <div
        className="absolute left-6 top-0 transform -translate-y-14 md:hidden text-white cursor-pointer"
        onClick={handleIconClick}
      >
        <AlignJustifyIcon />
      </div>
      <div
        className={`transition-transform duration-500 ease-in-out transform md:w-[200px] w-[150px] ${
          isOpen
            ? "translate-x-0 md:border-r-4 md:border-red-600 border-r-4 border-red-600 md:block"
            : "-translate-x-full hidden"
        } h-max md:translate-x-0`}
      >
        {divs}
      </div>
    </div>
  );
};

export default Tab;
