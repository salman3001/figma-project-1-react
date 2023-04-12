import { Route, Routes } from "react-router-dom";
import MyOrders from "./assets/Pages/MyOrders";
import Promotions from "./assets/Pages/Promotions";
import DashboardLayout from "./assets/Components/DashboardLayout";
import MyAccount from "./assets/Pages/MyAccount";
import OrderNow from "./assets/Pages/OrderNow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/ordernow" element={<OrderNow />} />
      </Route>
    </Routes>
  );
}

export default App;
