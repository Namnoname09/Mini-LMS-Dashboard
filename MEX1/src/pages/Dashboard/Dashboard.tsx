import { useAuth } from "../../context/AuthContext";
import { useAppSelector } from "../../hooks/redux";
import { getEnrolledCourses } from "../../utils/enrollment";
import StatCard from "../../components/dashboard/StatCard/StatCard";

export default function Dashboard() {
  const { user } = useAuth();
  const favoriteCount = useAppSelector((state) => state.favorites.courseIds.length);
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
      <div className="dashboard-page__header">
        <span className="section-badge section-badge--gold">Favorited</span>
        <h1>Welcome back, {user?.name}</h1>
      </div>
      <div className="dashboard-page__stats">
        <StatCard label="Enrolled Courses" value={totalEnrolled} />
        <StatCard label="Completed Courses" value={totalCompleted} />
        <StatCard label="Learning Hours" value={totalHours} />
        <StatCard label="Average Progress" value={`${averageProgress}%`} />
        <StatCard label="Favorited Courses" value={favoriteCount} />
      </div>
    </div>
  );
}
