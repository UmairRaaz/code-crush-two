import React from 'react'

const AllTeamMembers = ({member}) => {
  return (
    <div
    key={member}
    className="team-member bg-white py-6 px-5 rounded-lg shadow-lg flex flex-col gap-6 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
  >
    <div className="flex gap-4 items-center">
      <img
        src={member.image}
        alt={member.fullName}
        className="rounded-full w-20 h-20 object-cover object-center flex-shrink-0 border-2 border-blue-500"
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-blue-800">
          {member.fullName}
        </h2>
        <p className="text-gray-600 mb-2">{member.designation}</p>
      </div>
    </div>
    
  </div>
  )
}

export default AllTeamMembers