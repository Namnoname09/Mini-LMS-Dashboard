import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout/PublicLayout";
import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyCourses from "../pages/MyCourses/MyCourses";
import Favorites from "../pages/Favorites/Favorites";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/courses" element={<MyCourses />} />
          <Route path="/dashboard/favorites" element={<Favorites />} />
        </Route>
      </Route>
    </Routes>
  );
}
