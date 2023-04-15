const BlogCard2 = () => {
  return (
    <div className="flex flex-col justify-center md:justify-start items-center md:items-start w-full md:flex-row gap-4 ">
      <div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
          className="h-auto rounded-2xl"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 md:w-1/2">
        <h1 className="text-2xl font-bold leading-6">
          Lorem Ipsum is simply dummy text of the
        </h1>
        <p className="opacity-80 text-lg leading-5">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </p>
        <div className="flex gap-2">
          <button className="card-btn">UIUX</button>
          <button className="card-btn">UIUX</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
