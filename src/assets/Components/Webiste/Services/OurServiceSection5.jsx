import { Typography } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";

const OurServiceSection5 = () => {
  return (
    <div className="respnsive-pading-1 respnsive-pading-2 flex flex-col gap-4 justify-center  w-full text-white">
      <div className="bg-[#03444F] flex flex-col gap-14 rounded-2xl p-2 sm:p-10 md:p-20">
        <div>
          <Typography variant="h64" color="white">
            Ease to Made Laundry
          </Typography>
          <div className="flex flex-wrap gap-4 justify-between">
            <Typography
              variant="body28"
              color="rgba(235, 235, 235, 0.88)"
              maxWidth={"40rem"}
            >
              Mentioned below are our ever-growing list of services. All orders
              come with free delivery
            </Typography>
            <Typography
              variant="body32"
              color="white"
              className="self-end flex justify-center items-center gap-2 cursor-pointer"
            >
              View More
              <BsArrowRight />
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12">
          <CardWhite title="Wash" />
          <Cardblue title="Wash & Iron" />
          <CardWhite title="Ironing" />
          <Cardblue title="Dry Cleaning" />
        </div>
        <div className="">
          <Typography variant="body36" color="white" pl={4} pb={1}>
            Price List
          </Typography>
          <div className=" border-b-4 "></div>

          <div className="relative flex gap-2 pt-6 justify-center">
            <div className="absolute left-0">
              <ArrowButton direction="left" />
            </div>
            <div className="w-full mx-10 md:mx:12 overflow-scroll scrollbar-hide   ">
              <div className="flex  gap-2 w-min">
                <Button name="Shirts" active />
                <Button name="Button" />
                <Button name="Tops" />
                <Button name="Dresses" />
                <Button name="Jackets" />
                <Button name="Outwears" />
                <Button name="BedSheets" />
              </div>
            </div>
            <div className="absolute right-0 ">
              <ArrowButton direction="rightt" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  justify-center lg:justify-start   gap-8 md:px-8">
          <Card qty="20" price="$ 300" />
          <Card qty="20" price="$ 300" />
          <Card qty="20" price="$ 300" />
          <Card qty="20" price="$ 300" />
          <Card qty="20" price="$ 300" />
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection5;

const CardWhite = (prop) => (
  <div className="flex flex-col w-full gap-1 max-h-[22rem] max-w-[20rem]">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art1.svg"}
      alt=""
    />

    <Typography variant="subtitle32" color="white">
      {prop.title}
    </Typography>
  </div>
);

const Cardblue = (prop) => (
  <div className="flex flex-col gap-1 max-h-[22rem] max-w-[20rem]">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art2.svg"}
      alt=""
    />
    <Typography variant="subtitle32" color="white">
      {prop.title}
    </Typography>
  </div>
);

const ArrowButton = (prop) => (
  <button
    className={`rounded-full h-8 md:h-10 p-1 w-8 md:w-10  bg-white ${
      prop.direction === "left" && "rotate-180"
    }`}
  >
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/arrowblue.svg"}
      className="h-4"
      alt=""
    />
  </button>
);
const Button = (prop) => (
  <button
    className={`border px-6 py-1 rounded-full w-[10rem] xl:w-[16.5rem] text-[1.5rem] ${
      prop.active ? "bg-white text-[#00A5BF]" : "bg-[#7FA0A5]"
    }`}
  >
    {prop.name}
  </button>
);

const Card = (prop) => (
  <div className="flex flex-col w-36 ">
    <div className="bg-white rounded-t-lg flex justify-center items-center p-6 text-black flex-col gap-1">
      <img
        src={import.meta.env.VITE_BASE_URL + "/images/shirt.svg"}
        className="h-12"
        alt=""
      />
      {prop.qty} shirts
    </div>
    <div className="bg-[#00A5BF] p-2 flex justify-center items-center rounded-b-lg h-[20%]">
      {prop.price}
    </div>
  </div>
);
