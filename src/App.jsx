import { Route, Routes } from "react-router-dom";
import Dashboard from "./assets/Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
