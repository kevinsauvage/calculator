import { formatEval } from "../utils";

const setCharAtIndex = (string: string, index: number, char: string) =>
  string.substring(0, index) + char + string.substring(index + 1);

const isEndingWithOperation = (string: string) =>
  ["*", "/", "+", "-"].includes(string.slice(-1));

export const handleAddNumber = (state: any, action: any) => {
  const returnedState = {
    ...state,
    currentOperand: state.currentOperand + action.payload,
    history: state.history + action.payload,
  };

  returnedState.result = eval(formatEval(returnedState.history));

  return returnedState;
};

export const handleAddDecimal = (state: any, action: any) => {
  if (state.currentOperand.includes(".")) {
    return state;
  }

  return {
    ...state,
    currentOperand: state.currentOperand + action.payload,
    history: state.history + action.payload,
  };
};

export const handleAddOperation = (state: any, action: any) => {
  // Check if the state meets any of the specified conditions for early return
  if (
    (!state.result &&
      // Condition 1: No history, current operand empty, and next operation is '*' or '/'
      !state.history &&
      ["*", "/"].includes(action.payload) &&
      !state.currentOperand) ||
    // Condition 2: History is '+' or '-', next operation is '*' or '/', and current operand empty
    (["+", "-"].includes(state.history) &&
      ["*", "/"].includes(action.payload) &&
      !state.currentOperand)
  ) {
    // Early return without making any changes to the state
    return state;
  }

  const returnedState = {
    ...state,
    operation: action.payload,
    previousOperand: state.currentOperand,
    currentOperand: "",
  };

  if (state.history === ".") {
    returnedState.history = `0${action.payload}`;
  } else {
    const history = isEndingWithOperation(state.history)
      ? setCharAtIndex(state.history, state.history.length - 1, action.payload)
      : state.history + action.payload;
    returnedState.history = history;
  }

  if (state.result && !state.currentOperand) {
    returnedState.history = state.result + action.payload;
    return returnedState;
  }

  return returnedState;
};

export const handleCalculate = (state: any) => {
  try {
    const result = eval(formatEval(state.history));
    return {
      ...state,
      result,
      history: "",
      currentOperand: "",
      previousOperand: result,
      operation: "",
    };
  } catch (e) {
    return {
      ...state,
      result: "Error",
      currentNumber: "",
      operation: "",
      currentOperator: "",
    };
  }
};

export const handleClear = (state: any) => ({
  ...state,
  currentOperand: "",
  previousOperand: "",
  operation: "",
  history: "",
  result: 0,
});

export const handleDelete = (state: any) => {
  const currentOperand = state.currentOperand.slice(0, -1);
  const history = state.history.slice(0, -1);
  const result = eval(formatEval(history));

  return {
    ...state,
    currentOperand,
    previousOperand: "",
    operation: "",
    history,
    result,
  };
};
