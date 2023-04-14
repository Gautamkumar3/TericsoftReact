import "./App.css";
import HeaderMenuBar from "./component/HeaderMenuBar";
import data from "./db.json";
const api = "https://tericsoft-jdng.onrender.com/";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <HeaderMenuBar/>
    </div>
  );
}

export default App;
