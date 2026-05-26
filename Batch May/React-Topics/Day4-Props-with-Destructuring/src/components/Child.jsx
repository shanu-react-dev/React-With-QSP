// const Child = (props) => {
//   console.log(props);
//   let { data } = props;
//   console.log(data);
//   let { userName, age, gender, isMarried } = data;
//   console.log(userName);
//   return (
//     <div>
//       <h1>Child</h1>
//       <h1>{userName}</h1>
//     </div>
//   );
// };

// export default Child;

// const Child = ({ userName, age, gender, isMarried }) => {
//   console.log(gender);
//   console.log(isMarried);
//   console.log(userName);
//   console.log(age);
//   //   console.log(props);
//   return (
//     <div>
//       <h1></h1>
//     </div>
//   );
// };
// export default Child;

// const Child = ({ data: { userName, age, isMarried, kids, salary } }) => {
//   //   console.log(props);
//   //   let {
//   //     data: { userName, age, isMarried, kids, salary },
//   //   } = props;
//   console.log(userName, age, isMarried, kids, salary);
//   return (
//     <div>
//       <h1>Child Component</h1>
//     </div>
//   );
// };

// export default Child;

const Child = ({ userName, age, isMarried, kids, salary }) => {
  console.log(userName, age, isMarried, kids, salary);
  return (
    <div>
      <h1>Child Component</h1>
      <h1>Name: {userName}</h1>
      <h1>Age: {age}</h1>
      <h1>isMarried: {isMarried ? "Married" : "Unmarried"}</h1>
      <h1>Kids: {kids ? kids : "There is no kids"}</h1>
      <h1>Salary: {salary === undefined ? "undefined" : salary}</h1>
    </div>
  );
};

export default Child;
