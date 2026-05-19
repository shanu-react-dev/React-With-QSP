import { useState } from "react";

function App() {
  // let a = 7;
  // let b = 9;
  console.log("hii this is Counter");
  let [state, setState] = useState(0);

  console.log("Hey Dabba How are you!!");
  function handleClick() {
    setState(state + 1);
  }

  return (
    <div>
      {/* <h1>Hii this is Shanu</h1>
      <h3>Hii this is React</h3>
      <label htmlFor="username" className="mylabel">
        Enter Username
      </label>
      <input type="text" id="username" />

      <h1>{a}</h1>
      for(let i = 0; i<10; i++){} */}

      <h1>{state}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
