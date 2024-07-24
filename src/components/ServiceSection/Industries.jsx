import React from 'react';
import educationImage from "../../assets/education.jpg";
import financeImage from "../../assets/finanace.jpg";
import travelImage from "../../assets/travel.jpg";
import healthcareImage from "../../assets/healthcare.jpg";
import { NavLink } from 'react-router-dom';
import { industries } from '../../Content/Services';
industries
const Industries = () => {
  const updatedIndustries = industries.slice(0, 4).map((industry, index) => {
    const images = [educationImage, financeImage, travelImage, healthcareImage];
    return { ...industry, image: images[index] };
  });

  return (
    <div className=' w-full text-white grid grid-cols-1 md:grid-cols-2'>
      {updatedIndustries.map((industry, index) => (
        <div key={index} className='relative'>
          <img src={industry.image} alt={industry.name} className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center py-8 px-4 md:px-10 '>
            <h2 className='md:text-5xl text-2xl font-bold mb-2'>{industry.title}</h2>
            <p className='text-left md:pr-20 text-xl text-gray-300'>{industry.description}</p>
            <NavLink
            to={"/view-service/:1"}
             className="bg-white text-gray-700 mt-4 md:mt-20 w-28 md:w-32 md:text-lg text-sm px-4 py-1 rounded-full">Learn More</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Industries;
