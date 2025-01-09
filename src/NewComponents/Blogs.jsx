import React from "react";
import developmentProcess from "/Images/BlogSectionImages/developmentProcess.webp";
import customSoftware from "/Images/BlogSectionImages/customSoftware.webp";
import powerOfAI from "/Images/BlogSectionImages/powerOfAI.webp";
import BlogCard from "../components/BlogSection/BlogCard";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
const Blogs = () => {
  return (
    <div className=" px-3 md:px-0">
      <div className="flex flex-col  justify-between">
        <div className="flex justify-between">
          <h1 className="text-3xl w-[70%] md:w-full text-gray-700 md:text-5xl font-bold mb-4">
            In-Depth Analysis and Case Studies
          </h1>
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
        <p className="text-base w-full md:max-w-3xl text-gray-600">
          Explore comprehensive articles and detailed case studies showcasing
          our expertise and successful projects in the software development
          field.
          {/* <Link className="text-blue-500">Read More</Link> */}
        </p>
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
        <BlogCard img={powerOfAI} heading="Unleashing the Power of AI" id={3} />
      </div>
    </div>
  );
};

export default Blogs;
