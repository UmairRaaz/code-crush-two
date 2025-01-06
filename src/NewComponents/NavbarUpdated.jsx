import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavbarUpdated = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    if (link !== "contact") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    const matchedItem = menuItems.find((item) => item.path.includes(path));
    setActiveLink(matchedItem ? matchedItem.title.toLowerCase() : "home");
  }, [location]);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/all-services" },
    { title: "Remote Resources", path: "/remote-resources" },
    { title: "Career", path: "/careers" },
  ];

  return (
    <nav
      className={`fixed top-0 md:top-0 py-2 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6 lg:px-10">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <Link to="/" className="flex items-center">
            <img
              src={"/Images/Icons/navbarLogo.svg"}
              alt="logo"
              className="w-[130px]"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed lg:static top-0 right-0 h-screen lg:h-auto w-[70%] lg:w-auto bg-black/40 ${isScrolled ? "bg-black/80" : "bg-black/10"} backdrop-blur-lg rounded-l-lg lg:rounded-full flex flex-col lg:flex-row items-center justify-center lg:gap-1 p-6 lg:py-1 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          }`}
        >
          <button
            className="lg:hidden absolute top-4 right-4 text-white text-5xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center lg:justify-center "
            >
              {/* Using Link component for navigation */}
              <Link
                to={item.path}
                onClick={() => handleLinkClick(item.title.toLowerCase())}
                className={`text-white text-sm font-medium  px-4 py-2 hover:text-gray-300 ${
                  activeLink === item.title.toLowerCase() ? "text-gray-200" : ""
                }`}
              >
                {item.title}
              </Link>
              {index !== menuItems.length - 1 && (
                <div className="w-[1px] h-6 bg-white hidden lg:block" />
              )}
              {activeLink === item.title.toLowerCase() && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-[4px] w-[4px] bg-white rounded-full"></span>
              )}
            </div>
          ))}
        </div>

        {/* Contact Us Button with HashLink */}
        <div className="lg:flex hidden items-center gap-4">
          <HashLink
            to="/#contact"
            className="cursor-pointer bg-[#EDE8F4] text-[#4E148D] font-semibold px-6 py-2 text-nowrap text-sm md:text-md rounded-full shadow-md hover:bg-gray-300 transition duration-300"
          >
            Contact Us
          </HashLink>
        </div>

        {/* Mobile Menu Button and Contact Us Button for small screens */}
        <div className="lg:hidden flex items-center gap-4">
          <HashLink
            to="/#contact"
            className="cursor-pointer bg-[#EDE8F4] text-[#4E148D] font-semibold px-6 py-2 text-nowrap text-sm md:text-md rounded-full shadow-md hover:bg-gray-300 transition duration-300"
          >
            Contact Us
          </HashLink>

          <button
            className={` text-2xl ${isScrolled ? "text-[#4E148D]" : "text-white"}`}
            onClick={() => setIsMenuOpen(true)}
          >
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUpdated;
