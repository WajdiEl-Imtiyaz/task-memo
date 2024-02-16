import React, { useState, useEffect } from "react";

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
    <div className="relative">
      <div className=" border-r-4 border-red-600 ">{divs}</div>
    </div>
  );
};

export default Tab;
