import { BlogCard1 } from "../common/BlogCard1";
import BlogCard2 from "../common/BlogCard2";
import Searchinput from "../common/Searchinput";

const BlogSection2 = () => {
  return (
    <div className="p-10 px-10 md:px-20 flex flex-col gap-12">
      <div className="self-end">
        <Searchinput />
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

export default BlogSection2;
