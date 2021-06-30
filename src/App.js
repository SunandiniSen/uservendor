import "./App.css";
import { Createtable } from "./components/Createtable";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">Intuit Design Problem</header>
      <div className="user-view">
        <h3>Users</h3>
        <div>{Createtable(Table, "users")}</div>
      </div>
      <div className="vendor-view">
        <h3>Vendors</h3>
        <div>{Createtable(Table, "vendors")}</div>
      </div>
    </div>
  );
}

export default App;
