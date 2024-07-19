import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BlogCard = ({ img }) => {
  return (
    <div className=" flex flex-col">
      <div className="">
        <img src={img} alt="image" className="w-full h-72 object-cover" />
      </div>
      <div className="">
        <h1 className="font-bold text-gray-600 mt-4 leading-relaxed">
          29 Jan 2024 | 2 min read | 219 views
        </h1>
        <p className="text-sm text-gray-500">
          Best Practices for Agile Software Development
        </p>
        <button className="text-sm  text-gray-700 mt-2 flex gap-2 items-center rounded-2xl ">
          <NavLink to={"/view-blog/:blogid"}>Read More </NavLink>
          <FaChevronRight className="mt-1  text-gray-700 " size={10} />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
