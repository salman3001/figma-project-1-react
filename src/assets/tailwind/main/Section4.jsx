const Section4 = () => {
  return (
    <div className=" flex flex-col gap-8  md:gap-16 text-center p-10 md:p-24">
      {/* text */}
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-4xl font-bold">Our Work Process</h1>
        <p className="md:w-96  ">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </p>
      </div>
      {/* svg */}
      <div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/section4arts.png"}
          className="w-full h-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section4;
