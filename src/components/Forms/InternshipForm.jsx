import { useState } from "react";
import { useForm } from "react-hook-form";
import remoteResourceImage from "/remoteResourcesBg.webp";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';

function RemoteResources() {
  const [showForm, setShowForm] = useState(false);
  const [expertiseFields, setExpertiseFields] = useState([{ id: 1 }]);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    
    // EmailJS integration to send email
    emailjs.send(
      "your_service_id", // replace with your EmailJS service ID
      "your_template_id", // replace with your EmailJS template ID
      data,
      "your_user_id" // replace with your EmailJS user ID (or public key)
    )
    .then((response) => {
      console.log("Success:", response.status, response.text);
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
    <div className="mt-20 pb-20 min-h-screen bg-gray-100">
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
          <p className="text-gray-900 mb-8 text-justify">
            Codecrush Technologies leads the industry in offering exceptional
            remote resources across various sectors. We provide customized
            resources to meet your project requirements. Our flexible model
            allows you to specify the level of expertise and the timeframe you
            need. We will match you with an expert whose goals align perfectly
            with yours, no matter where you are located.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Form fields remain unchanged */}

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
