//! Spread and Rest
//? Spread is an operator which is used to spread the values or data or elements either from an objext or an array.

//? Rest is a parameter which collects the data in a single array that is nothing but a rest parameter.

//! Rest Parameter
function greetUsers(...users) {
  //   console.log("Good Morning ", users);
  console.log(arguments); // Array like object which collects the entire passed arguments for a function.
  console.log(users);
  //   arguments.map((element) => {
  //     console.log(`Good Morning ${element}`);
  //   });
  users.forEach((ele) => {
    //! string interpolation | Template literals(``)
    //? It helps to embed variables or expressions directly into the string using the ${expression} syntax.
    console.log(`Good Morning ${ele}`);
  });
}

greetUsers("Sundari", "shanu");

//! Rest parameter with array
let arr = ["Orange", "Grapes", "Papaya", "Peach", "Pear", "Apricot", "Walnut"];
let [firstFruit, secFruit, ...elements] = arr;
console.log(firstFruit);
console.log(secFruit);
console.log(elements);

//! Spread Operator
let arr1 = ["Mercury", "venus", "Earth", "Mars"];
let arr2 = ["Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
// arr1.push(arr2);
// console.log(arr1);
let res = arr1.concat(arr2);
console.log(res);
let mergedArr = [...arr1, ...arr2];
// for (let i = 0; i < arr1.length; i++) {
//   mergedArr.push(arr1[i]);

// }
// for (let j = 0; j < arr2.length; j++) {
//   mergedArr.push(arr2[j]);
// }
console.log(mergedArr);
// console.log(arr1);
// console.log(arr2);

let userData = {
  userName: "Sharanya",
  password: 12345,
  age: 23,
  gender: "female",
};
function accessObjectProperty(obj) {
  let { userName, age, ...data } = obj;
  console.log(userName);
  console.log(age);
  console.log(data);
}
accessObjectProperty(userData);

let arrayElmenets = (data) => {
  console.log(data);
};
arrayElmenets(...arr1); //("Mercury", "venus", "Earth", "Mars")

function factorDemo(factor, ...rest) {
  console.log(factor);
  console.log(rest);
  let res = rest.map((ele) => ele * factor);
  console.log(res);
}
factorDemo(2, 2, 3, 4, 6);
