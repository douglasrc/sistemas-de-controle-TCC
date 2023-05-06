import Sidebar from "./components/Pages/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
