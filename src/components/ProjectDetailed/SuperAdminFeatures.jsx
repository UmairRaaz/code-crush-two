import React from 'react'

const SuperAdminFeatures = ({project}) => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white  rounded-lg">
  <h2 className="text-3xl font-bold text-center mb-8 text-[#06496b]">
    Super Admin Features
  </h2>
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {project.SuperAdminFeatures.map((feature, index) => (
      <li
        key={index}
        className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600">{feature.description}</p>
      </li>
    ))}
  </ul>
</div>

  )
}

export default SuperAdminFeatures