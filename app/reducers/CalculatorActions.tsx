import { getResult, setCharAtIndex } from "../utils";

export const handleAddNumber = (state: any, action: any) => {
  const history = state.history + action.payload;
  const currentOperand = state.currentOperand + action.payload;

  try {
    return {
      ...state,
      currentOperand,
      history,
      result: getResult(history),
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

export const handleAddDecimal = (state: any, action: any) => {
  if (state.currentOperand.includes(".")) return state;
  if (!state.currentOperand && ["/", "*", "+", "-"].includes(state.history)) {
    return state;
  }
  return {
    ...state,
    currentOperand: state.currentOperand + action.payload,
    history: state.history + action.payload,
  };
};

export const handleAddOperation = (state: any, action: any) => {
  if (
    state.currentOperand.endsWith(".") ||
    (!state.currentOperand &&
      !state.history &&
      !state.result &&
      action.payload !== "-") ||
    (!state.currentOperand && ["/", "*", "+", "-"].includes(state.history))
  ) {
    return state;
  }

  if (!state.currentOperand && state.history && !state.result) {
    const history = setCharAtIndex(
      state.history,
      state.history.length - 1,
      action.payload
    );

    return {
      ...state,
      history,
      operation: action.payload,
    };
  }

  const returnedState = {
    ...state,
    operation: action.payload,
    currentOperand: "",
    history: state.history + action.payload,
  };

  if (!state.currentOperand && state.result) {
    returnedState.history = state.result + action.payload;
  }

  return returnedState;
};

export const handleCalculate = (state: any) => {
  if (state.operation) return state;
  try {
    const result = getResult(state.history);
    return {
      ...state,
      result,
      history: "",
      currentOperand: "",
      operation: "",
    };
  } catch (e) {
    return {
      ...state,
      result: "Error",
      operation: "",
      currentOperand: "",
    };
  }
};

export const handleClear = (state: any) => ({
  ...state,
  currentOperand: "",
  operation: "",
  history: "",
  result: 0,
});

export const handleDelete = (state: any) => {
  const currentOperand = state.currentOperand.slice(0, -1);
  const history = state.history.slice(0, -1);
  const result = history ? getResult(history) : 0;

  return {
    ...state,
    currentOperand,
    operation: "",
    history,
    result,
  };
};
