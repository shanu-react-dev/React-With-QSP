import Child from "./Child";

const Parent = () => {
  let userData = {
    uName: "Thala",
    age: 47,
    gender: "Male",
    skills: ["Java", "JavaScript", "React"],
    address: {
      street: "4th cross 2nd main",
      locality: "Lic Colony",
      pin: 600075,
    },
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* <Child data={userData}></Child> */}
      <Child data="Shanu"></Child>
      {/*//! Props with spread Operator */}
      {/* <Child {...userData}></Child> */}
    </div>
  );
};
export default Parent;
