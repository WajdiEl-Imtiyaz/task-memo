"use client";

import React from "react";
import Accounts from "../components/Accounts";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen">
      <div className="w-60 h-60 bg-yellow-200 transform -translate-y-44 flex justify-center items-center">
        <div className="font-bold text-4xl text-justify">
          <p>Task</p>
          <p>Memo</p>
        </div>
      </div>
      <div>
        <Accounts />
      </div>
    </div>
  );
}
