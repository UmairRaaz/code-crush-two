import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactSection = () => {
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

      // Prepare the request options
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the Content-Type is set to application/json
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          subject: data.message,
        }),
      };

      // Send the request
      const response = await fetch(
        "https://codecrushbackend.vercel.app/contact",
        requestOptions
      );

      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      console.log(responseData);
      toast.success("Message Sent Successfully");
    } catch (error) {
      console.error("Failed to send: ", error);
      toast.error("Message Sending Failed");
    } finally {
      setloading(false);
      reset();
    }

    console.log(data);
  };

  return (
    <div className="py-20 bg-[#fafafa] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-4xl mx-auto px-10 rounded-md p-5 border border-gray-200 bg-white shadow-xl "
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
            className="w-44 mx-auto py-2 px-4 bg-[#4e148d] text-white rounded-full shadow-sm  hover:bg-[#6828E8] transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
          >
            {loading ? `Sending Message` : `Send Message`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
