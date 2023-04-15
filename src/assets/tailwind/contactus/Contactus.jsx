import FormInput from "../common/forms/FormInput";
import Label from "../common/forms/Label";
import MobileInput from "../common/forms/MobileInput";
import TextArea from "../common/forms/TextArea";
import SocialIcons from "../common/SocialIcons";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const Contactus = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <div className="flex flex-col gap-6 lg:flex-row w-full p-5 lg:p-20">
          {/* left */}
          <div className="lg:w-1/2 flex px-5 lg:px-10 flex-col gap-4">
            <h1 className="text-2xl md:text-6xl">
              Talk to our product analytics expert
            </h1>
            <p className="text-xl md:text-2xl">Our Location</p>
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/location.png"}
              alt=""
            />
            <div className="grid lg:grid-cols-2 gap-4 place-items-start pt-2  [&>p]:opacity-70 [&>div>img]:h-12">
              <div className="flex gap-2 items-center">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/location 1.svg"}
                  alt=""
                />
                <p>
                  Nash Conversions Ltd, Unit 5, Shaftesbury Road, LONDON, E10
                  7DA
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/mail 1.svg"}
                  alt=""
                />
                <p>
                  londramoon@email.com <br /> londramoon@email.com
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/phone 1.svg"}
                  alt=""
                />
                <p>+1 73657029000</p>
              </div>
              <div className="flex h-10 ">
                <SocialIcons color1="#00A5BF" color2="white" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="lg:w-1/2 shadow-xl p-4 md:p-10 flex flex-col gap-4 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label titile="Name" for="name" />
                <FormInput placeholder="Name" name="name" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <Label titile="Surname" for="Surname" />
                <FormInput placeholder="SurName" name="Surname" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <Label titile="Company Name" for="companyname" />
                <FormInput
                  placeholder="Company Name"
                  name="companyname"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label titile="Business Email" for="email" />
                <FormInput
                  placeholder="Business Email"
                  name="email"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label titile="Business Number" for="mobileNumber" />
                <MobileInput
                  name="mobileNumber"
                  placeholder="Business Number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label titile="Subject" for="subject" />
                <FormInput
                  name="Subject"
                  placeholder="Type here.."
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label titile="Message" for="message" />
                <TextArea name="message" placeholder="Message" />
              </div>
              <button className="bg-[#022A30] flex justify-center items-center p-4 gap-2 mt-2 rounded-md text-white [&>img]:h-3">
                Contact Us
                <img src="/images/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contactus;
