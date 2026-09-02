# Mini LMS Dashboard

A small, realistic Learning Management System (LMS) front-end built as a React Core assessment project. It simulates course browsing, authentication, a student dashboard, and favoriting — all powered by mock data, with no real backend required.

## Overview

Mini LMS Dashboard lets a visitor browse a course catalog, view course details, and favorite courses they're interested in. After logging in with a demo account, they get access to a personal dashboard showing enrollment statistics and per-course progress. The project is intentionally scoped to be realistic without being over-engineered — it's built to demonstrate a clear, correct application of core React concepts rather than to be a production LMS.

## Features

- Public course catalog with search, category filter, and level filter
- Course detail pages with loading and "not found" states
- Favoriting courses, synced across every page that shows them
- Mock authentication with a demo account and persisted sessions
- Protected dashboard routes, redirecting unauthenticated users to login
- Dashboard with enrollment statistics (enrolled/completed courses, learning hours, average progress)
- "My Courses" page combining enrollment and course data with progress bars
- Responsive layout across desktop, tablet, and mobile
- Accessible semantic markup (labeled inputs, real buttons/links, alt text)

## Tech Stack

- React + TypeScript
- Vite
- React Router DOM
- Redux Toolkit + React Redux
- Context API
- CSS
- LocalStorage for session and favorites persistence

## React Concepts Demonstrated

JSX, function components, props, component composition, `useState`, event handling, conditional rendering, list rendering with stable keys, derived state, `useEffect` (with cleanup), `useContext`, Context API, React Router (nested/layout routes), `useParams`, `Navigate`, protected routes, Redux Toolkit, `useSelector`, `useDispatch`, TypeScript throughout, and responsive component architecture.

## Project Structure

```
src/
├── components/
│   ├── common/       # Button, Loading, EmptyState — shared UI primitives
│   ├── course/       # CourseCard, CourseGrid, CourseFilter, FavoriteButton
│   ├── layout/        # Header, Footer, Sidebar, PublicLayout, DashboardLayout
│   └── dashboard/     # StatCard, ProgressCard, MyCourseCard
├── pages/             # Home, Courses, CourseDetail, Login, Dashboard, MyCourses
├── context/           # AuthContext (authentication)
├── store/             # Redux store + favoriteSlice (favorites)
├── hooks/             # useAuth, typed Redux hooks
├── data/              # Mock courses and enrollments
├── types/             # Course, User, Enrollment interfaces
├── routes/            # AppRoutes, ProtectedRoute
└── utils/             # Shared logic (e.g. enrollment/course joins)
```

## Authentication

Authentication is handled with the **Context API** (`AuthContext` / `AuthProvider` / `useAuth`), not Redux. Auth state is read in many places (header, protected routes, dashboard greeting) but changes rarely — login and logout are infrequent, discrete events — which is exactly the use case Context is suited for. The session is persisted to `localStorage` so refreshing the page doesn't log the user out. `ProtectedRoute` reads `isAuthenticated` from `useAuth()` and redirects unauthenticated visitors to `/login`.

**Demo account:**
```
Email: student@example.com
Password: 123456
```

## Redux Architecture

Favorite courses are managed with **Redux Toolkit**, not Context. Unlike auth, favorite status needs to stay in sync across many independent component trees at once — the same course can appear as a card on the catalog page, on the detail page, and (optionally) on a favorites page, all simultaneously mounted or mounted at different times. A single global store with `useSelector`/`useDispatch` keeps every instance in sync automatically. The `favoriteSlice` holds a `courseIds: string[]` array with `addFavorite`, `removeFavorite`, and `toggleFavorite` reducers, and persists to `localStorage` on every change.

## Routing

Built with React Router's nested/layout routes:

```
/                    → PublicLayout → Home
/courses             → PublicLayout → Courses
/courses/:id         → PublicLayout → CourseDetail
/login               → PublicLayout → Login
/dashboard           → ProtectedRoute → DashboardLayout → Dashboard
/dashboard/courses   → ProtectedRoute → DashboardLayout → MyCourses
```

`PublicLayout` and `DashboardLayout` each render an `<Outlet />`, so the header/footer or sidebar don't need to be repeated in every page component. `ProtectedRoute` wraps the entire dashboard branch once, rather than checking authentication inside each dashboard page individually.

## Mock Data

Course and enrollment data live in `src/data/` as static, typed arrays — no network requests. Courses span multiple categories (Frontend, Backend, JavaScript, React, TypeScript, UI/UX, Database) and all three levels (Beginner, Intermediate, Advanced). Enrollment records reference courses by ID and are combined with course data at render time to produce the dashboard and "My Courses" views.

## Installation

```bash
git clone <repository-url>
cd react-final-lms
npm install
```

## Running Locally

```bash
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

To build for production:
```bash
npm run build
```

## Demo Account

```
Email: student@example.com
Password: 123456
```

## Screenshots

_Add screenshots of the Home page, Courses catalog, Course Detail, Login, and Dashboard here before publishing._

## Future Improvements

- Real backend integration (replace mock data with API calls + `createAsyncThunk`)
- A dedicated `/favorites` page listing all favorited courses
- Course reviews/comments
- Search debouncing for larger course catalogs
- Dark mode via a UI-settings Context
