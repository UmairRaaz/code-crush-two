import { useState } from "react";
import { useForm } from "react-hook-form";
import remoteResourceImage from "../assets/remoteResourcesBg.png"
function RemoteResources() {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); 
    setShowForm(true); 
  };

  const handleHireClick = () => {
    setShowForm(true);
  };
  console.log("show-form", showForm)
  return (
    <div className="mt-20 pb-20 min-h-screen bg-gray-100 ">
      <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${remoteResourceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl text-center tracking-widest uppercase font-bold">
          Remote Resources
          </h1>
        </div>
      </div>
      {/* Heading */}
      <h1 className="text-3xl pt-10 text-gray-700 md:text-5xl font-bold text-center mb-8">
        We Provide On-Demand Remote Resources
      </h1>

      {/* Mission Statement */}
      <p className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-8">
        Our mission is to revolutionize work practices and eliminate distance
        barriers. Our Remote Resource service is designed to deliver exceptional
        IT services globally, empowering your business with top-quality support
        tailored to your specific needs.
      </p>

      {/* Hire Button */}
      <div className="text-center pb-12">
        <button
          onClick={handleHireClick}
          className="px-8 py-4 bg-[#4e148d] text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Hire
        </button>
      </div>

      {/* Form Section */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          {/* Form Heading */}
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Connect With Our Exceptionally Talented Remote Resources!
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Codecrush Technologies leads the industry in offering exceptional
            remote resources across various sectors. We provide customized
            resources to meet your project requirements. Our flexible model
            allows you to specify the level of expertise and the timeframe you
            need. We will match you with an expert whose goals align perfectly
            with yours, no matter where you are located.
          </p>

          {/* Hire Request Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold">Name:</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold">Email:</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-semibold">Phone Number:</label>
              <input
                type="text"
                {...register("phoneNumber", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-700 font-semibold">Company Name:</label>
              <input
                type="text"
                {...register("companyName", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-gray-700 font-semibold">Project Description:</label>
              <textarea
                {...register("projectDescription", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>

            {/* Required Expertise */}
            <div>
              <label className="block text-gray-700 font-semibold">Required Expertise:</label>
              <select
                {...register("requiredExpertise", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>Junior Developer</option>
                <option>Mid-Level Developer</option>
                <option>Senior Developer</option>
                <option>Project Manager</option>
                <option>Other (please specify)</option>
              </select>
            </div>

            {/* Duration of Hire */}
            <div>
              <label className="block text-gray-700 font-semibold">Duration of Hire:</label>
              <select
                {...register("durationOfHire", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>Less than 1 month</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>More than 6 months</option>
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-gray-700 font-semibold">Start Date:</label>
              <input
                type="date"
                {...register("startDate", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-gray-700 font-semibold">Additional Requirements:</label>
              <textarea
                {...register("additionalRequirements")}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-8 py-4 bg-[#4e148d] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default RemoteResources;
