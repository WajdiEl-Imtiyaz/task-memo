"use client";
import Tab from "../../components/Tab";
import List from "../../components/List";

import React from "react";

const homepage = () => {
  return (
    <div className="flex">
      <div className="w-[200px]">
        <Tab />
      </div>
      <div className="w-screen">
        <List />
      </div>
    </div>
  );
};

export default homepage;
