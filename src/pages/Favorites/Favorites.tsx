import { Link } from "react-router-dom";
import { courses } from "../../data/courses";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import FavoriteButton from "../../components/course/FavoriteButton/FavoriteButton";
import { useAppSelector } from "../../hooks/redux";

export default function Favorites() {
  const favoriteIds = useAppSelector((state) => state.favorites.courseIds);
  const favoriteCourses = courses.filter((course) => favoriteIds.includes(course.id));

  if (favoriteCourses.length === 0) {
    return (
      <div className="favorite-page">
        <div className="favorite-page__header">
          <span className="section-badge">Favorited</span>
          <h1>Favorite Courses</h1>
        </div>
        <EmptyState message="You haven't favorited any courses yet." />
      </div>
    );
  }

  return (
    <div className="favorite-page">
      <div className="favorite-page__header">
        <div>
          <span className="section-badge">Favorited</span>
          <h1>Favorite Courses</h1>
        </div>
        <div className="favorite-page__summary">
          <strong>{favoriteCourses.length}</strong>
          <span>saved courses</span>
        </div>
      </div>

      <div className="favorite-page__grid">
        {favoriteCourses.map((course) => (
          <article className="favorite-course-card" key={course.id}>
            <img src={course.thumbnail} alt={course.title} className="favorite-course-card__image" />
            <div className="favorite-course-card__content">
              <div className="favorite-course-card__topline">
                <span className="favorite-course-card__category">{course.category}</span>
                <span className="favorite-course-card__level">{course.level}</span>
              </div>
              <h3>{course.title}</h3>
              <p className="favorite-course-card__meta">
                {course.instructor} · {course.duration}h · ⭐ {course.rating}
              </p>
              <p className="favorite-course-card__description">{course.description}</p>
              <div className="favorite-course-card__actions">
                <FavoriteButton courseId={course.id} />
                <Link to={`/courses/${course.id}`} className="btn btn--primary">
                  View Detail
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
