import { Typography } from "@mui/material";
import Sociallinks from "../Common/SocialLinks";

const AboutSection1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-10 md:p-20">
      <div className="md:w-1/2 lg:px-5">
        <Typography variant="h2" fontWeight={600}>
          Sharing your vision
        </Typography>
      </div>
      <div className="flex flex-col lg:px-5 text-xl justify-between gap-2 md:gap-0 md:w-1/2">
        <Typography variant="subtitle1">
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
