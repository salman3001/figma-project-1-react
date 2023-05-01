import { useFormik } from "formik";
import * as Yup from "yup";

const Emailsubscribe = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("required"),
    }),
    onSubmit: (value) => {
      alert(`user have entered ${value.email}`);
    },
  });

  return (
    <>
      <div className="flex justify-center ">
        <input
          id="email"
          className="rounded-l-lg p-2 border text-black w-full  sm:h-16 lg:h-[  60px] sm:w-60 md:w-[360px] border-[#03444F] text-2xl pl-5"
          type="email"
          placeholder="Enter email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <button
          className="rounded-r-lg w-[100px] lg:w-[200px] p-2 bg-[#022A30] text-xl place"
          onClick={(e) => {
            formik.handleSubmit();
          }}
        >
          Subscribe
        </button>
      </div>

      {formik.touched.email && (
        <p className="text-red-500">{formik.errors.email}</p>
      )}
    </>
  );
};

export default Emailsubscribe;
