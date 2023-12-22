import {
  handleAddNumber,
  handleAddOperation,
  handleCalculate,
  handleClear,
  handleDelete,
  handleAddDecimal,
} from "./CalculatorActions";

const calculatorReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_NUMBER": {
      return handleAddNumber(state, action);
    }

    case "ADD_OPERATION": {
      return handleAddOperation(state, action);
    }

    case "ADD_DECIMAL": {
      return handleAddDecimal(state, action);
    }

    case "CALCULATE": {
      return handleCalculate(state);
    }

    case "CLEAR": {
      return handleClear(state);
    }

    case "DELETE": {
      return handleDelete(state);
    }

    default:
      return state;
  }
};

export default calculatorReducer;
