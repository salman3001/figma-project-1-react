import Blogcard1 from "../common/Blogcard1";
import Blogcard2 from "../common/Blogcard2";
import Searchinput from "../Common/Searchinput";

const Blogsection2 = () => {
  return (
    <div className="p-10 px-10 md:px-20 flex flex-col gap-12">
      <div className="self-end">
        <Searchinput />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="lg:w-[60%]">
          <Blogcard1
            img={import.meta.env.VITE_BASE_URL + "/images/blog-card1-img.png"}
            title="Lorem Ipsum is simply dummy text of the"
            description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
          />
        </div>
        <div className="lg:w-[40%] flex flex-col gap-4  justify-start">
          <Blogcard2
            img={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
            title="Lorem Ipsum is simply dummy text of the"
            description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
          />
          <Blogcard2
            img={import.meta.env.VITE_BASE_URL + "/images/card2-img2.png"}
            title="Lorem Ipsum is simply dummy text of the"
            description=" Mentioned below are our ever-growing list of services. All orders
            come with free delivery"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogsection2;
