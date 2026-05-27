//! Destructuring with props
// const Child = ({ dataFromParent: { uName, age, gender } }) => {
//   //! First way to access the props data
//   //   console.log(props);
//   //   console.log(props.dataFromParent);
//   //   console.log(props.dataFromParent.uName);
//   //! 2nd way to access the props data
//   //   let { dataFromParent } = props;
//   //   console.log(dataFromParent);
//   //   let { uName, age, gender } = dataFromParent;
//   //   console.log(uName);
//   //! 3rd way to access the props data
//   console.log(uName);
//   console.log(age);
//   console.log(gender);

//   return (
//     <div>
//       <h1>Child</h1>
//       <h1>User name: {uName}</h1>
//       <h1>Gender: {gender}</h1>
//       <h1>Age: {age}</h1>
//     </div>
//   );
// };
// export default Child;

//! Props with spread Operator
const Child = (props) => {
  //   console.log(props);
  //   let { uName, age, gender } = props;
  //   uName = "Shanu";
  //   console.log(props);
  //   props.data = "Rahul";
  return (
    <div>
      <h1>Child Component</h1>
      {/* <h1>User name: {uName}</h1>
      <h1>Gender: {gender}</h1>
      <h1>Age: {age}</h1> */}
    </div>
  );
};
export default Child;
