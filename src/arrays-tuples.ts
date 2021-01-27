/* eslint-disable */

//? Arrays
//* Setting one type
const onlyStrings: string[] = [];
onlyStrings.push("Carlos");

//* Setting two or more types
const numbersAndStrings: (string | number)[] = [];
numbersAndStrings.push(21);

const firstItemFromOnlyStrings = onlyStrings[0];


//? Tuples
const stringAndANumber: [string, number] = ["here's a string", 21];
const firstItemFromStringAndANumber = stringAndANumber[0];