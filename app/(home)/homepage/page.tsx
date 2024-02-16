"use client";
import Tab from "../../components/Tab";
import List from "../../components/List";

import React from "react";

const homepage = () => {
  return (
    <div className="flex">
      <div>
        <Tab />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default homepage;
