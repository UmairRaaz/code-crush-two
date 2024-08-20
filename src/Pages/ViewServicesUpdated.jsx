import React from "react";
import LineEffect from "../components/Buttons/LineEffect";
import { detailedservicesContent } from "../Content/detailedContent/ServicesDetailedContent";
import { useParams } from "react-router-dom";

const ViewServicesUpdated = () => {
  const { serviceid } = useParams();
  const serviceContent = detailedservicesContent.find(
    (service) => service.id === parseInt(serviceid, 10)
  );
  console.log(serviceContent);
  return (
    <div className="min-h-screen md:my-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-[#4E148D] font-bold tracking-wide uppercase">
            {serviceContent.title}
          </h2>
          <p className="mt-6 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {serviceContent.heading}
          </p>
          <p className="mt-4 max-w-3xl text-justify text-xl text-gray-700 mx-auto">
          {serviceContent.description}
          </p>
        </div>

        <div className="mb-12">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            src="https://via.placeholder.com/1200x400"
            alt="UX/UI Design"
          />
        </div>

       

        {serviceContent.sections.map((section) => (
          <div
            key={section.title}
            id={section.title.toLowerCase()}
            className=" max-w-4xl   mx-auto "
          >
            <p className="mt-20 text-3xl text-black font-bold">
              {section.description}
            </p>
            <ul className="mt-6 space-y-4">
              {section.details.map((detail, index) => (
                <li key={index} className="text-black text-xl flex items-start">
                  <span className="mr-2 text-indigo-500">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-indigo-50 p-6 mt-20 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold text-[#4E148D]">
          {serviceContent.partnerWithUs}
          </p>
          <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4E148D] hover:bg-[#6828E8] ">
          {serviceContent.callToAction}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewServicesUpdated;
