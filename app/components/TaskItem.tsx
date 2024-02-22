import { useState, createRef, useEffect } from "react";

import React from "react";

export interface InputValueProps {
  inputValues: string;
  isChecked: boolean;
}

const TaskItem: React.FC<{
  tabnum: number;
  index: number;
  data: InputValueProps[];
}> = ({ index, data }) => {
  // const refs1 = Array.from({ length: 1 }, () => createRef<HTMLInputElement>());
  const [rowProps, setrowProps] = useState<InputValueProps[]>(data);
  //   const [inputValues, setInputValues] = useState(() => {
  //     const saved = localStorage.getItem("inputValues" + tabnum);
  //     return saved ? JSON.parse(saved) : Array(20).fill("");
  //   });
  //   const [isTyping, setIsTyping] = useState(() => {
  //     const saved = localStorage.getItem("isTyping" + tabnum);
  //     return saved ? JSON.parse(saved) : Array(20).fill(false);
  //   });

  //   const [isChecked, setIsChecked] = useState(() => {
  //     const saved = localStorage.getItem("isChecked" + tabnum);
  //     return saved ? JSON.parse(saved) : Array(20).fill(false);
  //   });

  //   useEffect(() => {
  //     localStorage.setItem("isChecked" + tabnum, JSON.stringify(isChecked));
  //     localStorage.setItem("isTyping" + tabnum, JSON.stringify(isTyping));
  //     localStorage.setItem("inputValues" + tabnum, JSON.stringify(inputValues));
  //   }, [tabnum, isChecked, isTyping, inputValues]);

  // const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     const nextIndex = index + 1;
  //     if (nextIndex < refs1.length) {
  //       refs1[nextIndex]?.current?.focus();
  //     }
  //   }
  // };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInputValues = [...rowProps];
    if (!newInputValues[index]) {
      newInputValues[index] = { inputValues: "", isChecked: false };
    }
    newInputValues[index].inputValues = event.target.value;
    setrowProps(newInputValues);
  };

  // const handleCheck = (index: number) => {
  //   const newIsChecked = [...rowProps];
  //   newIsChecked[index].isChecked = !newIsChecked[index].isChecked;
  //   setrowProps(newIsChecked);
  // };

  return (
    <div
      className={`h-12 border-b border-slate-800 flex items-center justify-start pl-2`}
    >
      {/* {isTyping[index] && (
        <input
          type="checkbox"
          onChange={() => handleCheck(index)}
          checked={isChecked[index]}
        />
      )} */}

      <input
        type="text"
        // onKeyDown={(event) => handleKeyDown(event, index)}
        onChange={(event) => handleInput(event, index)}
        // ref={refs1[index]}
        className="pl-2 h-10 w-full outline-none"
        value={rowProps[index]?.inputValues || ""}
      />
    </div>
  );
};

export default TaskItem;
