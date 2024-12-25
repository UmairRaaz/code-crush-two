import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collabaration = () => {
  const brandImages = [
    { id: 1, src: "/Images/CollabarationSection/image(1).png", alt: "Brand 1" },
    { id: 2, src: "/Images/CollabarationSection/image(2).png", alt: "Brand 2" },
    { id: 3, src: "/Images/CollabarationSection/image(3).png", alt: "Brand 3" },
    { id: 4, src: "/Images/CollabarationSection/image(4).png", alt: "Brand 4" },
    { id: 5, src: "/Images/CollabarationSection/image(5).png", alt: "Brand 5" },
    { id: 5, src: "/Images/CollabarationSection/image(6).png", alt: "Brand 5" },
  ];

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For tablet screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-[#E8E9F4] mt-10 pt-4">
      <div className="md:max-w-4xl  lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        <h1 className="text-4xl text-black font-bold mb-2 text-left">
          Collaborations & Partnerships
        </h1>
        <Slider {...settings}>
          {brandImages.map((brand) => (
            <div key={brand.id} className="px-4">
              <img
                src={brand.src}
                alt={brand.alt}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collabaration;
