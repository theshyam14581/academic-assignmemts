import React from 'react'

import { GraduationCap, Bell, User } from "lucide-react";

const StudentNavbar = () => {
  return (
    <div>
      



    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <GraduationCap size={32} className="text-orange-500" />

        <h1 className="text-xl font-bold">
          <span className="text-orange-500">Academic</span>{" "}
          <span className="text-pink-600">Uploader</span>
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <button className="text-pink-600 font-semibold">
          Dashboard
        </button>

        <button className="text-gray-700 hover:text-orange-500">
          Assignments
        </button>

        <button className="text-gray-700 hover:text-orange-500">
          Submissions
        </button>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-5">
        <Bell
          size={22}
          className="text-orange-500 cursor-pointer"
        />

        <div className="flex items-center gap-2">
          <User size={24} className="text-pink-600" />
          <span className="font-medium text-gray-700">
            Profile
          </span>
        </div>
      </div>

    </nav>

    


    </div>
  )
}

export default StudentNavbar
