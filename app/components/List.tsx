import React, { createRef, useState, useEffect } from "react";
import TaskItem, { InputValueProps } from "./TaskItem";

interface ListProps {
  tabnum: number;
}

const List: React.FC<ListProps> = ({ tabnum }) => {
  const [mylist1, setMyList1] = useState<InputValueProps[]>(
    Array(1).fill({
      inputValues: "",
      isChecked: false,
    })
  );

  const [mylist2, setMyList2] = useState<InputValueProps[]>(
    Array(1).fill({
      inputValues: "",
      isChecked: false,
    })
  );

  const list1 = Array.from({ length: 10 }, (_, index) => (
    <>
      {tabnum}
      <TaskItem tabnum={tabnum} index={index} key={index} />
    </>
  ));

  return (
    <div>
      {tabnum === 0 ? (
        <TaskItem tabnum={0} index={1} data={mylist1} />
      ) : (
        <TaskItem tabnum={1} index={2} data={mylist2} />
      )}
    </div>
  );
};

export default List;
