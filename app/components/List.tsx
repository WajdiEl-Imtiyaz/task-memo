import React, { useState } from "react";
import TaskItem, { InputValueProps } from "../components/TaskItem";

interface ListProps {
  tabnum: number;
}

const List: React.FC<ListProps> = ({ tabnum }) => {
  const [mylist, setMyList] = useState<InputValueProps[]>(
    Array(1).fill({ inputValues: "", isChecked: false })
  );

  const list1 = Array.from({ length: 20 }, (_, index) => (
    <TaskItem tabnum={0} index={1} key={index} data={mylist} />
  ));

  const list2 = Array.from({ length: 20 }, (_, index) => (
    <TaskItem tabnum={1} index={2} key={index} data={mylist} />
  ));

  return <div>{tabnum === 0 ? list1 : list2}</div>;
};

export default List;
