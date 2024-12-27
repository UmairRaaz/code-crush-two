import React from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go"; 

import Slider from "react-slick"; // Importing react-slick
import { projects } from "../Content/ProjectContent/ProjectDeatils"; // Assuming your project data is here
import {  AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowRight class="arrows " style={{ color: "#4e158a" }} />
    </div>
  );
}
const ShowcasingProjects = () => {
  const navigate = useNavigate()
  const settings = {
    dots: false, // No dots
    infinite: true, // Infinite scroll
    speed: 500, // Animation speed
    slidesToShow: 3, // Default to showing 3 projects at a time
    slidesToScroll: 1, // Scroll one at a time
    arrows: true, // Enable arrows
    nextArrow: <SampleNextArrow to="next" />,
    centerMode: true, // Enable centering for slides
    centerPadding: "10px", // Add padding to the center item to ensure spacing
    responsive: [
      {
        breakpoint: 1024, // When the screen is smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 projects at a time
          centerMode: true, // Enable centering of items for better spacing
        },
      },
      {
        breakpoint: 768, // When the screen is smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 project at a time
          centerMode: true, // Center the items on small screens
        },
      },
    ],
  };
  return (
    <div className="bg-[#E8E9F4] py-4 ">
      <div className="md:max-w-4xl my-10 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        <div className="flex px-4 flex-col md:flex-row justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-4xl text-left text-gray-700 md:text-5xl font-bold ">
                Showcasing Our Success Stories
              </h1>
              <div className="flex justify-center md:justify-end">
                <NavLink
                  className="text-xl rounded-full flex gap-x-2 items-center justify-center text-white h-10 bg-[#4e148d] whitespace-nowrap px-4 py-1"
                  to={"/all-projects"}
                >
                  <p>View All</p>
                  <span>
                    <GoArrowUpRight size={20} />
                  </span>
                </NavLink>
              </div>
            </div>
            <p className="text-base mt-4 text-left md:text-left text-gray-600">
              Explore our featured projects to see how Code Crush Technology
              transforms ideas into impactful solutions. Each project highlights
              our commitment to innovation, quality, and excellence.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
              onClick={() => navigate(`/view-project/${project.id}`)}
              key={index} className="project-card cursor-pointer px-4">
                <div className="p-6 bg-white rounded-lg shadow-lg w-full h-72 ">
                  <img
                    src={project.image} // Assuming you have images in your project data
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-md text-black text-center">
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ShowcasingProjects;
