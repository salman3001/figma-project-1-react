import { Button, Typography } from "@mui/material";
import Blogcard1 from "../Common/Blogcard1";
import Blogcard2 from "../Common/Blogcard2";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Section9 = () => {
  const navigate = useNavigate();
  return (
    <div className=" respnsive-pading-1 respnsive-pading-2 flex flex-col gap-12 ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Typography variant="h45">Recent blog post</Typography>

        <Typography variant="body28" color="text.muted">
          Get a question? we're here to answer!
        </Typography>
        <Typography
          variant="body32"
          color="primary"
          sx={{
            alignSelf: "end",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
          onClick={() => {
            navigate("/blogs");
          }}
        >
          See all <BsArrowRight />
        </Typography>
      </div>
      <div className="grid grid-cols-12 gap-6  ">
        <div className="col-span-12 xl:col-span-7 xl:pr-8">
          <Blogcard1
            img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
            title="Lorem Ipsum is simply dummy text of the"
            description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-evenly items-start col-span-12 xl:col-span-5 xl:pl-8 gap-16 ">
          <Blogcard2
            img={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
            title="Lorem Ipsum is simply dummy text of the"
            description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
          />
          <Blogcard2
            img={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
            title="Lorem Ipsum is simply dummy text of the"
            description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
          />
        </div>
      </div>
    </div>
  );
};

export default Section9;
