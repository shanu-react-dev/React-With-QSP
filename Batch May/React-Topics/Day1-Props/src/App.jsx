import Newcomp from "./components/newcomp";

function App() {
  console.log("Hii I am Amar");
  let a = "Shanu";
  let b = 23;
  let isMarried = true;
  let isdead = true;
  let kids = null;
  return (
    <div>
      <h2>Hey dabba this is React Don't take it lightly</h2>
      <h1>Hey, how are you matcha</h1>
      {/* <Newcomp></Newcomp> */}
      {/* {Newcomp("Shanu")} */}
      {/* <Newcomp username="Shanu" age={23}></Newcomp> */}
      <Newcomp
        name={a}
        age={b}
        isMarried={isMarried}
        isdead={isdead}
        kids={kids}
      ></Newcomp>
    </div>
  );
}

export default App;
