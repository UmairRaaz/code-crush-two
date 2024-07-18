import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const GetInTouchSection = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[90%] mx-auto flex  flex-col md:flex-row items-center  p-8 md:p-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            We&rsquo;d love to hear from you! Whether you have a question about
            our services, pricing, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <div className=" md:p-6 rounded-lg ">
            <p className="text-gray-600 mb-4">
              <p className="font-semibold flex items-center gap-2">
                <MdOutlineMailOutline size={20} />
                Email:{" "}
                <span className="font-light">contact@softwareagency.com</span>
              </p>
            </p>
            <p className="text-gray-600 mb-4">
              <p className="font-semibold flex items-center gap-2">
                <CiPhone size={20} />
                Phone: <span className="font-light">+123 456 789</span>
              </p>
            </p>
            <p className="text-gray-600 mb-4">
              <p className="font-semibold  flex items-center gap-2">
                <CiLocationOn size={20} />
                Location:{" "}
                <span className="font-light"> 123 Software Street,</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
