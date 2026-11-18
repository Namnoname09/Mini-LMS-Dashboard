import { getEnrolledCourses } from "../../utils/enrollment";
import MyCourseCard from "../../components/dashboard/MyCourseCard/MyCourseCard";
import EmptyState from "../../components/common/EmptyState/EmptyState";

export default function MyCourses() {
  const enrolledCourses = getEnrolledCourses();

  if (enrolledCourses.length === 0) {
    return <EmptyState message="You haven't enrolled in any courses yet." />;
  }

  return (
    <div className="my-courses-page">
      <h1>My Courses</h1>
      <div className="my-courses-page__list">
        {enrolledCourses.map((item) => (
          <MyCourseCard key={item.course.id} item={item} />
        ))}
      </div>
    </div>
  );
}
