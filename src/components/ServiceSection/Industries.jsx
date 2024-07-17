import React from 'react';
import educationImage from "../../assets/education.jpg";
import financeImage from "../../assets/finanace.jpg";
import travelImage from "../../assets/travel.jpg";
import healthcareImage from "../../assets/healthcare.jpg";

const Industries = () => {
  const industries = [
    { name: 'Education', image: educationImage, description: 'We have partnered with some of the leading education and financial institutions.' },
    { name: 'Finance', image: financeImage, description: 'We provide cutting-edge financial solutions to drive innovation in the financial sector.' },
    { name: 'Travel', image: travelImage, description: 'Our solutions help transform the travel industry by enhancing the traveler experience.' },
    { name: 'Healthcare', image: healthcareImage, description: 'We deliver healthcare innovations to improve patient outcomes and streamline operations.' }
  ];

  return (
    <div className='min-h-screen w-full text-white grid grid-cols-1 md:grid-cols-2'>
      {industries.map((industry, index) => (
        <div key={index} className='relative h-[70vh]'>
          <img src={industry.image} alt={industry.name} className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 px-4 md:px-10'>
            <h2 className='md:text-5xl text-2xl font-bold mb-2'>{industry.name}</h2>
            <p className='text-left md:pr-20 text-xl text-gray-300'>{industry.description}</p>
            <button className="bg-white text-gray-700 mt-4 md:mt-20 w-28 md:w-32 md:text-lg text-sm px-4 py-1 rounded-full">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Industries;
