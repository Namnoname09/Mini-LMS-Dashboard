import { Link } from "react-router-dom";
import { EnrolledCourse } from "../../../utils/enrollment";
import ProgressCard from "../ProgressCard/ProgressCard";

interface MyCourseCardProps {
  item: EnrolledCourse;
}

export default function MyCourseCard({ item }: MyCourseCardProps) {
  const { course, enrollment } = item;

  return (
    <div className="my-course-card">
      <img src={course.thumbnail} alt={`${course.title} thumbnail`} />
      <div className="my-course-card__body">
        <h3>{course.title}</h3>
        <ProgressCard progress={enrollment.progress} />
        {enrollment.completed ? (
          <span className="badge badge--completed">Completed</span>
        ) : (
          <Link to={`/courses/${course.id}`} className="btn btn--primary">
            Continue
          </Link>
        )}
      </div>
    </div>
  );
}
