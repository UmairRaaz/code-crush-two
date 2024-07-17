import { FaChevronRight } from "react-icons/fa";

const BlogsSection = () => {
  return (
    <div className="mt-20 w-full">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold my-4">
            In-Depth Analysis and Case Studies
          </h1>
          <p className=" text-gray-600 max-w-2xl">
            Explore comprehensive articles and detailed case studies showcasing
            our expertise and successful projects in the software development
            field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div>
            <div className="h-[60%]">
              <img
                src="https://images.unsplash.com/photo-1688793488916-c9416f9a4480?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[40%]">
              <h1 className="font-bold text-gray-600 mt-4 leading-relaxed">
                29 Jan 2024 | 2 min read | 219 views
              </h1>
              <p className="text-sm text-gray-500">
                Best Practices for Agile Software Development
              </p>
              <button className="text-sm  text-gray-700 mt-2 flex gap-2 items-center rounded-2xl ">
                <span>Read More </span>
                <FaChevronRight className="mt-1  text-gray-700 " size={10}/>
              </button>
            </div>
          </div>
          <div>
            <div className="h-[60%]">
              <img
                src="https://images.unsplash.com/photo-1699004642520-b48fa2465840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[40%]">
              <h1 className="font-bold text-gray-600 mt-4">
                29 Jan 2024 | 2 min read | 219 views
              </h1>
              <p className="text-sm text-gray-500">
                Best Practices for Agile Software Development
              </p>
              <button className="text-sm  text-gray-700 mt-2 flex gap-2 items-center rounded-2xl ">
                <span>Read More </span>
                <FaChevronRight className="mt-1  text-gray-700 " size={10}/>
              </button>
            </div>
          </div>
          <div className="">
            <div className="h-[60%]">
              <img
                src="https://images.unsplash.com/photo-1706459061049-7aeaa97069e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
                alt="image"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="h-[40%]">
              <h1 className="font-bold text-gray-600 mt-4">
                29 Jan 2024 | 2 min read | 219 views
              </h1>
              <p className="text-sm text-gray-500">
                Best Practices for Agile Software Development
              </p>
              <button className="text-sm  text-gray-700 mt-2 flex gap-2 items-center rounded-2xl ">
                <span>Read More </span>
                <FaChevronRight className="mt-1  text-gray-700 " size={10}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
