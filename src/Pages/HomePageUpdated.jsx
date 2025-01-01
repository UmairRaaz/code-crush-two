import React from "react";
import Collabaration from "../NewComponents/Collabaration";
import JourneySection from "../NewComponents/JourneySection";
import InsideCodeCrush from "../NewComponents/InsideCodeCrush";
import TeamMembers from "../NewComponents/TeamMembers";
import ShowcasingProjects from "../NewComponents/ShowcasingProjects";
import Events from "../NewComponents/Events";
import Blogs from "../NewComponents/Blogs";
import Address from "../NewComponents/Address";
import ContactUs from "../NewComponents/Contactus";
import Services from "../NewComponents/Services";
import HeroUpdated from "../NewComponents/HeroUpdated";
import ServicesWithAnimation from "../NewComponents/ServicesWithAnimation";
import ServiceSection from "../NewComponents/HorizontalScroll/ServiceSection";

const HomePageUpdated = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <HeroUpdated />

      {/* Collabaration Section with a different background color */}
      <Collabaration />

      {/* Main Content Wrapper */}
      <div className="md:max-w-4xl my-10 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        {/* Journey Section */}
        <JourneySection />
      </div>

      {/* <div className="block md:hidden">
      <Services />
      </div> */}
      <div className="">
      <ServiceSection/>
      </div>
      <div className="md:max-w-4xl my-10 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">

        {/* Inside Code Crush */}
        <InsideCodeCrush />
      </div>

      {/* Showcasing Projects with different background color */}
      <ShowcasingProjects />

      {/* Team Members Wrapper */}
      <div className="md:max-w-4xl my-10 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        <TeamMembers />
      </div>

      {/* Events with a different background color */}
      <Events />

      {/* Blogs Wrapper */}
      <div className="md:max-w-4xl my-10 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        <Blogs />
      </div>

      {/* Address with a different background color */}
      <Address />

      {/* Contact Us Wrapper */}
      <div className="md:max-w-4xl  lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePageUpdated;
