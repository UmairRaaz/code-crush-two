import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <div className=" text-[#0d4780] py-10">
      <div className="w-[90%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Second Column: Website Sections */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Portfolio</a></li>
              <li><a href="#" className="hover:text-gray-400">Reviews</a></li>
              <li><a href="#" className="hover:text-gray-400">Our Partners</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Blogs</a></li>
              <li><a href="#" className="hover:text-gray-400">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-400">Our Culture</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy and Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms and Condition</a></li>
            </ul>
          </div>
          
          {/* Third Column: Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Custom Software Development</a></li>
              <li><a href="#" className="hover:text-gray-400">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-400">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-gray-400">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-gray-400">Enterprise Software Solutions</a></li>
              <li><a href="#" className="hover:text-gray-400">E-commerce Website Development</a></li>
              <li><a href="#" className="hover:text-gray-400">UI/UX Design and Prototyping </a></li>
              <li><a href="#" className="hover:text-gray-400">Cloud Application Development </a></li>
              <li><a href="#" className="hover:text-gray-400">SaaS (Software as a Service) Development </a></li>
              <li><a href="#" className="hover:text-gray-400">API Development and Integration </a></li>
              <li><a href="#" className="hover:text-gray-400">DevOps Services and Consulting </a></li>
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
