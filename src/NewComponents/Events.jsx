import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowRight style={{ color: "#4e158a" }} className="arrows" />
    </div>
  );
}

function SamplePrevious(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowLeft
        style={{ color: "#4e158a" }}
        className="text-center absolute"
      />
    </div>
  );
}

const Events = () => {
  const eventdata = [
    { title: "Hackathon Heroes", image: "/Images/events/Image(1).png" },
    { title: "Tech Talks @ Code Crush", image: "/Images/events/Image(2).png" },
    { title: "Annual Team Retreat", image: "/Images/events/Image(3).png" },
    { title: "Code Crush Career Fair", image: "/Images/events/Image(4).png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevious />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: true },
      },
    ],
  };

  return (
    <div className="bg-[#E8E9F4] py-4">
      <div className="md:max-w-4xl my-10 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        {/* Header */}
        <h1 className="text-4xl text-left ml-4 text-gray-700 md:text-5xl font-bold mb-4">
          Code Crush Events
        </h1>

        {/* Slider */}
        <div className="mt-8">
          <Slider {...settings} className="events">
            {eventdata.map((event, index) => (
              <div key={index} className="px-4 cursor-pointer">
                <div className="relative flex flex-col items-center overflow-hidden group">
                  {/* Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-96 h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "transparent" }}
                  />

                  {/* Title with Blurred Background */}
                  <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md py-2 group-hover:bottom-1/2 group-hover:translate-y-1/2 transition-all duration-300">
                    <h3 className="text-white text-center text-lg font-semibold">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Events;
