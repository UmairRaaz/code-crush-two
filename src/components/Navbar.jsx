import { Link, NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { GrLanguage } from "react-icons/gr";
import NavbarLogo from "../assets/navbarLogo.svg";
import saudiflag from "../assets/saudiflag.svg";
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
        <div className="flex justify-between flex-col md:flex-row items-center px-4 md:px-0 md:mx-auto md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl ">
          <div className="flex w-full md:w-auto justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => handleClick("/")}
              className="flex items-center "
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
                { to: "/#services", label: "SERVICES" },
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
                  className={`absolute bg-white p-2  mt-28 mr-10 w-28 overflow-hidden border rounded-lg shadow-lg ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <li
                    className=" px-2 py-1 cursor-pointer bg-white hover:bg-gray-200 flex items-center"
                    onClick={() => handleButton("English")}
                  >
                    English
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 512 512"
                      className="h-6 w-6 ml-2" // 5px size and small margin
                    >
                      <g fillRule="nonzero">
                        <path
                          fill="#999"
                          d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"
                        />
                        <path
                          fill="#fff"
                          d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"
                        />
                        <path
                          fill="#FEFEFE"
                          d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"
                        />
                        <path
                          fill="#012169"
                          d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"
                        />
                        <path
                          fill="#C8102E"
                          d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"
                        />
                      </g>
                    </svg>
                  </li>
                  <li
                    className="py-1 pt-2 px-2 cursor-pointer hover:bg-gray-200 justify-between flex items-center"
                    onClick={() => handleButton("Arabic")}
                  >
                    عربي
                    <img src={saudiflag} alt="" className="w-6" />
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
              className={`absolute bg-white p-2  mt-28 mr-10 w-28 overflow-hidden border rounded-lg shadow-lg ${
                navbar ? "block" : "hidden"
              }`}
            >
              <li
                className=" px-2 py-1 cursor-pointer bg-white hover:bg-gray-200 flex items-center"
                onClick={() => handleButton("English")}
              >
                English
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 512"
                  className="h-6 w-6 ml-2" // 5px size and small margin
                >
                  <g fillRule="nonzero">
                    <path
                      fill="#999"
                      d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"
                    />
                    <path
                      fill="#fff"
                      d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"
                    />
                    <path
                      fill="#FEFEFE"
                      d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"
                    />
                    <path
                      fill="#012169"
                      d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"
                    />
                    <path
                      fill="#C8102E"
                      d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"
                    />
                  </g>
                </svg>
              </li>

              <li
                className="py-1 pt-2 px-2 cursor-pointer hover:bg-gray-200 justify-between flex items-center"
                onClick={() => handleButton("Arabic")}
              >
                عربي
                <img src={saudiflag} alt="" className="w-6" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
