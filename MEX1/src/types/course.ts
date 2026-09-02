export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  level: CourseLevel;
  duration: number; // in hours
  rating: number; // 0-5
  thumbnail: string;
}
