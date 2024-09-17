import { useState } from "react";
import { useForm } from "react-hook-form";
import remoteResourceImage from "../assets/remoteResourcesBg.png";
import axios from "axios";
import toast from "react-hot-toast";
function RemoteResources() {

  const [showForm, setShowForm] = useState(false);
  const [expertiseFields, setExpertiseFields] = useState([{ id: 1 }]);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false)
  const onSubmit = (data) => {
    setLoading(true);
    axios
        .post("http://localhost:5000/remote-resources", data)
        .then((response) => {
            console.log("Success:", response.data);
            reset();
            setExpertiseFields([{ id: 1 }]);
            setShowForm(true);
            toast.success("Application Submitted");
        })
        .catch((error) => {
            console.error("Error:", error);
            toast.error("Application Submitting Failed");
        })
        .finally(() => {
            setLoading(false); 
        });
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
        className="relative h-[70vh] sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[30vh] border"
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
          className="px-6 text-xl py-3 uppercase bg-[#4e148d] text-white font-semibold rounded-lg shadow-md hover:bg-[#6828E8] transition duration-300"
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
                className="rounded-full border border-blue-800 text-blue-800 px-4 py-2"
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
                className="px-8 py-4 bg-[#4e148d] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#6828E8] transition duration-300"
              >
                {loading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default RemoteResources;
