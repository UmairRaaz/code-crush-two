import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Send the email using EmailJS
      const emailjsResponse = await emailjs.send(
        "service_portfolioemail",   // Replace with your EmailJS service ID
        "template_3wuznos",  // Replace with your EmailJS template ID
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "ghd6Vxzxu68IXFWRv" // Replace with your EmailJS user ID or public key
      );

      console.log(emailjsResponse);
      toast.success("Message Sent Successfully");
    } catch (error) {
      console.error("Failed to send: ", error);
      toast.error("Message Sending Failed");
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="py-20 bg-[#fafafa]" id="contact">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-4xl mx-auto px-10 rounded-md p-5 border border-gray-200 bg-white shadow-xl"
      >
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full p-2 border-b border-gray-300 focus:ring-indigo-500 font-light outline-none focus:border-indigo-500"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register("message", {
              required: "Message is required",
            })}
            className="mt-1 block w-full p-2 border-b outline-none border-gray-300  focus:ring-indigo-500 font-light focus:border-indigo-500"
            rows="3"
            placeholder="Tell us about your project"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            disabled={loading}
            type="submit"
            className="w-44 mx-auto py-2 px-4 bg-[#4e148d] text-white rounded-full shadow-sm hover:bg-[#6828E8] transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
          >
            {loading ? `Sending Message` : `Send Message`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
