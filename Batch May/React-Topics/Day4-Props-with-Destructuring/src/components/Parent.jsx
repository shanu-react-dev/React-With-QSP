// import Child from "./Child";

// const Parent = () => {
//   let userDetails = {
//     userName: "Shanu",
//     age: 29,
//     gender: "female",
//     isMarried: true,
//   };
//   return (
//     <div>
//       <h1>Hii this is Parent</h1>
//       {/* <Child data={userDetails}></Child> */}
//       <Child {...userDetails}></Child>
//     </div>
//   );
// };
// export default Parent;

import Child from "./Child";

function Parent() {
  let userData = {
    userName: "Sundari",
    age: 22,
    isMarried: false,
    kids: null,
    salary: undefined,
  };
  //   console.log({ ...userData });
  return (
    <div>
      <h1>Parent Component</h1>
      {/* <Child data={userData}></Child> */}
      <Child {...userData}></Child>
    </div>
  );
}
export default Parent;
