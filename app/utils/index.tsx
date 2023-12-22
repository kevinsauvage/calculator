export const formatEval = (operation: string) => {
  if (!operation) return "";
  const lastChar = operation[operation.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) return operation.slice(0, -1);

  return operation;
};
