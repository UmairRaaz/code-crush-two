import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = (hash) => {
    navigate("/");
    setTimeout(() => {
      window.location.hash = hash;
    }, 0);
  };

  return (
    <div
      className="relative"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative bg-yellow-400 min-h-screen md:min-h-[20vh]">
        <div className="bg-white p-2">
          <div className="w-full mx-auto rounded-3xl bg-[#4e148d] pb-10 text-white pt-8 md:py-4 border-t border-gray-200">
            <div className="md:max-w-4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Second Column: Website Sections */}
                <div className="pl-4 md:pl-0">
                  <h3 className="text-lg font-bold mb-4 uppercase">Company</h3>
                  <ul className="space-y-2 ">
                    <li>
                      <NavLink
                        to={"/all-projects"}
                        className="hover:text-gray-400"
                      >
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-members"}
                        className="hover:text-gray-400"
                      >
                        Our Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-blogs"}
                        className="hover:text-gray-400"
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-projects"}
                        className="hover:text-gray-400"
                      >
                        Case Studies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/privacypolicy"
                        className="hover:text-gray-400"
                      >
                        Privacy and Policy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/termsandcondition"
                        className="hover:text-gray-400"
                      >
                        Terms and Condition
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* Third Column: Services */}
                <div className="pl-4 md:pl-0">
                  <h3 className="text-lg font-bold mb-4 uppercase">Services</h3>
                  <ul className="space-y-2 ">
                    <li>
                      <NavLink
                        to={"/all-services/view-service/3"}
                        className="hover:text-gray-400"
                      >
                        Web & App Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-services/view-service/5"}
                        className="hover:text-gray-400"
                      >
                        Cyber Security Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-services/view-service/8"}
                        className="hover:text-gray-400"
                      >
                        Custom Software & CMS Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-services/view-service/7"}
                        className="hover:text-gray-400"
                      >
                        E-Commerce Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-services/view-service/10"}
                        className="hover:text-gray-400"
                      >
                        Digital Marketing & SEO
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/all-services/view-service/6"}
                        className="hover:text-gray-400"
                      >
                        IT Consulting & Support
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* Fourth Column: Contact Us */}
                <div className="pl-4 md:pl-0">
                  <h3 className="text-lg font-bold uppercase mb-4">
                    Contact Us
                  </h3>
                  <ul className="space-y-2 ">
                    <li>
                      Email:{" "}
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@codecrushtech.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit"
                      >
                        contact@codecrushtech.com
                      </a>
                    </li>
                    <li>
                      Phone:{" "}
                      <a href="tel:+1234567890" className="hover:text-gray-400">
                        +92 314 5857 970
                      </a>
                    </li>
                    <li>
                      Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital,
                      Murree Road, Rawalpindi, Islamabad, Pakistan
                    </li>
                    <li>
                      UOM Road, Chakdara, Lower Dir, Khyber Pakhtunkhwa,
                      Pakistan
                    </li>
                  </ul>
                  <div className="inline-flex px-4 py-1 rounded-xl gap-4 bg-white text-gray-600 mt-4 items-center">
                    <a
                      href="https://www.facebook.com/@codecrushtech"
                      target="_blank"
                      className="hover:text-gray-400"
                    >
                      <FaFacebook size={24} className="text-[#1877F2]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/codecrushtech/"
                      target="_blank"
                      className="hover:text-gray-400"
                    >
                      <FaLinkedin size={24} className="text-[#0A66C2]" />
                    </a>
                    <a
                      href="https://www.instagram.com/codecrushtech/"
                      target="_blank"
                      className="hover:text-gray-400"
                    >
                      <FaInstagram size={24} className="text-[#E4405F]" />
                    </a>
                    <a
                      href="https://www.youtube.com/@codecrushtech"
                      target="_blank"
                      className="hover:text-gray-400"
                    >
                      <FaYoutube size={24} className="text-[#FF0000]" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@codecrushtech"
                      target="_blank"
                      className="hover:text-gray-400"
                    >
                      <FaTiktok size={24} className="text-[#000000]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
