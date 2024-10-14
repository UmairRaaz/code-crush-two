import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuUpload } from "react-icons/lu";
import toast from "react-hot-toast";

const CareersApply = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      // Check if the file is a PDF and less than 5KB
      const maxSizeInKB = 50; // Set size limit (in KB)
      const allowedTypes = ["application/pdf"]; // Allow only PDF files
      if (selectedFile.size > maxSizeInKB * 1024) {
        toast.error(`File size should be less than ${maxSizeInKB}KB.`);
        setFile(null);
        setFileName("");
        return;
      }

      if (!allowedTypes.includes(selectedFile.type)) {
        toast.error("Only PDF files are allowed.");
        setFile(null);
        setFileName("");
        return;
      }

      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const onSubmit = async (data) => {
    if (!file) {
      toast.error("Please upload your CV.");
      return;
    }

    try {
      setLoading(true);

      // Prepare email details
      const emailData = {
        SecureToken: "YOUR_SECURE_TOKEN", // Replace with your secure token
        To: 'umairgopang123@gmail.com', // Replace with recipient's email
        From: `${data.email}`, // Replace with your email
        Subject: "New Job Application",
        Body: `
          First Name: ${data.firstName}\n
          Last Name: ${data.lastName}\n
          Email: ${data.email}\n
          Phone Number: ${data.phoneNumber}\n
          CV Attached: ${fileName} (Check your email for attachments)
        `,
        Attachments: [
          {
            name: file.name,
            path: URL.createObjectURL(file), // Create a temporary URL for the file
          },
        ],
      };

      // Send email using SMTP.js
      Email.send(emailData).then((message) => {
        console.log("Email sent: ", message);
        if (message === "OK") {
          toast.success("Application Submitted Successfully");
          reset();
          setFile(null);
          setFileName("");
        } else {
          toast.error("Failed to submit application");
        }
      });

    } catch (error) {
      console.error("Error sending email: ", error);
      toast.error("Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-100 text-gray-700">
      <section className="py-12">
        <div className="w-[90%] mx-auto px-4">
          <h2 className="text-4xl text-center mb-6">Job Details</h2>
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-md max-w-lg mt-6 mx-auto"
            encType="multipart/form-data" // Specify the form encoding type
          >
            {/* First Name */}
            <div className="mb-4">
              <input
                id="firstName"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className={`appearance-none border-b font-normal w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <input
                id="lastName"
                {...register("lastName", { required: "Last name is required" })}
                className={`appearance-none border-b w-full font-normal py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <input
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                className={`appearance-none border-b font-normal w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                type="tel"
                placeholder="Phone Number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
                className={`appearance-none font-normal border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Add your CV */}
            <div className="mb-4">
              <label
                htmlFor="cv"
                className={`cursor-pointer bg-blue-400 text-white w-44 flex flex-col  ${
                  errors.cv ? "border-red-500" : "border-gray-300 "
                } border-b py-2 transition duration-300 ease-in-out
                  ${errors.cv ? "bg-red-100" : "bg-white"}`}
              >
                <p className="text-gray-700 flex gap-2 items-center">
                  <LuUpload /> <span>Upload Your CV</span>
                </p>
                <input
                  id="cv"
                  type="file"
                  {...register("cv", { required: "CV is required" })}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {errors.cv && (
                <p className="text-red-500 text-xs mt-1">{errors.cv.message}</p>
              )}
              {fileName && (
                <div className="mt-2 text-gray-700">
                  Selected File:{" "}
                  <span className="font-semibold">{fileName}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                disabled={loading}
                className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {loading ? `Submitting` : `Submit Application`}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareersApply;
