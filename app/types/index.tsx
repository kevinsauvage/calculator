export type useCalculatorType = {
  calculatorState: {
    result: number;
    operation: string;
    currentOperand: string;
    previousOperand: string;
    history: string;
  };
  dispatch: any;
};

export type calculatorStateType = {
  result: number;
  operation: string;
  currentOperand: string;
  previousOperand: string;
  history: string;
};

export type CalculatorAction =
  | { type: "ADD_NUMBER"; payload: string }
  | { type: "ADD_OPERATION"; payload: string }
  | { type: "ADD_DECIMAL" }
  | { type: "CALCULATE" }
  | { type: "CLEAR" }
  | { type: "DELETE" };

export type keyboardItemType = {
  name: string | JSX.Element;
  styles: string;
  action:
    | "ADD_NUMBER"
    | "ADD_OPERATION"
    | "CALCULATE"
    | "CLEAR"
    | "DELETE"
    | "ADD_DECIMAL";
  payload: string;
  ariaLabel: string;
};
