import { Typography } from "@mui/material";
import Sociallinks from "../Common/SocialLinks";

const AboutSection1 = () => {
  return (
    <div className="flex flex-col md:flex-row respnsive-pading-1 respnsive-pading-2 xl:pt-28">
      <div className="md:w-[60%] lg:px-5">
        <Typography
          variant="h128"
          textTransform={"uppercase"}
          lineHeight={["60px", "80px", "100px", "134px"]}
        >
          Sharing your vision
        </Typography>
      </div>
      <div className="flex flex-col justify-between gap-4 md:gap-0 md:w-[40%] py-4">
        <Typography variant="body32" color="text.muted">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </Typography>
        <div className="flex h-8">
          <Sociallinks color1="#00A5BF" color2="white" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
