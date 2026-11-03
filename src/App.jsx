
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/students/Dashboard";
import StudentLayout from "./layouts/StudentLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <StudentLayout>
              <Dashboard />
            </StudentLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
