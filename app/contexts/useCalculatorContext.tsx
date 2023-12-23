import { useContext } from "react";
import { CalculatorContext, CalculatorContextProps } from "./CalculatorContext";

export const useCalculator = (): CalculatorContextProps => {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
};
