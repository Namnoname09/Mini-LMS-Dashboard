import { courses } from "../data/courses";
import { enrollments } from "../data/enrollments";
import { Course } from "../types/course";
import { Enrollment } from "../types/enrollment";

export interface EnrolledCourse {
  course: Course;
  enrollment: Enrollment;
}

// Combines enrollments with their matching course data.
// Skips any enrollment whose courseId doesn't match a real course.
export function getEnrolledCourses(): EnrolledCourse[] {
  return enrollments
    .map((enrollment) => {
      const course = courses.find((c) => c.id === enrollment.courseId);
      return course ? { course, enrollment } : null;
    })
    .filter((item): item is EnrolledCourse => item !== null);
}
