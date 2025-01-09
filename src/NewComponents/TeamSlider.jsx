import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowRight style={{ color: "#4e158a" }} />
    </div>
  );
}

function SamplePrevious(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowLeft style={{ color: "#4e158a" }} />
    </div>
  );
}

const TeamSlider = ({ teamMembersTwo }) => {
  const settings = {
    dots: false, // No dots
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 4, // Default to showing 4 cards
    slidesToScroll: 1, // Scroll one card at a time
    arrows: true, // Enable custom arrows
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevious />,

    responsive: [
      {
        breakpoint: 1024, // When screen width is below 1024px
        settings: {
          slidesToShow: 2, // Show 2 cards
        },
      },
      {
        breakpoint: 768, // When screen width is below 768px
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };

  return (
    <div className="mt-8 px-4">
    <Slider {...settings} className="py-4 team-slider">
      {teamMembersTwo.map((member, index) => (
        <div
          key={index}
          className="px-4" // Add padding here to control gap
        >
          <div className="team-member border border-gray-300 min-h-64 my-10 rounded-lg hover:shadow-2xl hover:border hover:border-gray-600 transition-all duration-300 ease-in-out flex flex-col justify-center items-center py-2">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full object-cover mx-auto w-44 h-44"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-sm font-bold text-black">
                {member.name}
              </h2>
              <p className="text-gray-600 text-xs mt-1">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default TeamSlider;
