import { useForm } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import LineEffect from "./Buttons/LineEffect";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setloading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setloading(true)
      const response = await axios.get("http://localhost:5000/contact", {
        params: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          subject: data.message,
        },
      });
      setloading(false)
      console.log("Successfully sent: ", response.data);
      toast.success("Message Sent Suceesfully");
    } catch (error) {
      setloading(false)
      console.error("Failed to send: ", error);
      toast.error("Message Sent Suceesfully");
    } finally {
      setloading(false)
      reset();
    }
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className=" bg-[#fafafa]"
      id="contact"
    >
      <div className="w-[90%] mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch with Code Crush Technology</h1>
        <LineEffect />
        <p className="text-base text-center max-w-4xl mt-4 mx-auto">
        We’re here to assist you! Whether you have inquiries, feedback, or need support, our dedicated team is ready to help. Fill out the form on the right to reach out to us, and we’ll get back to you promptly. Let’s connect and explore how Code Crush Technology can drive your business forward.
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
                  disabled={loading}
                    type="submit"
                    className="w-full py-2 px-4 bg-[#ed2639] text-white rounded-full shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                  >
                    {loading ? `Sending Message` : `Send Message`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
