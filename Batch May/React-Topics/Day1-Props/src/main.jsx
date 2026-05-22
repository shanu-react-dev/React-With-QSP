import ReactDOM from "react-dom/client";
import App from "./App";
//React DOM
//? React DOM also referred as Virtual DOM and it helps us to update the content dynamically in the UI. We are getting it from react-dom library.
//? It behaves like a bridge between virtual DOM and real DOM
// console.log(ReactDOM);
let data = ReactDOM.createRoot(document.getElementById("root"));
data.render(<App></App>);
