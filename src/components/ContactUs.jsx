import email from "/Images/Icons/email.svg";
import location from "/Images/Icons/location.svg";
import phone from "/Images/Icons/phone.svg";
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
      className="bg-[#4e148d] pb-10 text-white"
      style={{ paddingTop: navbarHeight }}
      
    >
      <div className="md:max-w-4xl overflow-hidden  lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto py-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Get in Touch with Code Crush Technology
        </h1>
        {/* <LineEffect /> */}
        <p className="text-base text-center max-w-4xl mt-4 mx-auto">
          We’re here to assist you! Whether you have inquiries, feedback, or
          need support, our dedicated team is ready to help. Fill out the form
          on the right to reach out to us, and we’ll get back to you promptly.
          Let’s connect and explore how Code Crush Technology can drive your
          business forward.
        </p>
        <div className="flex flex-col md:items-center md:flex-row">
          <div className="w-full  md:w-1/2 px-2 ">
            <div className="w-full md:pl-8">
              <div className="md:p-6 rounded-lg mt-10 md:mt-0 border-black">
                <div className="flex mb-4">
                  <div className="w-[15%]">
                    <img
                      src={email}
                      alt="icon"
                      className="w-[40px] border rounded-full"
                    />
                  </div>
                  <div className="text-gray-100 w-[70%] ">
                    <h1 className="text-2xl">Email :</h1>
                    <h1 className="font-light text-xl">
                      <h1 className="font-light text-xl">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@codecrushtech.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit"
                        >
                          contact@codecrushtech.com
                        </a>
                      </h1>
                    </h1>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-[15%]">
                    <img
                      src={phone}
                      alt="icon"
                      className="w-[40px] border rounded-full"
                    />
                  </div>
                  <div className="text-gray-100 w-[70%]">
                    <h1 className="text-2xl">Phone :</h1>
                    <h1 className="font-light text-xl">+92 314 5857 970</h1>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-[15%]">
                    <img
                      src={location}
                      alt="icon"
                      className="w-[40px] border rounded-full"
                    />
                  </div>
                  <div className="text-gray-100 w-[70%]">
                    <h1 className="text-2xl">Address :</h1>
                    <h1 className="font-light text-xl">
                      Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital,
                      Murree Road, Rawalpindi, Islamabad, Pakistan
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="px-2 py-8 flex items-center justify-center">
              <div>
                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.7103299499302!2d73.07590788843936!3d33.646260576199985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86380c2749d67e11%3A0x3706cda58c9b54f0!2sCode%20Crush%20Technologies!5e0!3m2!1sen!2s!4v1723099403527!5m2!1sen!2s"
                    width="500"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
