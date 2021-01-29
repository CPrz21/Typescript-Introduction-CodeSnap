/* eslint-disable */

const multiply = ( a: number | string, b: number | string): string => {
  const aNumber = typeof a === "string" ? parseInt(a, 10) : a;
  const bNumber = typeof b === "string" ? parseInt(b, 10) : b

  return String(aNumber * bNumber);
}

multiply(2, 2);
multiply("10", 5);