import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuUpload } from "react-icons/lu";
import { toast } from "react-hot-toast";

const InternshipForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const appUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phoneNumber);
      formData.append("address", data.address);
      formData.append("education", data.education);
      formData.append("speciality", data.speciality);
      formData.append("experience", data.experience);
      formData.append("interest", data.interest);
      formData.append("subject", "Internship Application");
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
    }
    finally {
      setLoading(false);
      reset(); // Reset the form after submission
    }
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md max-w-2xl border border-gray-400 mt-6 mx-auto"
    >
      {/* Full Name */}
      <div className="mb-4">
        <input
          id="fullName"
          {...register("fullName", {
            required: "Full name is required",
          })}
          className={`appearance - none border - b font - normal w - full py - 2 px - 3 text - gray - 700 leading - tight focus: outline - none focus: shadow - outline ${errors.fullName ? "border-red-500" : ""
            }`}
          type="text"
          placeholder="Full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
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
              message: "Invalid email format",
            },
          })}
          className={`appearance - none border - b font - normal w - full py - 2 px - 3 text - gray - 700 leading - tight focus: outline - none focus: shadow - outline ${errors.email ? "border-red-500" : ""
            }`}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number (Pakistani Format) */}
      <div className="mb-4">
        <input
          id="phoneNumber"
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: /^((\+92)|(92)|(0))3\d{2}-?\d{7}$/,
              message: "Phone number must be in Pakistani format",
            },
          })}
          className={`appearance - none border - b font - normal w - full py - 2 px - 3 text - gray - 700 leading - tight focus: outline - none focus: shadow - outline ${errors.phoneNumber ? "border-red-500" : ""
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

      {/* Address */}
      <div className="mb-4">
        <input
          id="address"
          {...register("address", {
            required: "Address is required",
          })}
          className={`appearance - none border - b font - normal w - full py - 2 px - 3 text - gray - 700 leading - tight focus: outline - none focus: shadow - outline ${errors.address ? "border-red-500" : ""
            }`}
          type="text"
          placeholder="Address"
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
        )}
      </div>

      {/* Education */}
      <div className="mb-4">
        <input
          id="education"
          {...register("education", {
            required: "Education details are required",
          })}
          className={`appearance - none border - b font - normal w - full py - 2 px - 3 text - gray - 700 leading - tight focus: outline - none focus: shadow - outline ${errors.education ? "border-red-500" : ""
            }`}
          type="text"
          placeholder="Education"
        />
        {errors.education && (
          <p className="text-red-500 text-xs mt-1">{errors.education.message}</p>
        )}
      </div>

      {/* Speciality */}
      <div className="mb-4">
        <input
          id="speciality"
          {...register("speciality", {
            required: "Speciality is required",
          })}
          className={`appearance - none border - b font - normal w - full py - 2 px - 3 text - gray - 700 leading - tight focus: outline - none focus: shadow - outline ${errors.speciality ? "border-red-500" : ""
            }`}
          type="text"
          placeholder="Speciality"
        />
        {errors.speciality && (
          <p className="text-red-500 text-xs mt-1">
            {errors.speciality.message}
          </p>
        )}
      </div>

      {/* Experience */}
      <div className="mb-4">
        <input
          id="experience"
          {...register("experience", {
            required: "Experience details are required",
          })}
          className={`appearance - none border - b font - normal w - full py - 2 px - 3 text - gray - 700 leading - tight focus: outline - none focus: shadow - outline ${errors.experience ? "border-red-500" : ""
            }`}
          type="text"
          placeholder="Experience"
        />
        {errors.experience && (
          <p className="text-red-500 text-xs mt-1">
            {errors.experience.message}
          </p>
        )}
      </div>

      {/* Interest */}
      <div className="mb-4">
        <input
          id="interest"
          {...register("interest", {
            required: "Interest is required",
          })}
          className={`appearance - none border - b font - normal w - full py - 2 px - 3 text - gray - 700 leading - tight focus: outline - none focus: shadow - outline ${errors.interest ? "border-red-500" : ""
            }`}
          type="text"
          placeholder="Interest"
        />
        {errors.interest && (
          <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>
        )}
      </div>

      {/* Add your CV */}
      <div className="mb-4">
        <label
          htmlFor="cv"
          className={`cursor - pointer bg - blue - 400 text - white w - 44 flex flex - col ${errors.cv ? "border-red-500" : "border-gray-300 "
            } border - b py - 2 transition duration - 300 ease -in -out
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

      <div className="flex items-center justify-between">
        <button
          disabled={loading}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {loading ? "Submitting" : "Submit Application"}
        </button>
      </div>

    </form>
  );
};

export default InternshipForm;
