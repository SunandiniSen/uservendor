import logo from "./logo.svg";
import "./App.css";
import { Createtable } from "./components/Createtable";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">Display table</header>
      {Createtable(Table, "users")}
      {Createtable(Table, "vendors")}
    </div>
  );
}

export default App;
