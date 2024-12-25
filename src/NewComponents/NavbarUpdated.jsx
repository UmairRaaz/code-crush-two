import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling to sections

const NavbarUpdated = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position
  const location = useLocation(); // Hook to get the current URL location

  // Handle click on menu items
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on link click (mobile)
    if (link !== "contact") {
      window.scrollTo(0, 0); // Scroll to top on navigation
    }
  };

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust threshold as needed
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

  // Update active link based on the current location
  useEffect(() => {
    const path = location.pathname.split("/")[1]; // Get the first part of the path
    setActiveLink(path || "home"); // Set the active link to the path (default to "home")
  }, [location]);

  // Define the menu items with title and corresponding path
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/all-services" },
    { title: "Remote Resources", path: "/remote-resources" },
    { title: "Career", path: "/careers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-100" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-10">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <Link to="/" className="flex items-center">
            <img
              src={"/Images/Icons/navbarLogo.svg"}
              alt="logo"
              className="w-[180px]"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed lg:static top-0 right-0 h-screen lg:h-auto w-[70%] lg:w-auto bg-black/70 backdrop-blur-lg rounded-l-lg lg:rounded-full flex flex-col lg:flex-row items-center justify-center lg:gap-6 p-6 lg:py-1 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
        >
          <button
            className="lg:hidden absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          {menuItems.map((item, index) => (
            <div key={index} className="relative flex items-center">
              {/* Using Link component for navigation */}
              <Link
                to={item.path}
                onClick={() => handleLinkClick(item.title)}
                className={`text-white text-lg font-medium px-4 py-2 hover:text-gray-300 ${activeLink === item.title.toLowerCase() ? "text-gray-200" : ""}`}
              >
                {item.title}
              </Link>
              {index !== menuItems.length - 1 && (
                <div className="w-[1px] h-6 bg-white hidden lg:block mx-2" />
              )}
              {activeLink === item.title.toLowerCase() && (
                <span className="absolute bottom-1 left-[50%] translate-x-[-50%] h-[4px] w-[4px] bg-white rounded-full"></span>
              )}
            </div>
          ))}
        </div>

        {/* Contact Us Button with HashLink */}
        <HashLink
          to="/#contact"
          className=" cursor-pointer bg-[#EDE8F4] ml-4 md:ml-0 text-[#4E148D] font-semibold px-6 py-2 text-nowrap text-sm md:text-md rounded-full shadow-md hover:bg-gray-300 transition duration-300"
        >
          Contact Us
        </HashLink>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(true)}
        >
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default NavbarUpdated;
