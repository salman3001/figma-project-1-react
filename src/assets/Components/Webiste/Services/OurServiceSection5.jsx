import { Typography } from "@mui/material";
import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  GiArmoredPants,
  GiClothes,
  GiLargeDress,
  GiLifeJacket,
  GiRolledCloth,
} from "react-icons/gi";
import { RiTShirtFill } from "react-icons/ri";
import { priceList } from "../../../DemoData/priceList";

const OurServiceSection5 = () => {
  const [serviceType, setServiceType] = useState("wash");
  const [itemType, setItemtype] = useState("Shirts");

  const scrollRef = useRef();

  const scrollLeft = () => {
    console.log(scrollRef.current);
    scrollRef.current.scrollLeft -= 150;
  };

  const scrollRight = () => {
    console.log(scrollRef.current);
    scrollRef.current.scrollLeft += 150;
  };

  return (
    <div className="respnsive-pading-1 respnsive-pading-2 flex flex-col gap-4 justify-center  w-full text-white">
      <div className="bg-[#03444F] flex flex-col gap-10 rounded-2xl p-2 sm:p-10 md:p-20">
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
          {serviceType === "wash" ? (
            <CardWhite title="Wash" setServiceType={setServiceType} />
          ) : (
            <Cardblue title="Wash" setServiceType={setServiceType} />
          )}
          {serviceType === "washAndIron" ? (
            <CardWhite title="Wash & Iron" setServiceType={setServiceType} />
          ) : (
            <Cardblue title="Wash & Iron" setServiceType={setServiceType} />
          )}
          {serviceType === "ironing" ? (
            <CardWhite title="Ironing" setServiceType={setServiceType} />
          ) : (
            <Cardblue title="Ironing" setServiceType={setServiceType} />
          )}
          {serviceType === "dryCleaning" ? (
            <CardWhite title="Dry Cleaning" setServiceType={setServiceType} />
          ) : (
            <Cardblue title="Dry Cleaning" setServiceType={setServiceType} />
          )}
        </div>
        <div className="">
          <Typography
            variant="body36"
            className="fadeOut"
            color="white"
            pl={2}
            pb={1}
          >
            {serviceType === "wash" ? (
              <div className="fadeOut">Wash Price List</div>
            ) : serviceType === "washAndIron" ? (
              <div className="fadeOut">Wash & Iron PriceList</div>
            ) : serviceType === "ironing" ? (
              <div className="fadeOut">Ironing Price List</div>
            ) : (
              serviceType === "dryCleaning" && (
                <div className="fadeOut">Dry Clean Price List</div>
              )
            )}
          </Typography>
          <div className=" border-b-2 mb-6"></div>

          <div className="relative flex gap-2  justify-center">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <ArrowButton direction="left" scroll={scrollLeft} />
            </div>
            <div
              ref={scrollRef}
              className="w-full mx-10 md:mx:12 overflow-scroll scrollbar-hide scroll-smooth"
            >
              <div className="flex  gap-2 w-min">
                <Button
                  name="Shirts"
                  active={itemType === "Shirts"}
                  setItemtype={setItemtype}
                />
                <Button
                  name="Bottoms"
                  active={itemType === "Bottoms"}
                  setItemtype={setItemtype}
                />
                <Button
                  name="Tops"
                  active={itemType === "Tops"}
                  setItemtype={setItemtype}
                />
                <Button
                  name="Dresses"
                  active={itemType === "Dresses"}
                  setItemtype={setItemtype}
                />
                <Button
                  name="Jackets"
                  active={itemType === "Jackets"}
                  setItemtype={setItemtype}
                />
                <Button
                  name="Outwears"
                  active={itemType === "Outwears"}
                  setItemtype={setItemtype}
                />
                <Button
                  name="Bedsheets"
                  active={itemType === "Bedsheets"}
                  setItemtype={setItemtype}
                />
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 ">
              <ArrowButton direction="rightt" scroll={scrollRight} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  justify-center lg:justify-start   gap-8 md:px-8">
          {/* wash items */}
          {serviceType === "wash" &&
            itemType === "Shirts" &&
            priceList.wash.shirts.map((item) => (
              <Card
                type="Shirts"
                qty={item.qty}
                price={item.price}
                serviceType="Wash"
              />
            ))}
          {serviceType === "wash" &&
            itemType === "Bottoms" &&
            priceList.wash.bottoms.map((item) => (
              <Card
                type="Bottoms"
                qty={item.qty}
                price={item.price}
                serviceType="Wash"
              />
            ))}
          {serviceType === "wash" &&
            itemType === "Tops" &&
            priceList.wash.bottoms.map((item) => (
              <Card
                type="Tops"
                qty={item.qty}
                price={item.price}
                serviceType="Wash"
              />
            ))}
          {serviceType === "wash" &&
            itemType === "Dresses" &&
            priceList.wash.bottoms.map((item) => (
              <Card
                type="Dresses"
                qty={item.qty}
                price={item.price}
                serviceType="Wash"
              />
            ))}
          {serviceType === "wash" &&
            itemType === "Jackets" &&
            priceList.wash.bottoms.map((item) => (
              <Card
                type="Jackets"
                qty={item.qty}
                price={item.price}
                serviceType="Wash"
              />
            ))}
          {serviceType === "wash" &&
            itemType === "Outwears" &&
            priceList.wash.bottoms.map((item) => (
              <Card
                type="Outwears"
                qty={item.qty}
                price={item.price}
                serviceType="Wash"
              />
            ))}
          {serviceType === "wash" &&
            itemType === "Bedsheets" &&
            priceList.wash.bottoms.map((item) => (
              <Card
                type="Bedsheets"
                qty={item.qty}
                price={item.price}
                serviceType="Wash"
              />
            ))}

          {/* wash and iron items */}
          {serviceType === "washAndIron" &&
            itemType === "Shirts" &&
            priceList.washAndIron.shirts.map((item) => (
              <Card
                type="Shirts"
                qty={item.qty}
                price={item.price}
                serviceType="Wash and Iron"
              />
            ))}
          {serviceType === "washAndIron" &&
            itemType === "Bottoms" &&
            priceList.washAndIron.bottoms.map((item) => (
              <Card
                type="Bottoms"
                qty={item.qty}
                price={item.price}
                serviceType="Wash and Iron"
              />
            ))}
          {serviceType === "washAndIron" &&
            itemType === "Tops" &&
            priceList.washAndIron.bottoms.map((item) => (
              <Card
                type="Tops"
                qty={item.qty}
                price={item.price}
                serviceType="Wash and Iron"
              />
            ))}
          {serviceType === "washAndIron" &&
            itemType === "Dresses" &&
            priceList.washAndIron.bottoms.map((item) => (
              <Card
                type="Dresses"
                qty={item.qty}
                price={item.price}
                serviceType="Wash and Iron"
              />
            ))}
          {serviceType === "washAndIron" &&
            itemType === "Jackets" &&
            priceList.washAndIron.bottoms.map((item) => (
              <Card
                type="Jackets"
                qty={item.qty}
                price={item.price}
                serviceType="Wash and Iron"
              />
            ))}
          {serviceType === "washAndIron" &&
            itemType === "Outwears" &&
            priceList.washAndIron.bottoms.map((item) => (
              <Card
                type="Outwears"
                qty={item.qty}
                price={item.price}
                serviceType="Wash and Iron"
              />
            ))}
          {serviceType === "washAndIron" &&
            itemType === "Bedsheets" &&
            priceList.washAndIron.bottoms.map((item) => (
              <Card
                type="Bedsheets"
                qty={item.qty}
                price={item.price}
                serviceType="Wash and Iron"
              />
            ))}

          {/* Ironing items */}
          {serviceType === "ironing" &&
            itemType === "Shirts" &&
            priceList.ironing.shirts.map((item) => (
              <Card
                type="Shirts"
                qty={item.qty}
                price={item.price}
                serviceType="Ironing"
              />
            ))}
          {serviceType === "ironing" &&
            itemType === "Bottoms" &&
            priceList.ironing.bottoms.map((item) => (
              <Card
                type="Bottoms"
                qty={item.qty}
                price={item.price}
                serviceType="Ironing"
              />
            ))}
          {serviceType === "ironing" &&
            itemType === "Tops" &&
            priceList.ironing.bottoms.map((item) => (
              <Card
                type="Tops"
                qty={item.qty}
                price={item.price}
                serviceType="Ironing"
              />
            ))}
          {serviceType === "ironing" &&
            itemType === "Dresses" &&
            priceList.ironing.bottoms.map((item) => (
              <Card
                type="Dresses"
                qty={item.qty}
                price={item.price}
                serviceType="Ironing"
              />
            ))}
          {serviceType === "ironing" &&
            itemType === "Jackets" &&
            priceList.ironing.bottoms.map((item) => (
              <Card
                type="Jackets"
                qty={item.qty}
                price={item.price}
                serviceType="Ironing"
              />
            ))}
          {serviceType === "ironing" &&
            itemType === "Outwears" &&
            priceList.ironing.bottoms.map((item) => (
              <Card
                type="Outwears"
                qty={item.qty}
                price={item.price}
                serviceType="Ironing"
              />
            ))}
          {serviceType === "ironing" &&
            itemType === "Bedsheets" &&
            priceList.ironing.bottoms.map((item) => (
              <Card
                type="Bedsheets"
                qty={item.qty}
                price={item.price}
                serviceType="Ironing"
              />
            ))}

          {/* Dry Cleaning Itmes items */}
          {serviceType === "dryCleaning" &&
            itemType === "Shirts" &&
            priceList.dryCleaning.shirts.map((item) => (
              <Card
                type="Shirts"
                qty={item.qty}
                price={item.price}
                serviceType="Dry Cleaning"
              />
            ))}
          {serviceType === "dryCleaning" &&
            itemType === "Bottoms" &&
            priceList.dryCleaning.bottoms.map((item) => (
              <Card
                type="Bottoms"
                qty={item.qty}
                price={item.price}
                serviceType="Dry Cleaning"
              />
            ))}
          {serviceType === "dryCleaning" &&
            itemType === "Tops" &&
            priceList.dryCleaning.bottoms.map((item) => (
              <Card
                type="Tops"
                qty={item.qty}
                price={item.price}
                serviceType="Dry Cleaning"
              />
            ))}
          {serviceType === "dryCleaning" &&
            itemType === "Dresses" &&
            priceList.dryCleaning.bottoms.map((item) => (
              <Card
                type="Dresses"
                qty={item.qty}
                price={item.price}
                serviceType="Dry Cleaning"
              />
            ))}
          {serviceType === "dryCleaning" &&
            itemType === "Jackets" &&
            priceList.dryCleaning.bottoms.map((item) => (
              <Card
                type="Jackets"
                qty={item.qty}
                price={item.price}
                serviceType="Dry Cleaning"
              />
            ))}
          {serviceType === "dryCleaning" &&
            itemType === "Outwears" &&
            priceList.dryCleaning.bottoms.map((item) => (
              <Card
                type="Outwears"
                qty={item.qty}
                price={item.price}
                serviceType="Dry Cleaning"
              />
            ))}
          {serviceType === "dryCleaning" &&
            itemType === "Bedsheets" &&
            priceList.dryCleaning.bottoms.map((item) => (
              <Card
                type="Bedsheets"
                qty={item.qty}
                price={item.price}
                serviceType="DryCleaning"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection5;

const CardWhite = (prop) => (
  <div
    className="flex flex-col w-full gap-1  max-w-[16rem] cursor-pointer fadeOut duration-500  ease-in-out"
    onClick={() => {
      const type =
        prop.title === "Wash"
          ? "wash"
          : prop.title === "Wash & Iron"
          ? "washAndIron"
          : prop.title === "Ironing"
          ? "ironing"
          : prop.title === "Dry Cleaning" && "dryCleaning";
      console.log(type);

      prop.setServiceType(type);
    }}
  >
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
  <div
    className="flex flex-col gap-1 max-w-[16rem] cursor-pointer "
    onClick={() => {
      const type =
        prop.title === "Wash"
          ? "wash"
          : prop.title === "Wash & Iron"
          ? "washAndIron"
          : prop.title === "Ironing"
          ? "ironing"
          : prop.title === "Dry Cleaning" && "dryCleaning";

      console.log(type);
      prop.setServiceType(type);
    }}
  >
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/section5art2.svg"}
      alt=""
    />

    <Typography variant="body32" color="white">
      {prop.title}
    </Typography>
  </div>
);

const ArrowButton = (prop) => (
  <button
    className={`rounded-full h-8 md:h-10 p-1 w-8 md:w-10  bg-white ${
      prop.direction === "left" && "rotate-180"
    }`}
    onClick={prop.scroll}
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
    onClick={() => {
      prop.setItemtype(prop.name);
    }}
  >
    {prop.name}
  </button>
);

const Card = (prop) => (
  <div className="flex flex-col w-36 scaleIn">
    <div className="bg-white rounded-t-lg flex justify-center items-center p-4 text-black flex-col gap-1">
      {prop.type === "Shirts" && (
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/shirt.svg"}
          className="h-12"
          alt=""
        />
      )}
      {prop.type === "Bottoms" && <GiArmoredPants size={32} color="#00a5bf" />}
      {prop.type === "Tops" && <RiTShirtFill size={32} color="#00a5bf" />}
      {prop.type === "Dresses" && <GiLargeDress size={32} color="#00a5bf" />}
      {prop.type === "Jackets" && <GiLifeJacket size={32} color="#00a5bf" />}
      {prop.type === "Outwears" && <GiClothes size={32} color="#00a5bf" />}
      {prop.type === "Bedsheets" && <GiRolledCloth size={32} color="#00a5bf" />}
      {prop.qty} {prop.type}
      <div className="font-bold">{prop.serviceType}</div>
    </div>
    <div className="bg-[#00A5BF] p-2 flex justify-center items-center rounded-b-lg h-[20%]">
      &pound;{prop.price}
    </div>
  </div>
);
