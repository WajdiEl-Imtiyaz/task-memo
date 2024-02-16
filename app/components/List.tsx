import React, { createRef, useState } from "react";

const List = () => {
  const divs = [];
  const refs = Array.from({ length: 20 }, () => createRef<HTMLInputElement>());
  const [isChecked, setIsChecked] = useState(Array(20).fill(false));
  const [isTyping, setIsTyping] = useState(Array(20).fill(false));

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < refs.length) {
        refs[nextIndex]?.current?.focus();
      }
    }
  };

  const handleCheck = (index: number) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = !newIsChecked[index];
    setIsChecked(newIsChecked);
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newIsTyping = [...isTyping];
    newIsTyping[index] = !!event.target.value;
    setIsTyping(newIsTyping);
  };

  for (let i = 0; i < 20; i++) {
    divs.push(
      <div
        key={i}
        className={`h-12 border-b border-slate-800 flex items-center justify-start pl-2 ${
          isChecked[i] ? "line-through" : ""
        }`}
      >
        {isTyping[i] && (
          <input
            type="checkbox"
            onChange={() => handleCheck(i)}
            checked={isChecked[i]}
          />
        )}
        <input
          type="text"
          onKeyDown={(event) => handleKeyDown(event, i)}
          onChange={(event) => handleInput(event, i)}
          ref={refs[i]}
          className="pl-2 h-10 w-full outline-none"
        />
      </div>
    );
  }

  return <div>{divs}</div>;
};

export default List;
