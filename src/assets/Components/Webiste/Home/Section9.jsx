import { Button, Typography } from "@mui/material";
import Blogcard1 from "../Common/Blogcard1";
import Blogcard2 from "../Common/Blogcard2";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Section9 = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:p-20 px-10 flex flex-col gap-12 ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Typography variant="h4">Recent blog post</Typography>

        <Typography variant="h5">
          Get a question? we're here to answer!
        </Typography>
        <Button
          sx={{ alignSelf: "end" }}
          endIcon={<BsArrowRight />}
          onClick={navigate("/blogs")}
        >
          See all
        </Button>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[60%]">
          <Blogcard1
            img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
            title="Lorem Ipsum is simply dummy text of the"
            description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
          />
        </div>
        <div className="w-full lg:w-[40%] flex flex-col gap-4 justify-start">
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
