import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Address = () => {
  return (
    <div className="bg-[#E8E9F4] py-10 ">
      <div className="md:max-w-4xl mt-10 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl px-3 md:px-0 font-bold text-gray-800 mb-8">
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
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@codecrushtech.com&su=Hello&body=Hi, I’d like to reach out!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xl hover:text-blue-500 transition-colors"
                  >
                    contact@codecrushtech.com
                  </a>
                </li>
                {/* Phone */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/phone-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <a
                    href="tel:+923145857970"
                    className="text-gray-600 text-xl hover:text-blue-500 transition-colors"
                  >
                    +92 314 5857 970
                  </a>
                </li>

                {/* Address */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/address-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <a
                    href="https://www.google.com/maps?q=Al-Nawaz+Arcade,+Adjacent+to+Rawalpindi+Urology+Hospital,+Murree+Road,+Rawalpindi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xl hover:text-blue-500 transition-colors"
                  >
                    Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital,
                    Murree Road, Rawalpindi
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column: Google Maps Satellite View */}
            <div className="lg:w-1/2 w-full px-4 mt-6 lg:mt-0">
              <div className="p-4 bg-white rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.7103299499302!2d73.07590788843936!3d33.646260576199985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86380c2749d67e11%3A0x3706cda58c9b54f0!2sCode%20Crush%20Technologies!5e0!3m2!1sen!2s!4v1723099403527!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Section 2: Regional Office */}
          <div className="flex flex-col gap-y-6 md:gap-y-0 lg:flex-row-reverse items-center lg:items-start">
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
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@codecrushtech.com&su=Hello&body=Hi, I’d like to reach out!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xl hover:text-blue-500 transition-colors"
                  >
                    contact@codecrushtech.com
                  </a>
                </li>
                {/* Phone */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/phone-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <a
                    href="tel:+923145857970"
                    className="text-gray-600 text-xl hover:text-blue-500 transition-colors"
                  >
                    +92 314 5857 970
                  </a>
                </li>
                {/* Address */}
                <li className="flex items-center">
                  <img
                    src="/Images/Icons/address-new.png"
                    alt="image"
                    className="w-10 mr-3"
                  />
                  <a
                    href="https://www.google.com/maps?q=UOM+Road,+Chakdara,+Lower+Dir,+Khyber+Pakhtunkhwa,+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xl hover:text-blue-500 transition-colors"
                  >
                    UOM Road, Chakdara, Lower Dir, Khyber Pakhtunkhwa, Pakistan
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 w-full px-4">
              <div className="p-4 bg-white rounded-xl">
                <iframe
                  title="UOM Road Satellite View"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.021582346674!2d72.0507568!3d34.6695595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc050073746fc9%3A0xd7110da8f3eb92d1!2sCode%20Crush%20Technologies%20Chakdara%20%28near%20UOM%29!5e0!3m2!1sen!2sin!4v1672283833649!5m2!1sen!2sin&maptype=satellite"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
