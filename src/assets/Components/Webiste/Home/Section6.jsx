const Section6 = () => {
  return (
    <div className="w-full p-5 md:p-20 flex flex-col gap-8 md:gap-16 ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold">Customers opinion</h1>
        <p className="text-[#545252]">Get a question? we're here to answer!</p>
      </div>
      <div className="overflow-scroll scrollbar-hide scroll-smooth snap-x scroll">
        <div className="flex min-w-min gap-12 md:gap-24">
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
            className="h-4"
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className="h-2 opacity-50"
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className="h-2 opacity-50"
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className="h-2 opacity-50"
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className="h-2 opacity-50"
            alt=""
          />
        </button>
        <button>
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/blackdot.svg"}
            className="h-2 opacity-50"
            alt=""
          />
        </button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-2xl font-bold text-[#181818]">
          We’d love to hear from you
        </p>
        <a
          className="text-[#00A5BF] uppercase hover:underline text-lg font-semibold"
          href=""
        >
          Leave Review
        </a>
      </div>
    </div>
  );
};

export default Section6;

const Card = () => (
  <div className="bg-[#F5F7F9] snap-center  w-[500px] p-8 rounded-2xl h-72 flex flex-col justify-between gap-2">
    <img
      src={import.meta.env.VITE_BASE_URL + "/images/bluestars.svg"}
      className="h-4 self-start "
      alt=""
    />
    <div className="grow pt-4">
      <h1 className="text-xl font-bold">Great design and support</h1>
      <p className="text-[#8CA0A4] ">
        It is a long established fact that a reader will be distracted by the
        readable content
      </p>
    </div>
    <p className="pt-4 font-bold text-[#8CA0A4]">Natalia Ramos </p>
  </div>
);
