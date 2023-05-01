import { Typography } from "@mui/material";
import Emailsubscribe from "../Common/Emailsubscribe";
import SocialLinks from "../Common/SocialLinks";

const Blogsection1 = () => {
  return (
    <section className="respnsive-pading-1 respnsive-pading-2   md:mt-6 w-full text-white ">
      <div className="bg-[#02A5BF] rounded-2xl p-5 flex w-full flex-col gap-6 justify-center items-center lg:min-h-[420px] ">
        <Typography variant="h64" minWidth={200} color="white" fontWeight={500}>
          All blog posts
        </Typography>
        <Typography
          variant="body28"
          color="white"
          sx={{ opacity: "60%" }}
          maxWidth={520}
          textAlign="Center"
        >
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </Typography>
        <Emailsubscribe />
        <div className="flex w-full self-end h-10 justify-start mt-6">
          <SocialLinks color1="white" color2="#02A5BF" align="justify-end" />
        </div>
      </div>
    </section>
  );
};

export default Blogsection1;
