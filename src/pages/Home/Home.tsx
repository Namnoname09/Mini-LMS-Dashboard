import { Link } from "react-router-dom";
import { courses } from "../../data/courses";
import CourseGrid from "../../components/course/CourseGrid/CourseGrid";
import "./Home.css";

export default function Home() {
  const featuredCourses = courses.slice(0, 3);
  const totalCourses = courses.length;
  const totalCategories = new Set(courses.map((c) => c.category)).size;
  const averageRating = (
    courses.reduce((sum, c) => sum + c.rating, 0) / courses.length
  ).toFixed(1);

  return (
    <div className="home-page">
      <section className="home-hero">
        <h1>Learn new skills, on your schedule.</h1>
        <p>
          Mini LMS is a small, focused learning platform with hands-on courses
          across web development, databases, and design.
        </p>
        <div className="home-hero__actions">
          <Link to="/courses" className="btn btn--primary">
            Browse Courses
          </Link>
          <Link to="/login" className="btn btn--secondary">
            Login
          </Link>
        </div>
      </section>

      <section className="home-stats">
        <div className="home-stats__item">
          <p className="home-stats__value">{totalCourses}</p>
          <p className="home-stats__label">Courses</p>
        </div>
        <div className="home-stats__item">
          <p className="home-stats__value">{totalCategories}</p>
          <p className="home-stats__label">Categories</p>
        </div>
        <div className="home-stats__item">
          <p className="home-stats__value">⭐ {averageRating}</p>
          <p className="home-stats__label">Average Rating</p>
        </div>
      </section>

      <section className="home-featured">
        <h2>Featured Courses</h2>
        <CourseGrid courses={featuredCourses} />
      </section>

      <section className="home-cta">
        <h2>Ready to start learning?</h2>
        <p>Create a habit of learning something new every week.</p>
        <Link to="/courses" className="btn btn--primary">
          Explore All Courses
        </Link>
      </section>
    </div>
  );
}
