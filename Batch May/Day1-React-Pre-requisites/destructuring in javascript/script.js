console.log("Hi today is destructuring classs");

//! Destructuring with array
//? Destructuring in JavaScript means copying the values of an array or the properties of an object to a variable.
//? Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.
//todo This is an ES6 feature

let arr = ["Dodge", "mahesh", "Siva", "Dhanush"];
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// let [firstItem, secItem, thirdItem, fourthItem] = arr;
// console.log(firstItem);
// console.log(secItem);

let [, , myItem, nextItem] = arr;
console.log(myItem);
console.log(nextItem);

let str = "Shanu";
let [firstLetter] = str;
console.log(firstLetter);

let users = [
  { username: "Sanu", age: 23, gender: "male" },
  { username: "Sailaja", age: 22, gender: "female" },
  { username: "Sumit", age: 26, gender: "male" },
  { username: "Sulabh", age: 23, gender: "male" },
  { username: "Sharanya", age: 25, gender: "female" },
  { username: "Srimanth", age: 27, gender: "male" },
];

// console.log(users[0].username);
// let [user1, user2, user3, user4, user5, user6] = users;
// console.log(user1);
// console.log(user2);
//! Object Destructuring
// let obj = {
//   username: "Sanu",
//   age: 23,
//   gender: "male",
// };

// let { username, age, gender } = obj;
// console.log(username, age, gender);

// let { gender } = obj;
// console.log(gender);

let res = users.filter((ele) => {
  //   console.log(ele);
  let { gender } = ele;
  return gender === "female" ? ele : "";
});

console.log(res);
