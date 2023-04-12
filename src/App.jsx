import { Route, Routes } from "react-router-dom";
import MyOrders from "./assets/Pages/MyOrders";
import Promotions from "./assets/Pages/Promotions";
import DashboardLayout from "./assets/Components/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/promotions" element={<Promotions />} />
      </Route>
    </Routes>
  );
}

export default App;
