import email from "../assets/website_icons/email.svg";
import location from "../assets/website_icons/location.svg";
import phone from "../assets/website_icons/phone.svg";
import LineEffect from "./Buttons/LineEffect";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className="bg-[#fafafa]"
      style={{ paddingTop: navbarHeight }}
      id="contact"
    >
      <div className="md:max-w-4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto py-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Get in Touch with Code Crush Technology
        </h1>
        <LineEffect />
        <p className="text-base text-center max-w-4xl mt-4 mx-auto">
          We’re here to assist you! Whether you have inquiries, feedback, or
          need support, our dedicated team is ready to help. Fill out the form
          on the right to reach out to us, and we’ll get back to you promptly.
          Let’s connect and explore how Code Crush Technology can drive your
          business forward.
        </p>
        <div className="flex flex-col md:items-center md:flex-row">
          <div className="md:w-1/2 px-2 bg-[#fafafa]">
            <div className="w-full md:pl-8">
              <div className="md:p-6 rounded-lg mt-10 md:mt-0 border-black">
                <div className="flex mb-4">
                  <div className="w-[15%]">
                    <img src={email} alt="icon" className="w-[40px]" />
                  </div>
                  <div className="text-gray-600 w-[70%]">
                    <h1 className="text-2xl">Email :</h1>
                    <h1 className="font-light text-xl">
                      contact@codecrushtech.com
                    </h1>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-[15%]">
                    <img src={phone} alt="icon" className="w-[40px]" />
                  </div>
                  <div className="text-gray-600 w-[70%]">
                    <h1 className="text-2xl">Phone :</h1>
                    <h1 className="font-light text-xl">+92 314 5857 970</h1>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-[15%]">
                    <img src={location} alt="icon" className="w-[40px]" />
                  </div>
                  <div className="text-gray-600 w-[70%]">
                    <h1 className="text-2xl">Location :</h1>
                    <h1 className="font-light text-xl">
                      Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital,
                      Murree Road, Rawalpindi
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-[#fafafa]">
            <div className="px-2 py-8 flex items-center justify-center">
              <div >
                <iframe
                  width="520"
                  height="400"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Al-Nawaz%20Arcade,%20Adjacent%20to%20Rawalpindi%20Urology%20Hospital,%20Murree%20Road,%20Rawalpindi+(Code%20Crush)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps trackers</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
