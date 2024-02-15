import React, { useState, useEffect } from "react";
import { AlignJustifyIcon } from "lucide-react";

const Tab = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const divs = [];
  for (let i = 0; i < 20; i++) {
    divs.push(<div key={i} className=" h-12 border-b border-slate-800"></div>);
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
    <div className="relative">
      <div
        className="absolute left-6 top-0 transform -translate-y-14 md:hidden text-white cursor-pointer"
        onClick={handleIconClick}
      >
        <AlignJustifyIcon />
      </div>
      <div
        className={`transition-transform duration-500 ease-in-out transform ${
          isOpen
            ? "translate-x-0 md:border-r-4 md:border-red-600"
            : "-translate-x-full"
        } border-r-4 border-red-600 h-max md:block md:translate-x-0`}
      >
        {divs}
      </div>
    </div>
  );
};

export default Tab;
