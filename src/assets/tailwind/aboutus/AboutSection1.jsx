import SocialIcons from "../common/SocialIcons";

const AboutSection1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-10 md:p-20">
      <div className="md:w-1/2 lg:px-5">
        <h1 className="text-6xl uppercase font-bold text-black">
          Sharing your vision
        </h1>
      </div>
      <div className="flex flex-col lg:px-5 text-xl justify-between gap-2 md:gap-0 md:w-1/2">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </p>
        <div className="flex h-6">
          <SocialIcons color1="#00A5BF" color2="white" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
