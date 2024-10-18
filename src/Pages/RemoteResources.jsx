import { useState } from "react";
import { useForm } from "react-hook-form";
import remoteResourceImage from "/Images/Banners/remoteResourcesBg.webp";
import axios from "axios";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
function RemoteResources() {
  const [showForm, setShowForm] = useState(false);
  const [expertiseFields, setExpertiseFields] = useState([{ id: 1 }]);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Convert the expertise array into a string
      const requiredExpertise = data.expertise
        .map((expert) => {
          return `Expertise: ${expert.nameOfExpertise}, Number: ${expert.numberOfExpertise}, Duration: ${expert.durationOfHire}`;
        })
        .join("\n"); // Join array elements with line breaks

      // Send the email using EmailJS
      const emailjsResponse = await emailjs.send(
        "service_portfolioemail", // Replace with your EmailJS service ID
        "template_unh1ypm", // Replace with your EmailJS template ID
        {
          additionalRequirements: data.additionalRequirements,
          companyName: data.companyName,
          email: data.email,
          name: data.name,
          phoneNumber: data.phoneNumber,
          projectDescription: data.projectDescription,
          requiredExpertise, // Expertise array converted to string
          startDate: data.startDate,
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

  const handleHireClick = () => {
    setShowForm(true);
  };

  const handleAddMore = () => {
    setExpertiseFields([
      ...expertiseFields,
      { id: expertiseFields.length + 1 },
    ]);
  };

  return (
    <div className="mt-20 pb-20 min-h-screen bg-gray-100 ">
      <div
        className="relative h-[70vh] sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
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

      <div className="md:w-[70%] mx-auto">
        <h1 className="text-3xl pt-10 text-center mx-auto text-gray-700 md:text-5xl font-bold mb-8">
          We Provide On-Demand Remote Resources
        </h1>

        <p className="text-lg md:text-xl px-3 text-justify mx-auto mb-8">
          Our mission is to revolutionize work practices and eliminate distance
          barriers. Our Remote Resource service is designed to deliver
          exceptional IT services globally, empowering your business with
          top-quality support tailored to your specific needs.
        </p>
      </div>

      <div className="text-center pb-12">
        <button
          onClick={handleHireClick}
          className="w-20 uppercase mx-auto py-2 px-4 bg-[#4e148d] text-white rounded-full shadow-sm hover:bg-[#6828E8] transition duration-300   mt-4"
        >
          Hire
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg md:w-[70%] mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Connect With Our Exceptionally Talented Remote Resources!
          </h2>
          <p className="text-gray-900 mb-8  text-justify">
            Codecrush Technologies leads the industry in offering exceptional
            remote resources across various sectors. We provide customized
            resources to meet your project requirements. Our flexible model
            allows you to specify the level of expertise and the timeframe you
            need. We will match you with an expert whose goals align perfectly
            with yours, no matter where you are located.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Name:</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Email:
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Phone Number:
              </label>
              <input
                type="text"
                {...register("phoneNumber", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Company Name:
              </label>
              <input
                type="text"
                {...register("companyName", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Project Description:
              </label>
              <textarea
                {...register("projectDescription", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Required Expertise:
              </label>
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

            {expertiseFields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Name of Expertise {index + 1}:
                  </label>
                  <select
                    {...register(`expertise[${index}].nameOfExpertise`, {
                      required: true,
                    })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option>Web Developer</option>
                    <option>App Developer</option>
                    <option>UI/UX Designer</option>
                    <option>Social Media Marketer</option>
                    <option>Content Management System</option>
                    <option>Technical Supporter</option>
                    <option>SEO Service</option>
                    <option>Custom Software Developer</option>
                    <option>Ecommerce Solution</option>
                    <option>Digital Marketer</option>
                    <option>IT Consultant</option>
                    <option>Cyber Securitist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Number of Expertise {index + 1}:
                  </label>
                  <select
                    {...register(`expertise[${index}].numberOfExpertise`, {
                      required: true,
                    })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Duration of Hire {index + 1}:
                  </label>
                  <select
                    {...register(`expertise[${index}].durationOfHire`, {
                      required: true,
                    })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option>Less than 1 month</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>More than 6 months</option>
                  </select>
                </div>
              </div>
            ))}

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={handleAddMore}
                className="rounded-full border-2 hover:bg-[#4e148d] hover:text-white transition-all border-[#4e148d] text-[#4e148d] px-2 py-1"
              >
                Add More
              </button>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Start Date:
              </label>
              <input
                type="date"
                {...register("startDate", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Additional Requirements:
              </label>
              <textarea
                {...register("additionalRequirements")}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>

            <div className="text-center mt-6">
              <button
                disabled={loading}
                type="submit"
                className="w-44 mx-auto py-2 px-4 bg-[#4e148d] text-white rounded-full shadow-sm hover:bg-[#6828E8] transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
              >
                {loading ? `Submitting` : `Submit`}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default RemoteResources;
