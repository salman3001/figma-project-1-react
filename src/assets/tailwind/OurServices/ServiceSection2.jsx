const ServiceSection2 = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-y-16 gap-x-8 p-10 md:p-20">
      <h1 className="text-4xl md:text-5xl font-bold">
        YOUR PROFESSIONAL DRY CLEAN & LAUNDRY SERVICE
      </h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Laundry Service</h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Dry Cleaning</h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Home & Bedding</h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Alterations & Repairs</h1>
      <Card />
      <h1 className="text-4xl md:text-5xl font-bold">Ironing</h1>
      <Card />
    </div>
  );
};

export default ServiceSection2;

const Card = () => (
  <div className="flex flex-col gap-4">
    <h1 className="text-xl font-bold">This Service is for Everyday Laundry</h1>
    <p className="opacity-70">
      Items are washed and tumble dried. T-shirts, skirts, bra, handkerchiefs,
      jeans, knitwear, jumper etc.
    </p>
    <h1 className="text-xl font-bold">Our Work Process</h1>
    <p className="opacity-70">
      Machines that use water as the main cleaning solution Clothes are washed,
      tumbled dried then folded This is suitable for daily items chlorine-free
      products and eco-friendly detergents are used
    </p>
    <div className="flex gap-4">
      <button className="btn-2">Book Now</button>
      <button className="btn-1">Login</button>
    </div>
  </div>
);
