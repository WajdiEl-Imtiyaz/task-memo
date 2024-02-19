const Tab = () => {
  const divs = [];
  for (let i = 0; i < 20; i++) {
    divs.push(
      <div
        key={i}
        className={`h-12 border-b border-slate-800 flex items-center justify-center ${
          i < 5 ? "editable" : ""
        }`}
      ></div>
    );
  }

  return (
    <div className="relative">
      <div className=" border-r-4 border-red-600 ">{divs}</div>
    </div>
  );
};

export default Tab;
