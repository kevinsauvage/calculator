"use client";

import { useCalculator } from "../contexts/useCalculatorContext";
import { useCalculatorType } from "../types";

const Screen = () => {
  const { calculatorState }: useCalculatorType = useCalculator();
  const { result, history } = calculatorState || {};

  return (
    <div className="bg-white bg-opacity-20	backdrop-blur-xl p-8 flex flex-col items-end justify-center">
      <div className="text-4xl text-white font-semibold leading-relaxed mb-2">
        {result || 0}
      </div>
      <div className="text-2xl text-white">{history || ""}</div>
    </div>
  );
};

export default Screen;
