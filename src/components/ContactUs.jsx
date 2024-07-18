import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" bg-[#fafafa]" id="contact">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 p-8 bg-[#fafafa] mt-20">
        <div className="">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            We would love to hear from you! Please fill out the form on the
            right to get in touch with us. Whether you have a question,
            feedback, or need support, our team is here to help you.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 bg-[#fafafa] ">
        <div className="px-8 mt-10 py-8 flex items-center justify-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-96 px-10 rounded-md p-5 bg-white shadow-xl"
          >
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full p-2 border-b border-gray-300 focus:ring-indigo-500 font-light focus:border-indigo-500"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 block w-full p-2 border-b border-gray-300  focus:ring-indigo-500 font-light focus:border-indigo-500"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Invalid phone number",
                  },
                })}
                className="mt-1 block w-full p-2 border-b border-gray-300 focus:ring-indigo-500 font-light focus:border-indigo-500"
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="mt-1 block w-full p-2 border-b border-gray-300  focus:ring-indigo-500 font-light focus:border-indigo-500"
                rows="1"
                placeholder="Tell us about your project"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#ed2639] text-white rounded-full shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
