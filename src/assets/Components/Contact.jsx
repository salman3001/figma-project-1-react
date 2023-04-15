import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const activeStep = useSelector((state) => state.orderNow.activeStep);
  const navigate = useNavigate();
  useEffect(() => {
    if (activeStep === "address") {
      navigate("/dashboard/ordernow/address");
    }
  });
  return <div>Contact</div>;
};

export default Contact;
