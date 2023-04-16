import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="w-full text-red-600  h-full p-32 flex justify-center items-center text-5xl">
      !!! Sorry the page your looking for is under maintenace. Please visit
      later.
      <br />{" "}
      <span className="animate-bounce duration-100 ">
        Redirecing to homepage.......
      </span>
    </div>
  );
};

export default NotFound;
