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
import NotFound from "./assets/Pages/NotFound";
import WebLayout from "./assets/Components/Webiste/WebLayout";
import Home from "./assets/Pages/Home";
import Blogs from "./assets/Pages/Blogs";
import Blog from "./assets/Pages/Blog";
import ContactUs from "./assets/Pages/ContactUs";
import Faq from "./assets/Pages/Faq";
import PrivaryPolicy from "./assets/Pages/PrivaryPolicy";
import Login from "./assets/Pages/Login";
import Signup from "./assets/Pages/Signup";
import CheckYourEmail from "./assets/Pages/CheckYourEmail";
import SuccessfullyVarified from "./assets/Pages/SuccessfullyVarified";

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
      <Route path="/" element={<WebLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:blogid" element={<Blog />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="faqs" element={<Faq />} />
        <Route path="privacy" element={<PrivaryPolicy />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<Aboutus />} /> 
        */}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkyouremail" element={<CheckYourEmail />} />
      <Route path="/successfullyvarified" element={<SuccessfullyVarified />} />
    </Routes>
  );
}

export default App;
