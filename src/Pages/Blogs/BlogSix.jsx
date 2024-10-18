import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogSix = () => {
  // Extract the blog data from index 4
  const blogData = blogsArray[5];

  return (
    <div className="max-w-6xl my-20 mx-auto p-6">
      {/* Blog Image */}
      <div className="mb-6">
        <img
          src={blogData.image}
          alt={blogData.name}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {blogData.title}
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        {blogData.introduction}
      </p>

      {/* Current Trends Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.currentTrends.title}
        </h2>
        <div className="space-y-4">
          {blogData.sections.currentTrends.trends.map((trend, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {trend.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.bestPractices.title}
        </h2>
        <div className="space-y-4">
          {blogData.sections.bestPractices.practices.map((practice, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {practice.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blogData.sections.conclusion.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {blogData.sections.conclusion.description}
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {blogData.sections.callToAction.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {blogData.sections.callToAction.description}
        </p>
        <button className=" bg-[#4E148D] hover:bg-[#6828E8] text-white py-2 px-4 rounded-lg shadow transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default BlogSix;
