import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import { Course } from "../../types/course";
import FavoriteButton from "../../components/course/FavoriteButton/FavoriteButton";
import Loading from "../../components/common/Loading/Loading";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulates a network fetch delay.
    const timer = setTimeout(() => {
      const found = courses.find((c) => c.id === id) ?? null;
      setCourse(found);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  return (
    <div className="course-detail">
      <img src={course.thumbnail} alt={`${course.title} thumbnail`} />
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Category: {course.category}</p>
      <p>Level: {course.level}</p>
      <p>Duration: {course.duration}h</p>
      <p>Rating: ⭐ {course.rating}</p>
      <FavoriteButton courseId={course.id} />
    </div>
  );
}
