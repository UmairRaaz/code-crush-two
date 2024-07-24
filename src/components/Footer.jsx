import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className=" text-[#0d4780] py-10 border-t border-gray-200">
      <div className="w-[90%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Second Column: Website Sections */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#services" className="hover:text-gray-400">Portfolio</a></li>
              <li><a href="#reviews" className="hover:text-gray-400">Reviews</a></li>
              <li><NavLink to={"/all-members"} className="hover:text-gray-400">Our Partners</NavLink></li>
              <li><NavLink to={"/careers"} className="hover:text-gray-400">Careers</NavLink></li>
              <li><a href="#blogs" className="hover:text-gray-400">Blogs</a></li>
              <li><a href="#services" className="hover:text-gray-400">Case Studies</a></li>
              <li><a href="#services" className="hover:text-gray-400">Our Culture</a></li>
              <li><NavLink to="/privacypolicy" className="hover:text-gray-400">Privacy and Policy</NavLink></li>
              <li><NavLink to="/termsandcondition" className="hover:text-gray-400">Terms and Condition</NavLink></li>
            </ul>
          </div>
          
          {/* Third Column: Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Custom Software Development</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Web Development</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Mobile App Development</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Cloud Solutions</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Enterprise Software Solutions</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">E-commerce Website Development</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">UI/UX Design and Prototyping </NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Cloud Application Development </NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">SaaS (Software as a Service) Development </NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">API Development and Integration </NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">DevOps Services and Consulting </NavLink></li>
            </ul>
          </div>
          
          {/* Fourth Column: Contact Us */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:crushcodes@gmail.com" className="hover:text-gray-400">crushcodes@gmail.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+1 234 567 890</a></li>
              <li>Address: 1234 Street Name, City, State, Zip</li>
            </ul>
            <div className="flex gap-6 mt-4 items-center">
              <a href="#" className=" hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className=" hover:text-gray-400">
                <BsTwitterX size={24} />
              </a>
              <a href="#" className=" hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className=" hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
