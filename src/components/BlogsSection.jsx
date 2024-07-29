import { FaChevronRight } from "react-icons/fa";
import BlogCard from "./BlogSection/BlogCard";
import ViewAllButton from "./Buttons/ViewAllButton";
import LineEffect from "./Buttons/LineEffect";
import { motion } from "framer-motion";
const BlogsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className="my-20 w-full"
    >
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0  mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold my-4 mb-8">
            In-Depth Analysis and Case Studies
          </h1>
          <LineEffect />
          <p className=" text-gray-600 max-w-2xl mt-4 text-center">
            Explore comprehensive articles and detailed case studies showcasing
            our expertise and successful projects in the software development
            field.
          </p>
          <div className="flex justify-end">
            <ViewAllButton link={"/all-blogs"} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <BlogCard
            img={
              "https://images.unsplash.com/photo-1688793488916-c9416f9a4480?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <BlogCard
            img={
              "https://images.unsplash.com/photo-1699004642520-b48fa2465840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
            }
          />
          <BlogCard
            img={
              "https://images.unsplash.com/photo-1706459061049-7aeaa97069e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogsSection;
