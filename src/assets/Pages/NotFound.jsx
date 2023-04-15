import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="w-full h-full p-32 flex justify-center items-center text-2xl">
      Sorry the page your looking for was not found. <br /> Redirecing to
      homepage.......
    </div>
  );
};

export default NotFound;
