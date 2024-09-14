import { useEffect, useState } from "react";

import { industriesDetailedContent } from "../Content/IndustriesContent";
import { useParams } from "react-router-dom";

const IndustriesDetailedPage = () => {
  const { serviceid } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const fetchedData = industriesDetailedContent.find(
        (content) => content.id === parseInt(serviceid, 10)
      );
      setData(fetchedData);
      setLoading(false);
    };

    fetchData();
  }, [serviceid]);

  if (loading) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }
  console.log(data);
  // Check if data exists before rendering
  if (!data) {
    return <div className="container mx-auto p-6">Service not found</div>;
  }

  return (
    <div className="py-10 pb-20 bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${data.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl text-center tracking-widest uppercase font-bold">
            {data.title}
          </h1>
        </div>
      </div>
      <div className="w-[90%] text-justify md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mt-8 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
          {data.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Fashion ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Offerings Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            {data.offering.title}
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3">
            {data.offering.list.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-lg">
                <h3 className="text-2xl text-center font-bold text-[#4e148d]  mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Can We Help Section */}
        <div className="bg-indigo-50 mt-12 p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl font-bold text-[#4e148d] ">
            {data.offering.howCanWeHelp.title}
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            {data.offering.howCanWeHelp.desc}
          </p>
          <button className="mt-6 px-6 py-3 text-[#4e148d] border border-[#4e148d]  rounded-lg text-lg hover:bg-[#6828E8] hover:text-white">
            {data.offering.howCanWeHelp.button}
          </button>
        </div>
      </div>
      {/* Image Section */}
    </div>
  );
};

export default IndustriesDetailedPage;
