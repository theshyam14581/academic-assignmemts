
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import StudentLayout from "./layouts/StudentLayout";
import Dashboard from "./pages/students/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <StudentLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </StudentLayout>
    </BrowserRouter>
  );
};

export default App;
