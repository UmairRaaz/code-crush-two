import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewSection/ReviewCard";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
const ClientReviews = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
        setShowDots(false);
      } else {
        setSlidesToShow(2);
        setShowDots(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NextArrow = ({ onClick }) => (
    <div
      className="cursor-pointer absolute -bottom-20 z-50 right-0 "
      onClick={onClick}
    >
      <FaRegArrowAltCircleRight size={60} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="cursor-pointer absolute -bottom-20 z-50" onClick={onClick}>
      <FaRegArrowAltCircleLeft size={60} />
    </div>
  );

  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        {showDots && (
          <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
        )}
      </div>
    ),
  };

  const reviews = Array(10).fill(<ReviewCard />);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className="mt-20 pb-20  bg-[#223555] text-white"
      id="reviews"
    >
      <h1 className="text-center px-2 md:px-0 pb-10 pt-14 text-5xl font-bold">
        What our clients say
      </h1>
      <div className="mx-auto px-1 md:px-0 md:max-w-7xl">
        <div className="md:w-[80%] mx-auto pb-20 min-h-96">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index}>{review}</div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientReviews;
