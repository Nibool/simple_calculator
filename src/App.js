import { useState, createElement } from "react";
import logo from './logo.svg';
import './App.css';

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

  return createElement(
    "div",
    { className: "calculator w-72 mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col items-center" },
    createElement("div", { className: "display mb-4 p-4 text-right text-2xl bg-gray-900 rounded w-full" }, input),
    createElement(
      "div",
      { className: "button-grid grid grid-cols-4 gap-2 w-full" },
      ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) =>
        createElement(
          "button",
          {
            key: char,
            className: `p-4 text-xl rounded bg-gray-700 hover:bg-gray-600 ${["/", "*", "-", "+", "="].includes(char) ? "operator bg-orange-500 hover:bg-orange-400" : ""}`,
            onClick: () => (char === "=" ? handleCalculate() : handleClick(char)),
          },
          char
        )
      ),
      createElement(
        "button",
        {
          className: "clear col-span-4 p-4 text-xl bg-red-600 rounded hover:bg-red-500 w-full",
          onClick: handleClear,
        },
        "C"
      )
    )
  );
};

export default App;
