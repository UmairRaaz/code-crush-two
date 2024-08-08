import { Link, NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { GrLanguage } from "react-icons/gr";
import NavbarLogo from "../assets/navbarLogo.svg";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
    window.scrollTo(0, 0);
    setNavbar(false);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleButton = (language) => {
    handleLanguageChange(language);
    setNavbar(false);
  };

  return (
    <div>
      <nav className="w-full nav backdrop-blur-xl py-4 shadow-md fixed top-0 left-0 z-[1000] bg-white">
        <div className="flex justify-between flex-col md:flex-row items-center px-4 md:mx-auto lg:max-w-7xl md:px-10">
          <div className="flex w-full md:w-auto justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => handleClick("/")}
              className="flex items-center gap-x-4"
            >
              <img src={NavbarLogo} alt="logo" className="w-[180px]" />
            </Link>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <img src={close} width={30} height={30} alt="close" />
                ) : (
                  <img
                    src={menu}
                    width={30}
                    height={30}
                    alt="menu"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className={`flex-1 w-full justify-self-center pb-3 mt-8 md:block md:pb-1 md:pt-0 md:mt-2 ${
              navbar ? "px-4 py-1 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen  md:h-auto items-center justify-center md:flex text-[#1a1b28]">
              {[
                { to: "/", label: "HOME" },
                { to: "/about", label: "ABOUT" },
                { to: "/services", label: "SERVICES" },
                { to: "/careers", label: "CAREERS" },
                { to: "/remote-resources", label: "REMOTE RESOURCES" },
                { to: "/#contact", label: "CONTACT" },
              ].map((link) => (
                <li
                  key={link.to}
                  className={`pb-3 text-base font-semibold py-2 md:py-0 md:px-4 text-center border-b-2 md:border-b-0 uppercase md:hover:text-[#171a1f] ${
                    activeLink === link.to ? "active-link-active" : ""
                  }`}
                >
                  <HashLink
                    to={link.to}
                    onClick={() => handleClick(link.to)}
                    className={`active-link ${
                      activeLink === link.to ? "active-link-active" : ""
                    }`}
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}

              {/* Language Button for Mobile */}
              <li className="md:hidden mt-4">
                <button
                  className="flex items-center gap-x-2"
                  onClick={() => setNavbar(!navbar)}
                >
                  <span>{language}</span>
                  <GrLanguage size={20} />
                </button>
                <ul
                  className={`mt-2 w-32 overflow-hidden bg-white border rounded-lg shadow-lg ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <li
                    className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleButton("English")}
                  >
                    English
                  </li>
                  <li
                    className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleButton("Arabic")}
                  >
                    Arabic
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Language Button on md screens */}
          <div className="md:flex hidden items-center">
            <button
              className="flex items-center gap-x-2 "
              onClick={() => setNavbar(!navbar)}
            >
              <span>{language}</span>
              <GrLanguage size={20} />
            </button>
            <ul
              className={`absolute right-0 mt-28 mr-10 w-32 overflow-hidden bg-white border rounded-lg shadow-lg ${
                navbar ? "block" : "hidden"
              }`}
            >
              <li
                className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() => handleButton("English")}
              >
                English
              </li>
              <li
                className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() => handleButton("Arabic")}
              >
                Arabic
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
