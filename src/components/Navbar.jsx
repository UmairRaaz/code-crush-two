import { Link, NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from 'react';
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import logo from "../assets/ServicesSection/logo.webp";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
    window.scrollTo(0, 0);
    setNavbar(false);
  };

  return (
    <div>
      <nav className="w-full nav backdrop-blur-xl shadow-md fixed top-0 left-0 z-[1000] bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-28">
          <div>
            <div className="flex items-center justify-between py-3 md:pt-5 md:block">
              {/* LOGO */}
              <Link to="/" onClick={() => handleClick('/')} className="flex items-center gap-x-4">
                <img src={logo} alt="logo" className="w-14" />
                <h1 className="text-xl font-semibold">Code Crush</h1>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
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
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-1 md:pt-6 md:mt-0 ${
                navbar ? 'px-4 py-1 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex text-[#1a1b28]">
                {[
                  { to: '/', label: 'HOME' },
                  { to: '/#about', label: 'ABOUT' },
                  { to: '/#services', label: 'SERVICES' },
                  { to: '/#reviews', label: 'REVIEWS' },
                  { to: '/careers', label: 'CAREERS' },
                  { to: '/#contact', label: 'CONTACT US' }
                ].map(link => (
                  <li
                    key={link.to}
                    className={`pb-3 text-base font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0 uppercase md:hover:text-[#171a1f] ${activeLink === link.to ? 'active-link-active' : ''}`}
                  >
                    <HashLink
                      to={link.to}
                      onClick={() => handleClick(link.to)}
                      className={`active-link ${activeLink === link.to ? 'active-link-active' : ''}`}
                    >
                      {link.label}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
