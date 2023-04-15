import { BlogCard1 } from "../common/BlogCard1";
import BlogCard2 from "../common/BlogCard2";

const Section9 = () => {
  return (
    <div className="lg:p-20 px-10 flex flex-col gap-12">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold">Recent blog post</h1>

        <p className="text-2xl text-[#141111] opacity-80">
          Get a question? we're here to answer!
        </p>
        <a
          href=""
          className="flex hover:underline gap-2 self-end  items-center text-2xl text-[#00A5BF]"
        >
          See all{" "}
          <img
            src={import.meta.env.VITE_BASE_URL + "/images/arrowblue.svg"}
            alt=""
            className="h-5"
          />
        </a>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="lg:w-[60%]">
          <BlogCard1 />
        </div>
        <div className="lg:w-[40%] flex flex-col gap-4 py-6 justify-between">
          <BlogCard2 />
          <BlogCard2 />
        </div>
      </div>
    </div>
  );
};

export default Section9;
