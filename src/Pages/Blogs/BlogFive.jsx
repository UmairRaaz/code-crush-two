import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogPost = () => {
  const blog = blogsArray[4]; // Fetch the data at index 4

  return (
    <div className="my-20 bg-gray-100 mx-auto px-4 py-8">
      {/* Blog Image */}
      {/* <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" /> */}

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Introduction */}
      <p className="text-lg mb-6">{blog.introduction}</p>

      {/* Sections */}
      <div>
        {/* Traditional Software Development Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">{blog.sections.traditionalSoftwareDevelopment.title}</h2>
          <p className="mb-4">{blog.sections.traditionalSoftwareDevelopment.overview}</p>

          {/* Traditional Advantages */}
          <h3 className="text-2xl font-semibold mb-2">{blog.sections.traditionalSoftwareDevelopment.advantages.title}</h3>
          <ul className="list-disc list-inside mb-6">
            {blog.sections.traditionalSoftwareDevelopment.advantages.points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.title}</strong>: {point.description}
              </li>
            ))}
          </ul>

          {/* Traditional Challenges */}
          <h3 className="text-2xl font-semibold mb-2">{blog.sections.traditionalSoftwareDevelopment.challenges.title}</h3>
          <ul className="list-disc list-inside">
            {blog.sections.traditionalSoftwareDevelopment.challenges.points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.title}</strong>: {point.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Agile Practices Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">{blog.sections.agilePractices.title}</h2>
          <p className="mb-4">{blog.sections.agilePractices.overview}</p>

          {/* Agile Advantages */}
          <h3 className="text-2xl font-semibold mb-2">{blog.sections.agilePractices.advantages.title}</h3>
          <ul className="list-disc list-inside mb-6">
            {blog.sections.agilePractices.advantages.points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.title}</strong>: {point.description}
              </li>
            ))}
          </ul>

          {/* Agile Challenges */}
          <h3 className="text-2xl font-semibold mb-2">{blog.sections.agilePractices.challenges.title}</h3>
          <ul className="list-disc list-inside">
            {blog.sections.agilePractices.challenges.points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.title}</strong>: {point.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Choosing the Right Methodology */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">{blog.sections.choosingTheRightMethodology.title}</h2>
          <ul className="list-disc list-inside">
            {blog.sections.choosingTheRightMethodology.considerations.map((consideration, index) => (
              <li key={index} className="mb-2">
                <strong>{consideration.title}</strong>: {consideration.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">{blog.sections.conclusion.title}</h2>
          <p>{blog.sections.conclusion.description}</p>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">{blog.sections.callToAction.title}</h2>
          <p className="mb-4">{blog.sections.callToAction.description}</p>
          <p className="font-semibold">{blog.sections.callToAction.finalMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
