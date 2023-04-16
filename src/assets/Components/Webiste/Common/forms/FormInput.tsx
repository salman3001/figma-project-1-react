const FormInput = (prop: {
  placeholder: string;
  name: string;
  type: string;
}) => {
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
