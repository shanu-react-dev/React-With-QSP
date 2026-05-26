// const ChildComp = (data) => {
//   console.log(data);
//   return (
//     <div>
//       <h1>i am child</h1>
//       <h1>I received amout from my parent: {data.amount}</h1>
//     </div>
//   );
// };

function ChildComp(data) {
  return (
    <div>
      <h1></h1>
      <h1>I received amout from my parent: {data.amount}</h1>
    </div>
  );
}
export default ChildComp;
