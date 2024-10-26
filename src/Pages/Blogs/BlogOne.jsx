import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const BlogOne = () => {
    const blogData = blogsArray[0]; // Accessing the first blog object directly
   
    return (
        <div className="max-w-6xl my-20 mx-auto p-6">
            {/* Blog Image */}
            <div className="mb-6">
                <img
                    src={blogData.image}
                    alt={blogData.title}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Blog Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {blogData.title}
            </h1>

            {/* Blog Overview */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {blogData.overview}
            </p>

            {/* Phases Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Phases of the Project
                </h2>
                <div className="space-y-4">
                    {blogData.phases.map((phase, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                {phase.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                {phase.description}
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                {phase.details.map((detail, i) => (
                                    <li
                                        key={i}
                                        dangerouslySetInnerHTML={{ __html: detail }}
                                        className="text-gray-600"
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conclusion Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
                <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blogData.conclusion }}
                />
            </div>

            {/* Call to Action */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {blogData.callToActionTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    {blogData.callToActionDescription}
                </p>
                <HashLink to={"/#contact"} className="bg-[#4E148D] text-white py-2 px-4 rounded-lg shadow hover:bg-[#6828E8] transition">
                    Contact Us
                </HashLink>
            </div>
        </div>
    );
};

export default BlogOne;
