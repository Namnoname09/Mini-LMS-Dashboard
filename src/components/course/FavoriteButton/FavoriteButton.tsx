import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleFavorite } from "../../../store/slices/favoriteSlice";

interface FavoriteButtonProps {
  courseId: string;
}

export default function FavoriteButton({ courseId }: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const isFavorited = useAppSelector((state) =>
    state.favorites.courseIds.includes(courseId)
  );

  return (
    <button
      type="button"
      className={isFavorited ? "favorite-btn favorite-btn--active" : "favorite-btn"}
      onClick={() => dispatch(toggleFavorite(courseId))}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorited ? "★ Favorited" : "☆ Favorite"}
    </button>
  );
}
