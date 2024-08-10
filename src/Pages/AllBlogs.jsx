
import { FaRegCalendarAlt } from "react-icons/fa";
import servicepagebg from "../assets/servicepagebg.jpg";
import BlogCard from "../components/BlogSection/BlogCard"
import LineEffect from "../components/Buttons/LineEffect";
const AllBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      author: "John Doe",
      date: "2023-05-15",
      imageUrl: "https://via.placeholder.com/300x150",
      description:
        "Learn the basics of React Hooks and how they can simplify your component logic.",
      link: "#",
    },
    {
      id: 2,
      title: "Responsive Web Design Techniques",
      author: "Jane Smith",
      date: "2023-04-20",
      imageUrl: "https://via.placeholder.com/300x150",
      description:
        "Explore strategies and tools for creating responsive designs that work across devices.",
      link: "#",
    },
    {
      id: 2,
      title: "Responsive Web Design Techniques",
      author: "Jane Smith",
      date: "2023-04-20",
      imageUrl: "https://via.placeholder.com/300x150",
      description:
        "Explore strategies and tools for creating responsive designs that work across devices.",
      link: "#",
    },
    {
      id: 2,
      title: "Responsive Web Design Techniques",
      author: "Jane Smith",
      date: "2023-04-20",
      imageUrl: "https://via.placeholder.com/300x150",
      description:
        "Explore strategies and tools for creating responsive designs that work across devices.",
      link: "#",
    },
    {
      id: 2,
      title: "Responsive Web Design Techniques",
      author: "Jane Smith",
      date: "2023-04-20",
      imageUrl: "https://via.placeholder.com/300x150",
      description:
        "Explore strategies and tools for creating responsive designs that work across devices.",
      link: "#",
    },
    {
      id: 2,
      title: "Responsive Web Design Techniques",
      author: "Jane Smith",
      date: "2023-04-20",
      imageUrl: "https://via.placeholder.com/300x150",
      description:
        "Explore strategies and tools for creating responsive designs that work across devices.",
      link: "#",
    },
    {
      id: 2,
      title: "Responsive Web Design Techniques",
      author: "Jane Smith",
      date: "2023-04-20",
      imageUrl: "https://via.placeholder.com/300x150",
      description:
        "Explore strategies and tools for creating responsive designs that work across devices.",
      link: "#",
    },
  ];
  return (
    <div className=" mt-20 bg-white">
      <div
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
      </div>
      <div className="bg-[#f4f5fa] min-h-screen ">
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        All Blogs
      </h1>
      <LineEffect />
      <div className="w-[80%] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
          {blogs.map((blog, index) => (
            <BlogCard img={"https://images.unsplash.com/photo-1688793488916-c9416f9a4480?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} key={index}/>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllBlogs