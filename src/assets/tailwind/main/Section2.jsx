const Section2 = () => {
  return (
    <div className="py-24 flex flex-col gap-12">
      <h1 className="text-center  text-5xl mx-auto  font-[653] text-black">
        Over software businesses growing
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/openzepline.png"}
          alt=""
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/samsung.svg"}
          alt=""
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/monday.svg"}
          alt=""
        />
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/segment.svg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Section2;
