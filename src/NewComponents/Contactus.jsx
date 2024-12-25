import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const appUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(`${appUrl}/jobs/emails/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          subject: "Query Message",
        }),
      });

      const json = await response.json();
      if (response.status === 200) {
        toast.success("Message Sent Successfully");
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      console.error("Failed to send: ", error);
      toast.error("Message Sending Failed");
    } finally {
      setLoading(false);
      reset(); // Reset the form after submission
    }
  };

  return (
    <div id="contact">
      <div>
        <div className="flex flex-col gap-4 lg:flex-row items-start justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full mb-10 mt-8 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Follow us on social media for the latest updates, tips, and news
              about our Word add-on plugin for patent writing.
            </p>
          </div>

          {/* Right Section: Contact Form */}
          <div className="lg:w-1/2 w-full bg-white p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Username Field */}
              <div className="relative">
                <FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="pl-10 pr-4 py-3 w-full bg-[#E8E9F4] rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <FiMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-3 w-full bg-[#E8E9F4] rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div className="relative">
                <FiPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="pl-10 pr-4 py-3 w-full bg-[#E8E9F4] rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                  {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <FiMessageSquare className="absolute top-3 left-3 text-gray-400 text-xl" />
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="pl-10 pr-4 py-3 w-full bg-[#E8E9F4] rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm resize-none"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-full bg-[#4E148D] hover:bg-purple-700 text-white font-semibold py-3 rounded-full shadow-md transition duration-300"
                disabled={loading}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FiSend className="mr-2 text-xl" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
