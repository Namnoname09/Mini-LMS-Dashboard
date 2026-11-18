import { Course } from "../../../types/course";
import CourseCard from "../CourseCard/CourseCard";
import EmptyState from "../../common/EmptyState/EmptyState";
import "./CourseGrid.css";

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return <EmptyState message="No courses found." />;
  }

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
