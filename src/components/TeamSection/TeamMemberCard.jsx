import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const TeamMemberCard = ({ image, name, role }) => {
  return (
    <div>
      <div className="h-[80%] w-full">
        <img
          src={image}
          alt="portrait"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 text-gray-700">
        <h1 className="text-xl font-bold">{name}</h1>
        <p>
          <i>{role}</i>
        </p>
      </div>
      <div className="flex gap-2 mt-4 items-center">
        <a href="#" className="text-gray-600 hover:text-gray-400">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-400">
          <BsTwitterX size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-400">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-400">
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
