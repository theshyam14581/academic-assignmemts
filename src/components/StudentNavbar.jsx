
import React from "react";
import { GraduationCap, Bell, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const StudentNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
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
        <Link to="/dashboard" className="text-pink-600 font-semibold">
          Dashboard
        </Link>

        <Link to="/dashboard" className="text-gray-700 hover:text-orange-500">
          Assignments
        </Link>

        <Link to="/dashboard" className="text-gray-700 hover:text-orange-500">
          Submissions
        </Link>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-5">
        <Bell size={22} className="text-orange-500 cursor-pointer" />

        <div className="flex items-center gap-2">
          <User size={24} className="text-pink-600" />
          <span className="font-medium text-gray-700">Profile</span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg border border-pink-500 px-3 py-2 text-pink-600 hover:bg-pink-50"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

    </nav>
  );
};

export default StudentNavbar;
