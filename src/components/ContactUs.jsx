import { useForm } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import LineEffect from "./Buttons/LineEffect";
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
      <div className="w-[90%] mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <LineEffect/>
        <p className="text-base text-center max-w-2xl mt-4 mx-auto">
          We would love to hear from you! Please fill out the form on the right
          to get in touch with us. Whether you have a question, feedback, or
          need support, our team is here to help you.
        </p>
        <div className="flex flex-col md:items-center md:flex-row">
          <div className="md:w-1/2 px-8 bg-[#fafafa]">
            <div className="w-full md:pl-8">
              <div className=" md:p-6 rounded-lg ">
                <div className="text-gray-600 mb-4">
                  <div className="font-semibold flex flex-col text-2xl">
                    <div className="flex items-center gap-4">
                      <MdOutlineMailOutline
                        size={40}
                        className="bg-gray-400 text-white rounded-full p-2"
                      />
                      Email:{" "}
                    </div>
                    <span className="font-light ml-14 text-xl">
                      contact@softwareagency.com
                    </span>
                  </div>
                </div>
                <div className="text-gray-600 mb-4">
                  <div className="font-semibold flex flex-col text-2xl">
                    <div className="flex items-center gap-4">
                      <CiPhone
                        size={40}
                        className="bg-gray-400 text-white rounded-full p-2"
                      />
                      Phone :{" "}
                    </div>
                    <span className="font-light ml-14 text-xl">
                      +123 456 789
                    </span>
                  </div>
                </div>
                <div className="text-gray-600 mb-4">
                  <div className="font-semibold flex flex-col text-2xl">
                    <div className="flex items-center gap-4">
                      <CiLocationOn
                        size={40}
                        className="bg-gray-400 text-white rounded-full p-2"
                      />
                      Location :{" "}
                    </div>
                    <span className="font-light ml-14 text-xl">
                      123 Software Street
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-[#fafafa] ">
            <div className="px-8  py-8 flex items-center justify-center ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 w-96 px-10 rounded-md p-5 bg-white shadow-xl"
              >
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="mt-1 block w-full p-2 border-b border-gray-300 focus:ring-indigo-500 font-light outline-none focus:border-indigo-500"
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
                    className="mt-1 block w-full p-2 border-b outline-none border-gray-300  focus:ring-indigo-500 font-light focus:border-indigo-500"
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
                    className="mt-1 block w-full p-2 border-b outline-none border-gray-300 focus:ring-indigo-500 font-light focus:border-indigo-500"
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
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="mt-1 block w-full p-2 border-b outline-none border-gray-300  focus:ring-indigo-500 font-light focus:border-indigo-500"
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
    </div>
  );
};

export default ContactUs;
