import { useAuth } from "../../context/AuthContext";
import { getEnrolledCourses } from "../../utils/enrollment";
import StatCard from "../../components/dashboard/StatCard/StatCard";

export default function Dashboard() {
  const { user } = useAuth();
  const enrolledCourses = getEnrolledCourses();

  const totalEnrolled = enrolledCourses.length;
  const totalCompleted = enrolledCourses.filter((item) => item.enrollment.completed).length;
  const totalHours = enrolledCourses.reduce((sum, item) => sum + item.course.duration, 0);
  const averageProgress =
    totalEnrolled === 0
      ? 0
      : Math.round(
          enrolledCourses.reduce((sum, item) => sum + item.enrollment.progress, 0) /
            totalEnrolled
        );

  return (
    <div className="dashboard-page">
      <h1>Welcome back, {user?.name}</h1>
      <div className="dashboard-page__stats">
        <StatCard label="Enrolled Courses" value={totalEnrolled} />
        <StatCard label="Completed Courses" value={totalCompleted} />
        <StatCard label="Learning Hours" value={totalHours} />
        <StatCard label="Average Progress" value={`${averageProgress}%`} />
      </div>
    </div>
  );
}
