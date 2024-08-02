import { useForm } from "react-hook-form";


import email from "../assets/website_icons/email.svg";
import location from "../assets/website_icons/location.svg";
import phone from "../assets/website_icons/phone.svg";

import LineEffect from "./Buttons/LineEffect";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
const ContactUs = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Calculate navbar height on mount and resize
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('nav'); 
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setloading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setloading(true);
      const response = await axios.get("http://localhost:5000/contact", {
        params: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          subject: data.message,
        },
      });
      setloading(false);
      console.log("Successfully sent: ", response.data);
      toast.success("Message Sent Suceesfully");
    } catch (error) {
      setloading(false);
      console.error("Failed to send: ", error);
      toast.error("Message Sending Failed");
    } finally {
      setloading(false);
      reset();
    }
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className=" bg-[#fafafa]"
      style={{ paddingTop: navbarHeight }}
      id="contact"
    >
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0  mx-auto py-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Get in Touch with Code Crush Technology
        </h1>
        <LineEffect />
        <p className="text-base text-center max-w-4xl mt-4 mx-auto">
          We’re here to assist you! Whether you have inquiries, feedback, or
          need support, our dedicated team is ready to help. Fill out the form
          on the right to reach out to us, and we’ll get back to you promptly.
          Let’s connect and explore how Code Crush Technology can drive your
          business forward.
        </p>
        <div className="flex flex-col md:items-center md:flex-row">
          <div className="md:w-1/2 px-2 bg-[#fafafa]">
            <div className="w-full md:pl-8">
              <div className="md:p-6  rounded-lg mt-10 md:mt-0  border-black">
                <div className="flex  mb-4 ">
                  <div className="w-[15%]">
                    <img src={email} alt="icon" className="w-[40px]" />
                  </div>
                  <div className="text-gray-600 w-[70%]">
                    <h1 className="text-2xl">Email :</h1>
                    <h1 className="font-light text-xl ">
                    codecrushtech@gmail.com
                    </h1>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-[15%]">
                    <img src={phone} alt="icon" className="w-[40px]" />
                  </div>
                  <div className="text-gray-600 w-[70%]">
                    <h1 className="text-2xl">Phone :</h1>
                    <h1 className="font-light text-xl">+966 59 059 6656</h1>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-[15%]">
                    <img src={location} alt="icon" className="w-[40px]" />
                  </div>
                  <div className="text-gray-600 w-[70%]">
                    <h1 className="text-2xl">Location :</h1>
                    <h1 className="font-light text-xl">Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital, Murree Road, Rawalpindi</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-[#fafafa] ">
            <div className="px-2  py-8 flex items-center justify-center ">
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
