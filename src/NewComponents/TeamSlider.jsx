import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowRight style={{ color: "#4e158a", fontSize: "3rem" }} />
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
      <Slider {...settings} className="py-4">
        {teamMembersTwo.map((member, index) => (
          <div
            key={index}
            className="team-member min-h-64 my-10  rounded-lg hover:shadow-2xl transition-shadow flex flex-col justify-center items-center "
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.fullName}
                className="rounded-full object-cover mx-auto w-44 h-44"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-sm font-bold text-black">
                {member.fullName}
              </h2>
              <p className="text-gray-600 text-xs mt-1">{member.designation}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
