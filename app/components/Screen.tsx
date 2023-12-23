"use client";

import { useCalculator } from "../contexts/useCalculatorContext";
import { useCalculatorType } from "../types";

const Screen = () => {
  const { calculatorState }: useCalculatorType = useCalculator();
  const { result, history } = calculatorState || {};

  return (
    <div className="bg-white bg-opacity-20	backdrop-blur-xl p-8 flex flex-col items-end justify-center">
      <div className="text-5xl text-white font-semibold leading-relaxed">
        {result || 0}
      </div>
      <div className="text-2xl text-white">{history || ""}</div>
    </div>
  );
};

export default Screen;
