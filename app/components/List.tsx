import React, { createRef, useState } from "react";

const List = () => {
  const divs = [];
  const refs = Array.from({ length: 20 }, () => createRef<HTMLDivElement>());
  const [isTyping, setIsTyping] = useState(Array(20).fill(false));
  const [isChecked, setIsChecked] = useState(Array(20).fill(false));

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < refs.length) {
        refs[nextIndex]?.current?.focus();
      }
    }
  };

  const handleInput = (
    event: React.FormEvent<HTMLDivElement>,
    index: number
  ) => {
    const newIsTyping = [...isTyping];
    newIsTyping[index] = !!event.currentTarget.textContent;
    setIsTyping(newIsTyping);
  };

  const handleCheck = (index: number) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = !newIsChecked[index];
    setIsChecked(newIsChecked);
  };

  for (let i = 0; i < 20; i++) {
    divs.push(
      <div
        key={i}
        ref={refs[i]}
        className={`w-full md:w-full h-12 border-b border-slate-800 whitespace-nowrap overflow-auto flex items-center justify-start pl-2 ${
          isChecked[i] ? "line-through" : ""
        }`}
        contentEditable
        onKeyDown={(event) => handleKeyDown(event, i)}
        onInput={(event) => handleInput(event, i)}
      >
        {isTyping[i] && (
          <input
            type="checkbox"
            className="mr-2"
            checked={isChecked[i]}
            onChange={() => handleCheck(i)}
          />
        )}
      </div>
    );
  }

  return <div>{divs}</div>;
};

export default List;
