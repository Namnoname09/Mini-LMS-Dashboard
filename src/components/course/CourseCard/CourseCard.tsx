import { Link } from "react-router-dom";
import { Course } from "../../../types/course";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./CourseCard.css";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">
      <img
        src={course.thumbnail}
        alt={`${course.title} thumbnail`}
        className="course-card__thumbnail"
      />
      <div className="course-card__body">
        <h3>{course.title}</h3>
        <p className="course-card__description">{course.description}</p>
        <p className="course-card__meta">
          {course.instructor} · {course.category} · {course.level}
        </p>
        <p className="course-card__meta">
          {course.duration}h · ⭐ {course.rating}
        </p>
        <div className="course-card__actions">
          <FavoriteButton courseId={course.id} />
          <Link to={`/courses/${course.id}`} className="btn btn--primary">
            View Detail
          </Link>
        </div>
      </div>
    </article>
  );
}
