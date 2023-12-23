const isEndingWithOperation = (string: string) =>
  ["*", "/", "+", "-", "."].includes(string.slice(-1));

const formatEval = (operation: string) => {
  if (!operation) return "";
  if (isEndingWithOperation(operation)) return operation.slice(0, -1);
  return operation.replace(/^0+/, "");
};

export const getResult = (string: string) => {
  const cleanedString = formatEval(string);
  const evaluated = eval(cleanedString);
  return evaluated && evaluated.toString().length > 7
    ? Number(evaluated).toExponential(7)
    : evaluated;
};

export const setCharAtIndex = (string: string, index: number, char: string) =>
  string.substring(0, index) + char + string.substring(index + 1);
