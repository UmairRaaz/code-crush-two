import React from "react";
import developmentProcess from "/Images/BlogSectionImages/developmentProcess.webp";
import customSoftware from "/Images/BlogSectionImages/customSoftware.webp";
import powerOfAI from "/Images/BlogSectionImages/powerOfAI.webp";
import BlogCard from "../components/BlogSection/BlogCard";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
const Blogs = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-xl text-left text-gray-700 md:text-3xl font-bold mb-4">
              In-Depth Analysis and Case Studies
            </h1>
            <p className="text-base text-left max-w-3xl md:text-left text-gray-600">
              Explore comprehensive articles and detailed case studies
              showcasing our expertise and successful projects in the software
              development field.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <NavLink
              className="text-xl rounded-full flex gap-x-2 items-center justify-center text-white h-10 bg-[#4e148d] whitespace-nowrap px-4 py-1"
              to={"/all-blogs"}
            >
              <p>View All</p>
              <span>
                <GoArrowUpRight size={20} />
              </span>
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <BlogCard
            img={developmentProcess}
            heading="Our Proven Development Process"
            id={1}
          />
          <BlogCard
            img={customSoftware}
            heading="The Power of Custom Software Services"
            id={2}
          />
          <BlogCard
            img={powerOfAI}
            heading="Unleashing the Power of AI"
            id={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
