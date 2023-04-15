const EmailSubscribe = () => {
  return (
    <div className="flex justify-center ">
      <input
        className="rounded-l-lg p-2 border text-black w-56 sm:w-60 md:w-96 border-[#03444F] "
        type="email"
        placeholder="Enter email"
        name="email"
      />
      <button className="rounded-r-lg p-2 bg-[#022A30]">Subscribe</button>
    </div>
  );
};

export default EmailSubscribe;
