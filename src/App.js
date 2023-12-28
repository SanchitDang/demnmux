import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import { NavBar } from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectDesc from "./components/ProjectDesc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Dashboard />}></Route>
          <Route path="/demnmux" element={<Dashboard />}></Route>
          <Route path="/project/:id" element={<ProjectDesc />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
