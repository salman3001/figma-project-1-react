export const BlogCard1 = () => {
  return (
    <div>
      <div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          Lorem Ipsum is simply dummy text of the
        </h1>
        <p className="opacity-80 text-xl">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </p>
        <div className="flex gap-2">
          <button className="card-btn">UIUX</button>
          <button className="card-btn">UIUX</button>
          <button className="card-btn">UIUX</button>
        </div>
      </div>
    </div>
  );
};
