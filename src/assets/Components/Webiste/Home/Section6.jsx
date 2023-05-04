import { Typography } from "@mui/material";
import { useRef, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Section6 = () => {
  const [activeDot, setActiveDot] = useState(1);
  const scrollRef = useRef();

  const scrollRight = () => {
    console.log(scrollRef.current);
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    const rang1 =
      scrollRef.current.scrollLeft > 0 &&
      scrollRef.current.scrollLeft < maxScrollLeft / 4;
    const rang2 =
      scrollRef.current.scrollLeft > maxScrollLeft / 4 &&
      scrollRef.current.scrollLeft < (maxScrollLeft / 4) * 2;
    const rang3 =
      scrollRef.current.scrollLeft > (maxScrollLeft / 4) * 2 &&
      scrollRef.current.scrollLeft < (maxScrollLeft / 4) * 3;
    const rang4 = scrollRef.current.scrollLeft > (maxScrollLeft / 4) * 3;
    scrollRef.current.scrollLeft += 400;

    if (rang1) {
      setActiveDot(1);
    }
    if (rang2) {
      setActiveDot(2);
    }
    if (rang3) {
      setActiveDot(3);
    }
    if (rang4) {
      setActiveDot(4);
    }
  };

  const scrollLeft = () => {
    console.log(scrollRef.current);
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    const rang1 =
      scrollRef.current.scrollLeft > 0 &&
      scrollRef.current.scrollLeft < maxScrollLeft / 4;
    const rang2 =
      scrollRef.current.scrollLeft > maxScrollLeft / 4 &&
      scrollRef.current.scrollLeft < (maxScrollLeft / 4) * 2;
    const rang3 =
      scrollRef.current.scrollLeft > (maxScrollLeft / 4) * 2 &&
      scrollRef.current.scrollLeft < (maxScrollLeft / 4) * 3;
    const rang4 = scrollRef.current.scrollLeft > (maxScrollLeft / 4) * 3;
    scrollRef.current.scrollLeft -= 400;

    if (rang1) {
      setActiveDot(1);
    }
    if (rang2) {
      setActiveDot(2);
    }
    if (rang3) {
      setActiveDot(3);
    }
    if (rang4) {
      setActiveDot(4);
    }
  };

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
        <button onClick={scrollLeft}>
          <AiFillCaretLeft size={25} />
        </button>
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
  <div className="bg-[#F5F7F9] snap-center w-[30rem] md:w-[38rem] p-8 sm:p-12 rounded-2xl h-[23rem] md:h-[25rem] flex flex-col justify-between gap-2">
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
