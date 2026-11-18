interface CourseFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  level: string;
  onLevelChange: (value: string) => void;
  categories: string[];
}

export default function CourseFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  level,
  onLevelChange,
  categories,
}: CourseFilterProps) {
  return (
    <div className="course-filter">
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search courses..."
      />

      <label htmlFor="category">Category</label>
      <select id="category" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <label htmlFor="level">Level</label>
      <select id="level" value={level} onChange={(e) => onLevelChange(e.target.value)}>
        <option value="">All</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
}
