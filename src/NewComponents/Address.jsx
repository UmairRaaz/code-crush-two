import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Address = () => {
  return (
    <div className="bg-[#E8E9F4] py-10">
      <div className="md:max-w-4xl my-10 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Get in Touch with Code Crush Technology
        </h1>

        {/* Section 1: Main Office */}
        <div className="">
          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
            {/* Left Column */}
            <div className="lg:w-1/2 w-full px-4">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Main Office
              </h2>
              <ul className="space-y-4">
                {/* Email */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/email-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <p className="text-gray-600 text-xl">
                    contact@codecrushtech.com
                  </p>
                </li>
                {/* Phone */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/phone-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <p className="text-gray-600 text-xl">+92 314 5857 970</p>
                </li>
                {/* Address */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/address-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <p className="text-gray-600 text-xl">
                    Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital,
                    Murree Road, Rawalpindi
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column: Google Maps Satellite View */}
            <div className="lg:w-1/2 w-full px-4 mt-6 lg:mt-0">
              <div className="p-4 bg-white rounded-xl">
                <img src="/Images/maps/main-office.png" alt="img" />
              </div>
            </div>
          </div>

          {/* Section 2: Regional Office */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start">
            {/* Left Column: Image */}
            <div className="lg:w-1/2 w-full px-4 mt-6 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Regional Office
              </h2>
              <ul className="space-y-4">
                {/* Email */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/email-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <p className="text-gray-600 text-xl">
                    contact@codecrushtech.com
                  </p>
                </li>
                {/* Phone */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/phone-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <p className="text-gray-600 text-xl">+92 314 5857 970</p>
                </li>
                {/* Address */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/address-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <p className="text-gray-600 text-xl">
                    UOM Road, Chakdara, Lower Dir, Khyber Pakhtunkhwa, Pakistan
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 w-full px-4">
              <div className="p-4 bg-white rounded-xl">
                <img src="/Images/maps/regional-office.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
