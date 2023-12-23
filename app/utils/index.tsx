export const formatEval = (operation: string) => {
  if (!operation) return "";
  if (isEndingWithOperation(operation)) return operation.slice(0, -1);
  return operation;
};

export const getResult = (string: string) => {
  const cleanedString = formatEval(string);
  const evaluated = eval(cleanedString);
  return Number(evaluated.toExponential());
};

export const setCharAtIndex = (string: string, index: number, char: string) =>
  string.substring(0, index) + char + string.substring(index + 1);

export const isEndingWithOperation = (string: string) =>
  ["*", "/", "+", "-"].includes(string.slice(-1));
