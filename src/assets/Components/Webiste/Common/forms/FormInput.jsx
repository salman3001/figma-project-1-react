const FormInput = (prop) => {
  return (
    <input
      className=" border  p-4 w-full text-black rounded-lg"
      type={prop.type}
      name={prop.name}
      id=""
      placeholder={prop.placeholder}
    />
  );
};

export default FormInput;
