import Blogcard1 from "../Common/Blogcard1";

const Blogsection3 = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 p-10 md:p-20 gap-6">
      <Blogcard1
        img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
        title="Lorem Ipsum is simply dummy text of the"
        description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
      />{" "}
      <Blogcard1
        img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
        title="Lorem Ipsum is simply dummy text of the"
        description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
      />{" "}
      <Blogcard1
        img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
        title="Lorem Ipsum is simply dummy text of the"
        description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
      />{" "}
      <Blogcard1
        img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
        title="Lorem Ipsum is simply dummy text of the"
        description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
      />{" "}
      <Blogcard1
        img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
        title="Lorem Ipsum is simply dummy text of the"
        description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
      />{" "}
      <Blogcard1
        img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
        title="Lorem Ipsum is simply dummy text of the"
        description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
      />
    </div>
  );
};

export default Blogsection3;
