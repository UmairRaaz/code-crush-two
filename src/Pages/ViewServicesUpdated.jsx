import { detailedservicesContent } from "../Content/detailedContent/ServicesDetailedContent";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
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
          <span className="text-4xl tracking-widest uppercase font-bold border-l-8 border-red-500 pl-2 drop-shadow-md text-gray-700">
            {serviceContent.title}
          </span>
          <p className="mt-6 underline text-gray-800 text-3xl leading-8 font-bold tracking-tight md:text-4xl">
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
            <div
              key={section.title}
              id={section.title.toLowerCase()}
              className="-mb-7"
            >
              <p className="mt-10 text-3xl uppercase max-w-3xl  text-black font-bold">
                {section.description}
              </p>
              <div className="mt-6 max-w-7xl mx-auto space-y-4 text-justify">
                {section.details.map((detail, index) => {
                  const [boldText, ...rest] = detail.includes(":")
                    ? detail.split(/:(.+)/)
                    : [null, detail];

                  return (
                    <p
                      key={index}
                      className="text-black text-xl hover:bg-[#C4DAD2] hover:text-gray-700 hover:scale-105 px-4 cursor-pointer transition-all hover:border-r hover:border-l hover:rounded-md py-4 gap-y-4 md:gap-y-0 border-r border-l md:border-r-0 md:border-l-0 md:border-t-0 md:border-b-0 hover:border-t hover:border-b flex md:flex-row flex-col items-center gap-x-10 border-t border-b border-gray-400 relative group"
                    >
                      {boldText ? (
                        <>
                          <strong className="uppercase text-left mr-4 md:w-[35%]">
                            {boldText}
                          </strong>
                          <span className="flex-1 max-w-sm md:w-[65%] text-lg">
                            {rest.join("")}
                          </span>
                        </>
                      ) : (
                        <span className="flex-1 max-w-2xl md:w-full text-lg">
                          {detail}
                        </span>
                      )}
                      {/* Arrow icon */}
                      <span className="md:block hidden absolute right-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-gray-700 text-white p-2 rounded-full transform -rotate-45 flex items-center justify-center">
                          <FaArrowRight />
                        </span>
                      </span>
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        {/* Call to Action */}
        <div className="bg-indigo-50 p-6 mt-20 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold text-[#4E148D]">
            {serviceContent.partnerWithUs}
          </p>
          <HashLink to="/#contact" className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4E148D] hover:bg-[#6828E8]">
            {serviceContent.callToAction}
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ViewServicesUpdated;
