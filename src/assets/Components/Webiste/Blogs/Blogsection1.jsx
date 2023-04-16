import { Typography } from "@mui/material";
import Emailsubscribe from "../Common/Emailsubscribe";
import SocialLinks from "../Common/SocialLinks";

const Blogsection1 = () => {
  return (
    <section className=" p-5 md:px-20 md:py-10 w-full text-white ">
      <div className="bg-[#02A5BF] rounded-2xl p-5 md:p-20 flex w-full flex-col gap-4 justify-center items-center">
        <Typography variant="h4">All blog posts</Typography>
        <Typography variant="subtitle1">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </Typography>
        <Emailsubscribe />
        <div className="flex w-full h-6 md:h-8 justify-start">
          <SocialLinks color1="white" color2="#02A5BF" align="justify-end" />
        </div>
      </div>
    </section>
  );
};

export default Blogsection1;
