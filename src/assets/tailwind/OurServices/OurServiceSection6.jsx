import Accordian from "../Accordian";

const OurServiceSection6 = () => {
  return (
    <div className="p-10 sm:p-20  md:px-40 flex flex-col gap-4 md:gap-16 about-section3-gradient">
      <div className="flex flex-col justify-center gap-2 items-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-xl text-[#141111] opacity-80">
          Get a question? we're here to answer!
        </p>
      </div>
      <div className="md:pt-8 px-5 md:px-20">
        <Accordian
          title="Where do you operate?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
        <Accordian
          title="Do you offer repair and alteration service too?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
        <Accordian
          title="How can I contact you?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
        <Accordian
          title="How can I contact you?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
        <Accordian
          title="How can I contact you?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default OurServiceSection6;
