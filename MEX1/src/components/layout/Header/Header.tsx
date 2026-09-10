import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Mini LMS
      </Link>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/favorites">Favorite Courses</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span>{user?.name}</span>
            <button type="button" onClick={logout} className="btn btn--secondary">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
