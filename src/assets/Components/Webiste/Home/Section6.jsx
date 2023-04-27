import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Section6 = () => {
  const [activeDot, setActiveDot] = useState(1);
  const scrollRef = useRef();

  const scrollRight = () => {
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    const range = maxScrollLeft / 5;

    if (maxScrollLeft - scrollRef.current.scrollLeft > 500) {
      scrollRef.current.scrollLeft += 400;

      if (
        scrollRef.current.scrollLeft >= 0 &&
        scrollRef.current.scrollLeft <= range
      ) {
        setActiveDot(1);
      }
      if (
        scrollRef.current.scrollLeft >= range &&
        scrollRef.current.scrollLeft <= range * 2
      ) {
        setActiveDot(2);
      }
      if (
        scrollRef.current.scrollLeft >= range * 2 &&
        scrollRef.current.scrollLeft <= range * 3
      ) {
        setActiveDot(3);
      }
      if (
        scrollRef.current.scrollLeft >= range * 3 &&
        scrollRef.current.scrollLeft <= range * 4
      ) {
        setActiveDot(4);
      }
      if (
        scrollRef.current.scrollLeft >= range * 4 &&
        scrollRef.current.scrollLeft <= range * 5
      ) {
        setActiveDot(5);
      }
    } else {
      scrollRef.current.scrollLeft = 0;
      setActiveDot(1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const maxScrollLeft =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      const range = maxScrollLeft / 5;

      if (maxScrollLeft - scrollRef.current.scrollLeft > 500) {
        scrollRef.current.scrollLeft += 400;

        if (
          scrollRef.current.scrollLeft >= 0 &&
          scrollRef.current.scrollLeft <= range
        ) {
          setActiveDot(1);
        }
        if (
          scrollRef.current.scrollLeft >= range &&
          scrollRef.current.scrollLeft <= range * 2
        ) {
          setActiveDot(2);
        }
        if (
          scrollRef.current.scrollLeft >= range * 2 &&
          scrollRef.current.scrollLeft <= range * 3
        ) {
          setActiveDot(3);
        }
        if (
          scrollRef.current.scrollLeft >= range * 3 &&
          scrollRef.current.scrollLeft <= range * 4
        ) {
          setActiveDot(4);
        }
        if (
          scrollRef.current.scrollLeft >= range * 4 &&
          scrollRef.current.scrollLeft <= range * 5
        ) {
          setActiveDot(5);
        }
      } else {
        scrollRef.current.scrollLeft = 0;
        setActiveDot(1);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full respnsive-pading-1 respnsive-pading-2 flex flex-col gap-8 md:gap-16 ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Typography variant="h45">Customers opinion</Typography>
        <Typography variant="body22" color="text.muted">
          Get a question? we're here to answer!
        </Typography>
      </div>
      <div
        onScroll={(e) => {}}
        ref={scrollRef}
        className="overflow-scroll  scroll-smooth scrollbar-hide  snap-x snap-mandatory scroll"
      >
        <div className="flex min-w-min gap-8 md:gap-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className={
              activeDot === 1
                ? "h-4 transition-all"
                : "h-2 opacity-50 transition-all"
            }
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className={
              activeDot === 2
                ? "h-4 transition-all"
                : "h-2 opacity-50 transition-all"
            }
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className={
              activeDot === 3
                ? "h-4 transition-all"
                : "h-2 opacity-50 transition-all"
            }
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className={
              activeDot === 4
                ? "h-4 transition-all"
                : "h-2 opacity-50 transition-all"
            }
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className={
              activeDot === 5
                ? "h-4 transition-all"
                : "h-2 opacity-50 transition-all"
            }
            alt=""
          />
        </button>
        <button onClick={scrollRight}>
          <AiFillCaretRight size={25} />
        </button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Typography variant="body36" fontFamily={591} textAlign="center">
          We’d love to hear from you
        </Typography>
        <Typography
          variant="body32"
          color={"primary"}
          sx={{ cursor: "pointer" }}
        >
          Leave Review
        </Typography>
      </div>
    </div>
  );
};

export default Section6;

const Card = () => (
  <div className="bg-[#F5F7F9] snap-center w-[370px]  sm:w-[685px] p-8 sm:p-12 rounded-2xl h-[389px] flex flex-col justify-between gap-2">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/bluestars.svg"}
      className="h-6 self-start "
      alt=""
    />
    <div className="grow pt-4">
      <Typography variant="subtitle36">Great design and support</Typography>
      <Typography variant="body24" color="text.muted">
        It is a long established fact that a reader will be distracted by the
        readable content
      </Typography>
    </div>
    <Typography variant="subtitle24" color="#8CA0A4">
      Natalia Ramos{" "}
    </Typography>
  </div>
);
