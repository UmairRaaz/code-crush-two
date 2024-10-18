import { FaChevronRight } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const BlogCard = ({ img , heading, id }) => {
  const navigate = useNavigate()
  const truncateHeading = (heading) => {
    const words = heading.split(" ");
    return words.length > 5 ? words.slice(0, 5).join(" ") + "..." : heading;
  };
  
  return (
    <div onClick={()=> navigate(`/view-blog/${id}`)} className="flex cursor-pointer flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all pb-8">
  <div className="rounded-t-xl">
    <img src={img} alt="image" className="w-full h-56 object-cover" />
  </div>
  <div className="px-4">
    <h1 className="font-bold text-gray-600 mt-4 leading-relaxed">
      {truncateHeading(heading)}
    </h1>
    <p className="text-sm text-gray-500">
      29 Jan 2024 | 2 min read | 219 views
    </p>
    <button  className="text-sm text-gray-700 mt-2 flex gap-2 items-center rounded-2xl">
      <NavLink to={`/view-blog/${id}`}>Read More </NavLink>
      <FaChevronRight className="mt-1 text-gray-700" size={10} />
    </button>
  </div>
</div>

  );
};

export default BlogCard;
