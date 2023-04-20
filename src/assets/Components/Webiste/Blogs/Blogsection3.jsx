import { Typography } from "@mui/material";
import Blogcard1 from "../Common/Blogcard1";

const Blogsection3 = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 respnsive-pading-1 respnsive-pading-2 gap-10">
        <Blogcard1
          img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
          title="Lorem Ipsum is simply dummy text of the"
          description=" Mentioned below are our ever-growing list of services. All orders
        come with free delivery"
        />{" "}
        <Blogcard1
          img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
          title="Lorem Ipsum is simply dummy text of the"
          description=" Mentioned below are our ever-growing list of services. All orders
        come with free delivery"
        />{" "}
        <Blogcard1
          img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
          title="Lorem Ipsum is simply dummy text of the"
          description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
        />{" "}
        <Blogcard1
          img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
          title="Lorem Ipsum is simply dummy text of the"
          description=" Mentioned below are our ever-growing list of services. All orders
        come with free delivery"
        />{" "}
        <Blogcard1
          img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
          title="Lorem Ipsum is simply dummy text of the"
          description=" Mentioned below are our ever-growing list of services. All orders
        come with free delivery"
        />{" "}
        <Blogcard1
          img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
          title="Lorem Ipsum is simply dummy text of the"
          description=" Mentioned below are our ever-growing list of services. All orders
        come with free delivery"
        />
      </div>
      <div className="respnsive-pading-1 respnsive-pading-2 flex gap-4">
        <Peginationbutton number="1" selected={true} />
        <Peginationbutton number="2" selected={false} />
        <Peginationbutton number="3" selected={false} />
        <Typography variant="h45" color="primary" lineHeight={"25px"}>
          ...
        </Typography>
        <Peginationbutton number="12" selected={false} />
      </div>
    </>
  );
};

export default Blogsection3;

const Peginationbutton = (prop) => {
  return (
    <div
      className={`${
        prop.selected ? "bg-[#00A5BF]" : "bg-[#CBCBCB]"
      } text-white  h-7 w-7 rounded-md   flex justify-center items-center`}
    >
      {prop.number}
    </div>
  );
};
