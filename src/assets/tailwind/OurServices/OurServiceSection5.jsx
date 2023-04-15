export const OurServiceSection5 = () => {
  return (
    <div className=" flex flex-col gap-4 justify-center md:justify-start p-5 md:p-20 md:pb-10  w-full text-white">
      <div className="bg-[#03444F] flex flex-col gap-2 rounded-2xl py-10 px-5 md:p-20">
        <div className=" text-4xl font-bold">Ease to Made Laundry</div>
        <div>
          <div className="md:w-1/2 text-[#EBEBEB] opacity-90">
            Mentioned below are our ever-growing list of services. All orders
            come with free delivery
          </div>
          <div className="flex gap-2 items-center justify-end hover:underline">
            <a href="">View More</a>
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
              alt=""
              className="h-3"
            />
          </div>
        </div>
        <div className="flex gap-4 ">
          <CardWhite title="Wash" />
          <Cardblue title="Wash & Iron" />
          <CardWhite title="Ironing" />
          <Cardblue title="Dry Cleaning" />
        </div>
        <h2>Price List</h2>
        <div className="h-1 border-b-2"></div>
        <div className="relative flex py-2 gap-2 justify-center">
          <div className="absolute left-0">
            <ArrowButton direction="left" />
          </div>
          <div className="w-full mx-16  overflow-scroll scrollbar-hide   ">
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
        <div className="px-2 md:px-6 pt-4 flex gap-4 flex-wrap justify-center items-center">
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

const CardWhite = (prop) => (
  <div className="flex flex-col gap-1">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art1.svg"}
      alt=""
    />
    <p className="font-bold">{prop.title}</p>
  </div>
);

const Cardblue = (prop) => (
  <div className="flex flex-col gap-1">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art2.svg"}
      alt=""
    />
    <p className="font-bold">{prop.title}</p>
  </div>
);

const ArrowButton = (prop) => (
  <button
    className={`rounded-full h-8 md:h-12 w-8 md:w-12 p-2 bg-white ${
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
    className={`border px-6 md:px-12 py-1 md:py-2 rounded-full ${
      prop.active ? "bg-white text-[#00A5BF]" : "bg-[#7FA0A5]"
    }`}
  >
    {prop.name}
  </button>
);

const Card = (prop) => (
  <div className="flex flex-col w-32 ">
    <div className="bg-white rounded-t-lg flex justify-center items-center p-4 text-black flex-col gap-1">
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
