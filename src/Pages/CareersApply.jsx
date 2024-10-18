import { useState } from "react";
import { useForm } from "react-hook-form";
import LineEffect from "../components/Buttons/LineEffect";
import { LuUpload } from "react-icons/lu";
import toast from "react-hot-toast";

const CareersApply = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const appUrl = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("fullName", `${data.firstName} ${data.lastName}`);
      formData.append("email", data.email);
      formData.append("phone", data.phoneNumber);
      formData.append("subject", "Job Application");

      // Append the file if it's selected
      if (file) {
        formData.append('file', file); // 'file' should match the server's expectation
      }

      // Log FormData entries
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value instanceof File ? value.name : value}`);
      }

      const response = await fetch(`${appUrl}/jobs/emails/send`, {
        method: "POST",
        body: formData,
      });

      // Handle response
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Response:", jsonResponse);
        toast.success("Application sent successfully!");
      } else {
        throw new Error('Failed to send application');
      }
    } catch (error) {
      console.error("Failed to send: ", error);
      toast.error("Message Sending Failed");
    } finally {
      setLoading(false);
      reset(); // Reset the form after submission
    }
  }

  return (
    <div className="min-h-screen mt-20 bg-gray-100 text-gray-700">
      <section className="py-12">
        <div className="w-[90%] mx-auto px-4">
          <h2 className="text-4xl text-center mb-6">Job Details</h2>
          <LineEffect />
          <div className="bg-white p-6 rounded-lg my-8">
            <h3 className="text-5xl font-bold mb-4">Frontend Developer</h3>
            <p className="mb-4">
              <strong>Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Develop and maintain web applications using HTML, CSS, and
                JavaScript.
              </li>
              <li>
                Collaborate with designers and backend developers to create
                seamless user experiences.
              </li>
              <li>Ensure the technical feasibility of UI/UX designs.</li>
              <li>Optimize applications for maximum speed and scalability.</li>
            </ul>
            <p className="mb-4">
              <strong>Requirements:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Proven experience as a Frontend Developer or similar role.
              </li>
              <li>
                Familiarity with responsive design and cross-browser
                compatibility.
              </li>
              <li>
                Strong understanding of JavaScript frameworks such as React or
                Angular.
              </li>
              <li>Excellent problem-solving skills and attention to detail.</li>
            </ul>
            <p className="mb-4">
              <strong>Benefits:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Competitive salary and benefits package.</li>
              <li>Opportunities for professional growth and development.</li>
              <li>Collaborative and inclusive work environment.</li>
              <li>Flexible working hours and remote work options.</li>
            </ul>
          </div>
          <h2 className="text-3xl text-center font-bold mb-8">
            Apply for a Position
          </h2>
          <LineEffect />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-md max-w-lg mt-6 mx-auto"
          >
            {/* First Name */}
            <div className="mb-4">
              <input
                id="firstName"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className={`appearance-none border-b font-normal w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? "border-red-500" : ""
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
                className={`appearance-none border-b w-full font-normal py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.lastName ? "border-red-500" : ""
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
                className={`appearance-none border-b font-normal w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNumber ? "border-red-500" : ""
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
                className={`appearance-none font-normal border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""
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
                className={`cursor-pointer bg-blue-400 text-white w-44 flex flex-col ${errors.cv ? "border-red-500" : "border-gray-300 "
                  } border-b py-2 transition duration-300 ease-in-out
                  ${errors.cv ? "bg-red-100" : "bg-white"}`}
              >
                <p className="text-gray-700 flex gap-2 items-center">
                  <LuUpload /> <span>Upload Your CV</span>
                </p>
                <input type="file" onChange={handleFileChange} />
              </label>
              {errors.cv && (
                <p className="text-red-500 text-xs mt-1">{errors.cv.message}</p>
              )}
              {fileName && (
                <p className="text-gray-500 text-xs mt-1">{fileName}</p>
              )}
            </div>

            <div className="flex justify-center mb-4">
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-6 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Application"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareersApply;
