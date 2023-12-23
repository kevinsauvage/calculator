"use client";

import { useCalculator } from "../contexts/useCalculatorContext";
import { keyboardItems } from "./keyboard.conf";

const Keyboard = () => {
  const { dispatch } = useCalculator();

  return (
    <div className="grid bg-white bg-opacity-30 grid-cols-4 gap-1 p-3.5">
      {keyboardItems.map((item, index) => (
        <button
          key={index}
          className={`flex items-center backdrop-blur-xl justify-center p-4 text-2xl font-bold text-white rounded-md bg-white  ${item.styles}`}
          onClick={() => dispatch({ type: item.action, payload: item.payload })}
          aria-label={item.ariaLabel}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
