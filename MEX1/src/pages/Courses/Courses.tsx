import { useState } from "react";
import { courses } from "../../data/courses";
import CourseGrid from "../../components/course/CourseGrid/CourseGrid";
import CourseFilter from "../../components/course/CourseFilter/CourseFilter";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  // Derived state - recomputed on every render, never stored separately.
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "" || course.category === category;
    const matchesLevel = level === "" || course.level === level;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const categories = [...new Set(courses.map((c) => c.category))];

  return (
    <div className="courses-page">
      <h1>Courses</h1>
      <CourseFilter
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        level={level}
        onLevelChange={setLevel}
        categories={categories}
      />
      <CourseGrid courses={filteredCourses} />
    </div>
  );
}
