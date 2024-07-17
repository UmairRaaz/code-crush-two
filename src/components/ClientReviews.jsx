import React from 'react';
import Slider from "react-slick";
import ReviewCard from "./ReviewSection/ReviewCard";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientReviews = () => {
  const NextArrow = ({ onClick }) => (
    <div className="cursor-pointer absolute -bottom-20 right-0 " onClick={onClick}>
      <FaRegArrowAltCircleRight size={60} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="cursor-pointer absolute -bottom-20" onClick={onClick}>
      <FaRegArrowAltCircleLeft size={60} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px", padding: "0px"}}> {dots} </ul>
      </div>
    ),
  };

  const reviews = Array(10).fill(<ReviewCard />);

  return (
    <div className="mt-20 pb-20  min-h-[120vh] bg-[#223555] text-white w-full">
      <h1 className="text-center pb-10 pt-14 text-5xl font-bold">
        What our clients say
      </h1>
      <div className="w-[80%] mx-auto min-h-96">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              {review}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientReviews;
