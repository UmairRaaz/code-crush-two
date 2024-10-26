import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';
import { HashLink } from 'react-router-hash-link';

const BlogTwo = () => {
  // Extract the blog data from index 1
  const blogData = blogsArray[1];

  return (
    <div className="max-w-6xl my-20 mx-auto p-6">
      {/* Blog Image */}
      <div className="mb-8">
        <img
          src={blogData.image}
          alt={blogData.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        {blogData.title}
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-600 mb-6 leading-relaxed text-center">
        {blogData.introduction}
      </p>

      {/* Understanding Custom Software Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.understandingCustomSoftware.title}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {blogData.sections.understandingCustomSoftware.description}
        </p>
      </section>

      {/* Key Benefits Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.keyBenefits.title}
        </h2>
        <div className="space-y-6">
          {blogData.sections.keyBenefits.benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.developmentProcess.title}
        </h2>
        <div className="space-y-6">
          {blogData.sections.developmentProcess.steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.industriesWeServe.title}
        </h2>
        <div className="space-y-6">
          {blogData.sections.industriesWeServe.industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.whyChooseUs.title}
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {blogData.sections.whyChooseUs.reasons.map((reason, index) => (
            <li key={index} className="mb-2">
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.conclusion.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {blogData.sections.conclusion.description}
        </p>
        <HashLink to={"/#contact"}  className="text-lg text-[#4E148D] font-semibold">
          {blogData.sections.conclusion.callToAction}
        </HashLink>
      </section>
    </div>
  );
};

export default BlogTwo;
