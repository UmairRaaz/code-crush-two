
import { FaRegCalendarAlt } from "react-icons/fa";
import servicepagebg from "/Images/Banners/servicepagebg.jpg";
import BlogCard from "../components/BlogSection/BlogCard"
import LineEffect from "../components/Buttons/LineEffect";
import { blogsArray } from "../Content/Blogs/BlogContent";
import CommonHeader from "../components/CommonHeader";

const AllBlogs = () => {

  return (
    <div className=" mb-20 bg-white">
      {/* <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${servicepagebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl tracking-widest uppercase font-bold">Blogs</h1>
        </div>
      </div> */}
      <CommonHeader image={servicepagebg} text={"Blogs"}/>
      <div className="bg-[#f4f5fa] min-h-screen ">
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        All Blogs
      </h1>
      <LineEffect />
      <div className="w-[80%] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
          {blogsArray.map((blog, index) => (
            <BlogCard img={blog.image} id={blog.id} heading={blog.title} key={index}/>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllBlogs