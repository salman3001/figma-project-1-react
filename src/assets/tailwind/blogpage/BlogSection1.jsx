import EmailSubscribe from "../common/EmailSubscribe";
import SocialIcons from "../common/SocialIcons";

const BlogSection1 = () => {
  return (
    <section className=" p-5 md:px-20 md:py-10 w-full text-white ">
      <div className="bg-[#02A5BF] rounded-2xl p-5 md:p-20 flex w-full flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl">All blog posts</h1>
        <p className="opacity-80 max-w-sm justify-center">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </p>
        <EmailSubscribe />
        <div className="flex w-full h-6 md:h-8 justify-start">
          <SocialIcons color1="white" color2="#02A5BF" align="justify-end" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection1;
