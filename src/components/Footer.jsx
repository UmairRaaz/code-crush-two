import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = (hash) => {
    navigate('/');
    setTimeout(() => {
      window.location.hash = hash;
    }, 0);
  };
  return (
    <div className=" text-[#0d4780] py-10 border-t border-gray-200">
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Second Column: Website Sections */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li><NavLink to={"/all-projects"} className="hover:text-gray-400">Portfolio</NavLink></li>
              <li><NavLink to={"/all-members"} className="hover:text-gray-400">Our Team</NavLink></li>
              <li><NavLink to={"/all-blogs"} className="hover:text-gray-400">Blogs</NavLink></li>
              <li><NavLink to={"/all-projects"}  className="hover:text-gray-400">Case Studies</NavLink></li>
              <li><NavLink to="/privacypolicy" className="hover:text-gray-400">Privacy and Policy</NavLink></li>
              <li><NavLink to="/termsandcondition" className="hover:text-gray-400">Terms and Condition</NavLink></li>
            </ul>
          </div>
          
          {/* Third Column: Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Web Development</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">App Development</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">UX/UI Design</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Social Media Marketing</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Content Management Systems (CMS)</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Technical Support</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">SEO Services</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Custom Software Development</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">E-Commerce Solutions</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">Digital Marketing</NavLink></li>
              <li><NavLink to={"/view-service/:1"} className="hover:text-gray-400">IT Consulting</NavLink></li>
            </ul>
          </div>
          
          {/* Fourth Column: Contact Us */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:codecrushtech@gmail.com" className="hover:text-gray-400">codecrushtech@gmail.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+966 59 059 6656</a></li>
              <li>Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital, Murree Road, Rawalpindi</li>
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
