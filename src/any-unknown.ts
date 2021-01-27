/* eslint-disable */
//* We lose all safety types with those types

//* ANY
let myAnyVariable: any;

myAnyVariable = "Carlos";
myAnyVariable = 21;
myAnyVariable = true;
myAnyVariable = {
  lastName: "Pérez"
}

//! With any we have to care this cases
//! 1- ANY allow us to access like the variable has properties
const property = myAnyVariable.doesNotExist;

//! 2- ANY allow us to call funtions like the variable has it
myAnyVariable.sayHello();


//* UNKNOWN
let myUnknownVariable: unknown;

myUnknownVariable = "Carlos";
myUnknownVariable = 21;
myUnknownVariable = true;
myUnknownVariable = {
  lastName: "Pérez"
}

//? 1- Unknown does not allow us to access like the variable has properties
// const unknownProperty = myUnknownVariable.doesNotExist;

//? 2- Unknown does not allow us to call funtions like the variable has it
// myAnyVariable.sayHello();

//* We have to use UNKNOWN instead of ANY because it offer a slight amount of safety