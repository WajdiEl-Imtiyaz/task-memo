import React, { useState, useEffect } from "react";

export interface InputValueProps {
  inputValues: string;
  isChecked: boolean;
}

const TaskItem: React.FC<{
  tabnum: number;
  index: number;
  data: InputValueProps[];
}> = ({ index, data }) => {
  // Ensure that the data array has a corresponding entry for the specified index
  const [rowProps, setRowProps] = useState<InputValueProps[]>(() => {
    const initialData = [...data];
    while (initialData.length <= index) {
      initialData.push({ inputValues: "", isChecked: false });
    }
    return initialData;
  });

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInputValues = [...rowProps];
    if (!newInputValues[index]) {
      newInputValues[index] = { inputValues: "", isChecked: false };
    }

    if (event.target.type === "text") {
      newInputValues[index].inputValues = event.target.value;
    } else if (event.target.type === "checkbox") {
      newInputValues[index].isChecked = event.target.checked;
    }

    setRowProps(newInputValues);
  };

  return (
    <div
      className={`h-12 border-b border-slate-800 flex items-center justify-start pl-2`}
    >
      {rowProps[index]?.inputValues && (
        <input
          type="checkbox"
          checked={rowProps[index]?.isChecked || false}
          onChange={(event) => handleInput(event, index)}
        />
      )}

      <input
        type="text"
        onChange={(event) => handleInput(event, index)}
        className="pl-2 h-10 w-full outline-none"
        value={rowProps[index]?.inputValues || ""}
      />
    </div>
  );
};

export default TaskItem;
