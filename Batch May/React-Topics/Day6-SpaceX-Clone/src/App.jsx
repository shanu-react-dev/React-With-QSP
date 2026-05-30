import Navbar from "./components/Navbar";
import PageIterator from "./components/PageIterator/PageIterator";
import FirstPage from "./components/pages/FirstPage";
import "./style.css";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FirstPage></FirstPage>
      <PageIterator></PageIterator>
    </div>
  );
};
export default App;
