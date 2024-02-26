"use client";
import Tab from "../../components/Tab";
import List from "../../components/List";
import { AlignJustifyIcon } from "lucide-react";

import React, { useState } from "react";

const Homepage = () => {
  const [sideBar, setSideBar] = React.useState<boolean>(false);

  const handleIconClick = () => {
    setSideBar(!sideBar);
  };

  const [tabnum, setTabnum] = useState(0);

  return (
    <div>
      {/* <h1>{tabnum}</h1> */}
      <div className="w-screen h-24 bg-slate-800">
        <div
          className="text-white flex items-center justify-start cursor-pointer py-10 pl-5 w-20"
          onClick={handleIconClick}
        >
          <AlignJustifyIcon />
        </div>
      </div>
      <div className="flex">
        <div className={`${sideBar ? "hidden" : "md:basis-2/12 basis-5/12"}`}>
          <Tab setTabnum={setTabnum} />
        </div>
        <div className=" basis-full text-black">
          <List tabnum={tabnum} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

// test
