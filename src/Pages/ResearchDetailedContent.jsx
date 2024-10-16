import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { researhAndDevelopmentContent } from "../Content/ResearchContent";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

const ResearchDetailedContent = () => {
  const { serviceid } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const fetchedData = researhAndDevelopmentContent.find(
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
      <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white px-2 md:px-0  text-4xl text-center tracking-widest uppercase font-bold">
            {data.name}
          </h1>
        </div>
      </div>
      <div className="w-[90%]  md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mt-8 md:p-6">
        <h1 className="text-4xl uppercase text-center font-bold mb-8">
          {data?.subname}
        </h1>
        <p className="text-lg mb-8">{data?.description}</p>

        {/* How we help section */}
        <section>
          <h2 className="text-4xl font-bold uppercase mb-8 text-center">
            {data.howHelp.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.howHelp.list.map((item, index) => (
              <div
                key={index}
                className="bg-white hover:bg-[#BF2EF0] transition-all hover:text-white cursor-pointer hover:scale-105 py-8 h-80  px-6 shadow-lg rounded-lg"
              >
                <div className="">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-12 h-12 max-h-[20%] mx-auto bg-white mb-4 rounded-2xl  shadow-xl object-fill"
                  />
                </div>

                <h3 className="text-xl  h-[20%] font-medium text-center">
                  {item.heading}
                </h3>
                <p className="text-base mt-2 h-[60%] text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach for development section */}
        <section className="mt-10">
          <h2 className="text-4xl uppercase font-bold my-8 text-center">
            {data.approachForDevelopment.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.approachForDevelopment.list.map((item, index) => {
              const isOdd = data.approachForDevelopment.list.length % 2 !== 0; // Check if the number of items is odd
              const isLastItem =
                index === data.approachForDevelopment.list.length - 1; // Check if this is the last item

              return (
                <div
                  key={index}
                  className={`bg-white cursor-pointer hover:bg-[#86AB89] hover:text-white hover:scale-105 transition-all shadow-lg px-8 md:px-4 py-8 p-4 rounded-lg ${
                    isOdd && isLastItem
                      ? "md:col-span-2 w-full md:max-w-2xl md:mx-auto"
                      : ""
                  }`}
                >
                  <h3 className="text-xl text-bold text-center font-medium">
                    {item.title}
                  </h3>
                  <p className="text-base text-justify mt-2">{item.heading}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Industries section */}
        <section className="mt-10">
          <h2 className="text-4xl uppercase font-bold mb-4 text-center">
            {data.industires.name}
          </h2>
          <p className="mb-6">{data.industires?.title}</p>
          <div className="grid grid-cols-1 gap-y-6 gap-x-2 md:grid-cols-4">
            {data.industires?.list.map((industry, index) => (
              <p
                key={index}
                className=" text-lg bg-gray-500 shadow-xl text-white rounded-xl py-2 px-6 text-center flex items-center justify-center"
              >
                {industry}
              </p>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-10 flex items-center justify-center">
          <HashLink to="/#contact" className="bg-blue-600 flex items-center gap-2 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            {data.callToActionButton}
            <IoMdArrowDroprightCircle size={20} className="mt-1" />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetailedContent;
