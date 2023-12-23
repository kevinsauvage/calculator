"use client";

import { createContext, useReducer, ReactNode, Dispatch } from "react";
import calculatorReducer from "@/app/reducers/CalculatorReducer";
import { CalculatorAction, calculatorStateType } from "../types";

interface CalculatorProviderProps {
  children: ReactNode;
}

export interface CalculatorContextProps {
  calculatorState: calculatorStateType;
  dispatch: Dispatch<CalculatorAction>;
}

export const CalculatorContext = createContext<
  CalculatorContextProps | undefined
>(undefined);

const CalculatorProvider: React.FC<CalculatorProviderProps> = ({
  children,
}) => {
  const [calculatorState, dispatch] = useReducer(calculatorReducer, {
    result: 0,
    operation: "",
    currentOperand: "",
    history: "",
  });

  return (
    <CalculatorContext.Provider value={{ calculatorState, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
