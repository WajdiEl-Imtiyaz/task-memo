interface TabProps {
  setTabnum: (num: number) => void;
}

const Tab: React.FC<TabProps> = ({ setTabnum }) => {
  const handleButtonClick = (index: number) => {
    setTabnum(index);
  };

  return (
    <div className="border-r-4 border-red-600">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="h-12 border-b border-slate-800 flex items-center justify-center"
        >
          {i < 2 && (
            <button onClick={() => handleButtonClick(i)}>List {i + 1}</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tab;
