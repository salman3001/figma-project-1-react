const TextArea = (prop: { name: string; placeholder: string }) => {
  return (
    <textarea
      className=" border  p-4 w-full text-black rounded-lg"
      name={prop.name}
      id=""
      placeholder={prop.placeholder}
    />
  );
};

export default TextArea;
