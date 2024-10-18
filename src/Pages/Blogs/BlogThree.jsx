import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogPost = () => {
  // Access the blog at index 2
  const blog = blogsArray[2];

  return (
    <div className="max-w-6xl my-20 mx-auto p-6">
      {/* Blog Image */}
      <div className="mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        {blog.title}
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        {blog.introduction}
      </p>

      {/* Understanding AI Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blog.sections.understandingAI.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {blog.sections.understandingAI.description}
        </p>
      </div>

      {/* Key Benefits Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blog.sections.keyBenefits.title}
        </h2>
        <div className="space-y-4">
          {blog.sections.keyBenefits.benefits.map((benefit, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI in Industries Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blog.sections.aiInIndustries.title}
        </h2>
        <div className="space-y-4">
          {blog.sections.aiInIndustries.industries.map((industry, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Future of AI Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blog.sections.futureOfAI.title}
        </h2>
        <div className="space-y-4">
          {blog.sections.futureOfAI.trends.map((trend, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {trend.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {trend.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How We Harness AI Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blog.sections.howWeHarnessAI.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {blog.sections.howWeHarnessAI.description}
        </p>
      </div>

      {/* Conclusion Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blog.sections.conclusion.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {blog.sections.conclusion.description}
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {blog.sections.conclusion.callToAction}
        </h2>
        <button className=" bg-[#4E148D] hover:bg-[#6828E8] text-white py-2 px-4 rounded-lg shadow transition">
          {blog.sections.conclusion.callToAction}
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
