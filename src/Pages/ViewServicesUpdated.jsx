import React from "react";
import LineEffect from "../components/Buttons/LineEffect";
import { detailedservicesContent } from "../Content/detailedContent/ServicesDetailedContent";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ViewServicesUpdated = () => {
  const { serviceid } = useParams();
  const serviceContent = detailedservicesContent.find(
    (service) => service.id === parseInt(serviceid, 10)
  );

  return (
    <div className="min-h-screen py-10 bg-white">
      {/* Header Section */}
      <div className="md:mx-auto md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
          <h1 className="text-4xl tracking-widest uppercase font-bold">
            {serviceContent.title}
          </h1>
          <p className="mt-6 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {serviceContent.heading}
          </p>
          <p className="mt-8 text-justify text-xl text-gray-700 mx-auto">
            {serviceContent.description}
          </p>
        </div>
        {/* Banner Image */}
        <div>
          <LazyLoadImage
            alt="Lazy loaded image"
            src={serviceContent.banner}
            effect="blur"
            placeholderSrc={serviceContent.banner}
            className="rounded-xl"
          />
        </div>
        {/* Sections */}
        {serviceContent &&
          serviceContent.sections &&
          serviceContent.sections.length > 0 &&
          serviceContent.sections.map((section) => (
            <div key={section.title} id={section.title.toLowerCase()}>
              <p className="mt-10 text-3xl text-center text-black font-bold">
                {section.description}
              </p>
              <ul className="mt-6 space-y-4 text-justify">
                {section.details.map((detail, index) => {
                  // Split the text into two parts at the first colon if it exists
                  const [boldText, ...rest] = detail.includes(":")
                    ? detail.split(/:(.+)/)
                    : [null, detail];

                  return (
                    <li
                      key={index}
                      className="text-black text-xl flex items-start"
                    >
                      <span className="mr-2 text-indigo-500">•</span>
                      <span>
                        {boldText ? (
                          <>
                            <strong className="">
                              {boldText}: {" "}
                            </strong>
                            {rest.join("")}
                          </>
                        ) : (
                          detail
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        {/* Call to Action */}
        <div className="bg-indigo-50 p-6 mt-20 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold text-[#4E148D]">
            {serviceContent.partnerWithUs}
          </p>
          <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4E148D] hover:bg-[#6828E8]">
            {serviceContent.callToAction}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewServicesUpdated;
