import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ViewAllButton = () => {
  return (
    <a
      className="text-xl w-40 hidden md:visible md:flex items-center justify-center h-14 text-[#4b7dc8] whitespace-nowrap px-4 py-2"
      href="all-services"
    >
      <p>View All</p>
      <span>
        <MdKeyboardArrowRight size={30} />
      </span>
    </a>
  );
};

export default ViewAllButton;
