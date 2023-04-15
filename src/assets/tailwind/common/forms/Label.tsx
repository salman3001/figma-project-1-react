const Label = (prop: { titile: string; for?: string }) => {
  return (
    <label className="text-[#111212]  opacity-70" htmlFor={prop.for}>
      {prop.titile}
    </label>
  );
};

export default Label;
