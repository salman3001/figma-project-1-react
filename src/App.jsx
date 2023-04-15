import { Navigate, Route, Routes } from "react-router-dom";
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
import Home from "./assets/tailwind/Home";
import Services from "./assets/tailwind/OurServices/Services";
import Blog from "./assets/tailwind/blogpage/Blog";
import Faqs from "./assets/tailwind/Faqs/Faqs";
import Contactus from "./assets/tailwind/contactus/Contactus";
import BlogDetail from "./assets/tailwind/blogdetail/BlogDetail";
import Privacy from "./assets/tailwind/Privacy/Privacy";
import Aboutus from "./assets/tailwind/aboutus/Aboutus";
import NotFound from "./assets/Pages/NotFound";
import Login from "./assets/tailwind/Registration&login/Login";
import Signup from "./assets/tailwind/Registration&login/Signup";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="myorders" element={<MyOrders />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="ordernow" element={<OrderNow />}>
          <Route path="address" element={<MyAddresses />} />
          <Route path="service" element={<Service />} />
          <Route path="collection" element={<Collection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blog/:blogId" element={<BlogDetail />} />
      <Route path="/contacus" element={<Contactus />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contacus" element={<Contactus />} />
      <Route path="/privaypolicy" element={<Privacy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
