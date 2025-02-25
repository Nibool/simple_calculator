import { useState } from "react";
import './App.css';

const Button = ({ char, onClick, className }) => (
  <button
    className={`p-4 text-xl rounded bg-gray-700 hover:bg-gray-600 ${className}`}
    onClick={() => onClick(char)}
  >
    {char}
  </button>
);

const Display = ({ value }) => (
  <div className="display mb-4 p-4 text-right text-2xl bg-gray-900 rounded w-full">
    {value}
  </div>
);

const App = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    setInput((prev) => (prev === "0" ? String(value) : prev + value));
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator w-72 mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col items-center">
      <Display value={input} />
      <div className="button-grid grid grid-cols-4 gap-2 w-full">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <Button
            key={char}
            char={char}
            onClick={char === "=" ? handleCalculate : handleClick}
            className={"/" === char || "*" === char || "-" === char || "+" === char || "=" === char ? "operator bg-orange-500 hover:bg-orange-400" : ""}
          />
        ))}
        <Button
          char="C"
          onClick={handleClear}
          className="clear col-span-4 bg-red-600 hover:bg-red-500 w-full"
        />
      </div>
    </div>
  );
};

export default App;
