import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) => (isActive ? "sidebar__link active" : "sidebar__link")}
      >
        Overview
      </NavLink>
      <NavLink
        to="/dashboard/courses"
        className={({ isActive }) => (isActive ? "sidebar__link active" : "sidebar__link")}
      >
        My Courses
      </NavLink>
    </aside>
  );
}
