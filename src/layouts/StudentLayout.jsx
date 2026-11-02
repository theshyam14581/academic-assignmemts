import React from "react";
import StudentNavbar from "../components/StudentNavbar";

const StudentLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavbar />

      <main className="p-6">
        {children}
      </main>
    </div>
  );
};

export default StudentLayout;