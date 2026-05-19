//! Functions:
//? Functions in JavaScript is a block of reusable block of code which is used to perform some specific task. We can create a function using function keyword in JavaScript. There are several functions in JS such as

//! named function
//? Function declaration Function Definition
/*function printMyName() {
  console.log("Shanu");
}
printMyName(); // Function Invocation or function calling
*/
//! Anonymous Function
//? A function created without name is known as Anonymous Function. It will be used either passing as an argument or in an IIFE function.

//! IIFE Function
//? Immediately Invoked Function expression it is also known as IIFE function and it will be invoked or called as soon as it has been declared.
/**(function (userName, age) {
  console.log(`My Name is ${userName} and I am ${age} years old..`);
})("Shanu", 23); */

// console.log("--------------------------------------------------------");
//! IIFE with variables
/**let myIIFE = (function () {
  console.log("I am variable IIFE function");
  return "Sundario";
})();
console.log(`Returned value from myIIFE function: ${myIIFE}`); */

//! IIFE Function with named Function
/**(function myNamedFun() {
  console.log("Hii I am named IIFE Function");
})(); */

// myNamedFun(); //! myNamedFun is not defined

// function () {

// }

//! Arrow Function
//? It is a shorthand function used to create a function without function keyword. It helps to reduce the code. It was introduced in ES6 feature. It does not support this keyword.
/**let myArrow = () => console.log("Shanu");
myArrow();

let arrow2 = () => {
  console.log("I am inside a block");
  return "Shanu is a worst boy"; //Explicit return
};

let returnedVal = arrow2();
console.log(returnedVal + ` From an arrow function`);

let arrow3 = () => "Welcome to Shanu's class.."; // Implicit return
let returnedVal2 = arrow3();
console.log(returnedVal2 + " from arrow3 function"); */

//! HOF and Callback Function
/**
let myName = (receivedFun) => receivedFun();

myName(function () {
  console.log("I am a callback function");
});

function sumOfTwoNumbers(receivedFun) {
  receivedFun(7, 45);
}

function sum(a, b) {
  console.log("Sum of given number is: ", a + b);
}

sumOfTwoNumbers(sum);

 */
//? let userName = "Sundari";
//? console.log(userName);
//? let myName = userName;

//! Function Currying
//? In JavaScript, currying is a functional programming technique that transforms a function with multiple arguments into a sequence of nested functions, each taking a single argument.

/**
 * function Parent() {
  console.log("I am a parent function");
  function Child() {
    console.log("I am a child Function");
  }
  return Child;
}
 */

// let returnedVal = Parent();
// Child(); //! Child is not defined
// console.log(returnedVal);

// returnedVal();

// Parent()();
//! generator function
//? Generator functions are a special types of functions in JavaScript, introduced in ES6, that have the built-in capability to be paused and resumed allowing us to take control of the execution flow and generate multiple values.
/**
function* a() {
  yield 1;
  yield 2;
  yield 3;
}
let obj = a();
console.log(obj);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
 */
