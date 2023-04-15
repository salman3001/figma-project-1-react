import CheckSvg from "../common/CheckSvg";

const AboutSection2 = () => {
  return (
    <div className="p-10  flex justify-center relative text-white md:p-20 bg-[#03444F] mt-20 md:mt-40 lg:mt-64">
      <div className="absolute w-[90%] top-[-70px] md:top-[-100px] lg:top-[-150px] xl:top-[-200px]">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/aboutsection2-img.png"}
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-2 pt-[100px] xs-pt-[100px] sm:pt-[200px]  lg:pt-[200px] xl:pt-[350px] xx gap-6 justify-items-center [&>p]:opacity-80">
        <h1 className="text-4xl md:col-span-2  font-bold max-w-xl text-center">
          Your one stop dry cleaning solution in London
        </h1>

        <p>
          "Snowhite Dry Cleaners" is trading as "Laundramoon".Our motto is to
          clean and iron to perfection. At Laundramoon we believe in customer
          satisfaction and we go extra miles for each and every client. Our
          purpose is to build a foundation trust where every service utilised by
          you can be a long-lasting relationship between us. We introduce the
          premium dry clean, laundry, home/bedding, alterations and repair
          services straight to your door. We pick up your dirty clothes from
          your doorstep and delivery fresh, stain free, clean and ironed to
          perfection clothes back to you at your chosen location within 24 hours
          or your selected convenient time slot.
        </p>
        <div>
          <p>
            At Laundramoon, we provide the best care for your garments since
            1978. The process of dry cleaning and laundry is done in best class
            setups. And everything is handled by Laundramoon team from the time
            we pick up your clothes until delivered back to you. We do not use
            any harsh or harmful chemicals as well as laundry service is done
            with hygienic detergents, high temperature and antiseptic wash where
            require
          </p>
          <div className="grid md:grid-cols-2 gap-2 py-2">
            <div className="flex gap-2">
              <CheckSvg color="white" />
              <p>Site Inductions</p>
            </div>
            <div className="flex gap-2">
              <CheckSvg color="white" />
              <p>Site Inductions</p>
            </div>
            <div className="flex gap-2">
              <CheckSvg color="white" />
              <p>Site Inductions</p>
            </div>
            <div className="flex gap-2">
              <CheckSvg color="white" />
              <p>Site Inductions</p>
            </div>
          </div>
        </div>
        <button className="md:col-span-2 rounded-lg text-[#03444F] bg-white py-2 px-6">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default AboutSection2;
