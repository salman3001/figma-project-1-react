import Accordian from "../Components/Webiste/Common/Accordian";
import Section10 from "../Components/Webiste/Home/Section10";

const Faq = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 text-xl py-4 md:py-10 p-10 md:p-20 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-7xl py-10 font-bold">
            Frequently asked questions
          </h1>
          <ul className="text-2xl md:text-3xl flex flex-col gap-7 opacity-80">
            <li className="flex gap-6 items-center font-bold">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              General Information
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              Our Services
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              Collection & Delivery
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              Pricing & Payments
            </li>
            <li className="flex gap-6 items-center">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/ring.svg"}
                className="h-4"
                alt=""
              />
              Rescheduling, Cancellations, & Complaints
            </li>
          </ul>
        </div>
        <div className="flex  flex-col p-5 justify-center">
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
      <Section10 />
    </>
  );
};

export default Faq;
