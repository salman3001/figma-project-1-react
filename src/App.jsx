import { Route, Routes } from "react-router-dom";
import MyOrders from "./assets/Pages/MyOrders";
import Promotions from "./assets/Pages/Promotions";
import DashboardLayout from "./assets/Components/DashboardLayout";
import MyAccount from "./assets/Pages/MyAccount";
import OrderNow from "./assets/Pages/OrderNow";
import MyAddresses from "./assets/Components/MyAddresses";
import Service from "./assets/Components/Service";
import Collection from "./assets/Components/Collection";
import Contact from "./assets/Components/Contact";
import Payment from "./assets/Components/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="myorders" element={<MyOrders />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="ordernow" element={<OrderNow />}>
          <Route path="address" element={<MyAddresses />} />
          <Route path="service" element={<Service />} />
          <Route path="collection" element={<Collection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
